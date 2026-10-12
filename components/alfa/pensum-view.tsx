"use client";

// Malla interactiva de CIA ALFA 552. Conserva el lenguaje visual de la página:
// selector segmentado, resumen bento, banda editorial y malla en cuadrícula.

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { getCurriculum, programs, statsFor, type Curriculum, type PensumProgram } from "./pensum-data";
import { IMG } from "./images";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PensumView() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(programs[0].code);
  const [activeQualification, setActiveQualification] = useState(
    programs.find((program) => program.qualifications)?.qualifications?.[0].code ?? "",
  );
  const program = programs.find((item) => item.code === active) ?? programs[0];
  const curriculum = getCurriculum(program, activeQualification);

  return (
    <div className="flex flex-col">
      <div
        role="tablist"
        aria-label="Rutas de formación"
        className="mono flex overflow-x-auto overscroll-x-contain border border-[var(--hairline)] bg-[var(--surface)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {programs.map((item) => {
          const on = item.code === active;
          return (
            <button
              key={item.code}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(item.code)}
              className="alfa-tap relative shrink-0 border-r border-[var(--hairline)] px-4 py-3 text-left outline-none last:border-r-0 md:px-6 md:py-4"
            >
              {on && (
                <motion.span
                  layoutId="pensum-prog-ind"
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--accent)]"
                />
              )}
              <span className="block text-[11px] tracking-[0.1em]" style={{ color: on ? "var(--accent-text)" : "var(--mid)" }}>
                {item.regulation}
              </span>
              <span
                className="mt-1 block text-[13px] tracking-[-0.01em] transition-colors md:text-[14px]"
                style={{ color: on ? "var(--ink)" : "var(--lt)", fontFamily: "var(--font-sans)" }}
              >
                {item.short}
              </span>
            </button>
          );
        })}
      </div>

      {program.qualifications && (
        <QualificationSelector
          program={program}
          activeCode={curriculum.short}
          onChange={setActiveQualification}
        />
      )}

      <Bento program={program} curriculum={curriculum} reduce={!!reduce} />
      <OutcomeBand program={program} curriculum={curriculum} />
      <RouteBrief program={program} curriculum={curriculum} reduce={!!reduce} />
      <Malla curriculum={curriculum} reduce={!!reduce} />
    </div>
  );
}

function QualificationSelector({
  program,
  activeCode,
  onChange,
}: {
  program: PensumProgram;
  activeCode: string;
  onChange: (code: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 border-x border-b border-[var(--hairline)] bg-[var(--bg)] p-5 md:flex-row md:items-center md:justify-between md:px-7">
      <span className="mono text-[10px] tracking-[0.14em] text-[var(--mid)]">ELIGE UNA HABILITACIÓN</span>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Habilitaciones TMA">
        {program.qualifications?.map((item) => {
          const on = item.short === activeCode;
          return (
            <button
              key={item.code}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => onChange(item.code)}
              className="alfa-tap border px-3 py-2 text-left transition-colors"
              style={{
                borderColor: on ? "var(--accent)" : "var(--hairline)",
                color: on ? "var(--accent-text)" : "var(--lt)",
                background: on ? "var(--surface)" : "transparent",
              }}
            >
              <span className="mono text-[10px] tracking-[0.08em]">{item.short}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Bento({
  program,
  curriculum,
  reduce,
}: {
  program: PensumProgram;
  curriculum: Curriculum;
  reduce: boolean;
}) {
  const stats = statsFor(curriculum);
  const tiles = (index: number, className: string, children: ReactNode) => (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.05, ease: EASE }}
      className={`bg-[var(--bg)] ${className}`}
    >
      {children}
    </motion.div>
  );

  return (
    <div
      key={`${program.code}-${curriculum.short}`}
      className="mt-px grid grid-cols-2 gap-px border border-t-0 border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-4 md:auto-rows-[172px]"
    >
      {tiles(
        0,
        "relative col-span-2 min-h-[240px] overflow-hidden md:row-span-2 md:min-h-0",
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG[program.image]} alt={program.name} loading="lazy" decoding="async" className="alfa-photo absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--bg)_88%,transparent),color-mix(in_srgb,var(--bg)_20%,transparent)_55%,transparent_88%)]" />
          <div className="relative flex h-full flex-col justify-between p-5 md:p-7">
            <div className="flex items-center justify-between gap-3">
              <span className="mono text-[11px] tracking-[0.12em] text-[var(--accent-text)]">{program.regulation}</span>
              <span className="mono border border-[var(--line)] px-2 py-1 text-[9px] tracking-[0.16em] text-[var(--lt)]">PENSUM</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="max-w-[18ch] text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.05] tracking-[-0.02em]">{program.name}</h3>
              <span className="mono text-[11px] tracking-[0.08em] text-[var(--lt)]">{curriculum.name}</span>
            </div>
          </div>
        </>,
      )}

      {tiles(1, "col-span-2 flex flex-col justify-between p-5 md:p-7", <>
        <span className="kicker">Formación</span>
        <div className="flex flex-col gap-2">
          <span className="mono text-[clamp(36px,4.8vw,58px)] leading-[0.9] tracking-[-0.02em] text-[var(--ink)]">{curriculum.hours.toLocaleString("es-VE")}</span>
          <span className="mono text-[10px] tracking-[0.08em] text-[var(--accent-text)]">{curriculum.hoursLabel}</span>
          <span className="max-w-[42ch] text-[12px] leading-relaxed text-[var(--lt)]">{curriculum.hoursDetail}</span>
        </div>
      </>)}

      {tiles(2, "flex flex-col justify-between p-5 md:p-7", <>
        <span className="kicker">Materias</span>
        <div className="flex flex-col gap-1">
          <span className="mono text-[clamp(30px,3.4vw,42px)] leading-[0.9] tracking-[-0.02em] text-[var(--ink)]">{stats.modules}</span>
          <span className="mono text-[10px] tracking-[0.08em] text-[var(--mid)]">MÓDULOS</span>
        </div>
      </>)}

      {tiles(3, "flex flex-col justify-between p-5 md:p-7", <>
        <span className="kicker">Bloques</span>
        <div className="flex flex-col gap-1">
          <span className="mono text-[clamp(30px,3.4vw,42px)] leading-[0.9] tracking-[-0.02em] text-[var(--ink)]">{stats.blocks}</span>
          <span className="mono text-[10px] tracking-[0.08em] text-[var(--mid)]">DEL PENSUM</span>
        </div>
      </>)}

      {tiles(4, "col-span-2 flex flex-col justify-between gap-4 p-5 md:p-7", <>
        <span className="kicker">Cómo se organiza</span>
        <p className="max-w-[54ch] text-[14px] leading-relaxed text-[var(--lt)]">{curriculum.summary}</p>
      </>)}

      {tiles(5, "col-span-2 flex flex-col justify-between gap-3 p-5 md:p-7", <>
        <span className="kicker">Requisito / práctica</span>
        <p className="text-[13px] leading-relaxed text-[var(--lt)]">{curriculum.note ?? "Consulta con Admisión los detalles de la formación práctica y los requisitos de ingreso."}</p>
      </>)}
    </div>
  );
}

function OutcomeBand({ program, curriculum }: { program: PensumProgram; curriculum: Curriculum }) {
  return (
    <div className="flex flex-col gap-6 border border-t-0 border-[var(--hairline)] bg-[var(--surface)] p-6 md:flex-row md:items-center md:justify-between md:p-9">
      <div className="flex flex-col gap-3">
        <span className="mono text-[10px] tracking-[0.16em] text-[var(--accent-text)]">OBJETIVO DE LA RUTA</span>
        <div className="flex flex-col gap-2">
          <span className="text-[clamp(20px,2.4vw,29px)] font-bold leading-[1.05] tracking-[-0.02em]">{program.short === "Habilitaciones" ? curriculum.name : program.name}</span>
          <span className="max-w-[60ch] text-[14px] leading-relaxed text-[var(--lt)]">{program.outcome}</span>
        </div>
      </div>
      <a href="/#sec-cta" className="alfa-cta alfa-cta--ghost mono flex shrink-0 items-center gap-2 px-5 py-3 text-[11px] tracking-[0.14em]">
        CONSULTAR ADMISIÓN
        <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
      </a>
    </div>
  );
}

function RouteBrief({
  program,
  curriculum,
  reduce,
}: {
  program: PensumProgram;
  curriculum: Curriculum;
  reduce: boolean;
}) {
  return (
    <motion.div
      key={`route-${program.code}-${curriculum.short}`}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mt-[clamp(3rem,6vw,5rem)] grid overflow-hidden border border-[var(--hairline)] md:grid-cols-2"
    >
      <div className="relative order-2 min-h-[240px] overflow-hidden md:order-1 md:min-h-[340px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG[program.image]} alt="" loading="lazy" decoding="async" className="alfa-photo absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--bg)_55%,transparent),transparent_55%)]" />
        <span className="mono absolute left-4 top-4 border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_55%,transparent)] px-2 py-1 text-[9px] tracking-[0.16em] text-[var(--lt)] backdrop-blur-sm">
          {program.regulation}
        </span>
      </div>
      <div className="order-1 flex flex-col justify-center gap-5 border-b border-[var(--hairline)] p-7 md:order-2 md:border-b-0 md:border-l md:p-11">
        <span className="mono text-[10px] tracking-[0.18em] text-[var(--accent-text)]">EL RECORRIDO</span>
        <h3 className="max-w-[20ch] text-[clamp(24px,2.8vw,36px)] font-bold leading-[1.06] tracking-[-0.025em]">{curriculum.name}</h3>
        <p className="max-w-[52ch] text-[15px] leading-relaxed text-[var(--lt)]">{curriculum.summary}</p>
      </div>
    </motion.div>
  );
}

function Malla({ curriculum, reduce }: { curriculum: Curriculum; reduce: boolean }) {
  const stats = statsFor(curriculum);
  return (
    <div className="mt-[clamp(3.5rem,7vw,6rem)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="mono text-[10px] tracking-[0.14em] text-[var(--accent-text)]">DESGLOSE DEL PENSUM</span>
          <h2 className="text-[clamp(24px,3vw,38px)] font-bold leading-[1.05] tracking-[-0.03em]">Materias y horas.</h2>
        </div>
        <span className="mono max-w-[52ch] text-[10px] leading-relaxed tracking-[0.06em] text-[var(--mid)]">
          Horas por módulo según el pensum entregado. La fuente no separa teoría y práctica por asignatura.
        </span>
      </div>

      <div className="mt-7 flex flex-col gap-[clamp(2.5rem,5vw,4rem)]">
        {curriculum.blocks.map((block, index) => (
          <motion.section
            key={block.name}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay: reduce ? 0 : Math.min(index * 0.05, 0.2), ease: EASE }}
          >
            <div className="mb-3 grid gap-2 border-b border-[var(--hairline)] pb-4 md:grid-cols-[minmax(180px,0.7fr)_1fr_auto] md:items-end md:gap-6">
              <h3 className="text-[18px] font-semibold leading-snug tracking-[-0.015em]">{block.name}</h3>
              <p className="max-w-[55ch] text-[13px] leading-relaxed text-[var(--lt)]">{block.description}</p>
              <span className="mono text-[10px] tracking-[0.08em] text-[var(--mid)]">{block.modules.length} MÓDULOS</span>
            </div>
            <div className="grid gap-px border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-2">
              {block.modules.map((item, itemIndex) => (
                <div key={`${item.name}-${itemIndex}`} className="alfa-course group flex min-h-[104px] flex-col justify-between gap-3 bg-[var(--bg)] p-4 md:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex items-start gap-2.5 text-[14px] font-semibold leading-snug tracking-[-0.01em]">
                      <span aria-hidden className="mt-[5px] inline-block size-2 shrink-0" style={{ background: item.practice ? "var(--accent)" : "var(--mid)" }} />
                      {item.name}
                    </span>
                    {(item.practice || item.mixed) && (
                      <span className="mono shrink-0 text-[9px] tracking-[0.08em] text-[var(--accent-text)]">
                        {item.practice ? "PRÁCTICA" : "MATERIA + PRÁCTICA"}
                      </span>
                    )}
                  </div>
                  <span className="mono pl-[18px] text-[11px] tracking-[0.06em] text-[var(--lt)]">{item.hours} h</span>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[var(--hairline)] py-6">
        <Total label="MÓDULOS" value={stats.modules} />
        <Total label="BLOQUES" value={stats.blocks} />
        <Total label={curriculum.hoursLabel} value={`${curriculum.hours.toLocaleString("es-VE")} h`} gold />
      </div>
      {curriculum.note && <p className="mt-4 max-w-[76ch] text-[12px] leading-relaxed text-[var(--mid)]">{curriculum.note}</p>}
    </div>
  );
}

function Total({ label, value, gold }: { label: string; value: number | string; gold?: boolean }) {
  return (
    <span className="flex items-baseline gap-2">
      <span className="mono text-[18px] tracking-[-0.01em]" style={{ color: gold ? "var(--accent-text)" : "var(--ink)" }}>{value}</span>
      <span className="mono text-[10px] tracking-[0.1em] text-[var(--mid)]">{label}</span>
    </span>
  );
}
