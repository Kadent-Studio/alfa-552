"use client";

import { useState } from "react";
import { CONTACT } from "./data";
import { WhatsAppIcon } from "./whatsapp-icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inputClass =
  "h-auto rounded-none border-0 bg-transparent px-0 py-1 text-[15px] text-[var(--ink)] shadow-none focus-visible:ring-0 dark:bg-transparent placeholder:text-[var(--mid)]";

export function Admission() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [prepared, setPrepared] = useState(false);

  const f1 = name.trim().length > 2;
  const f2 = /.+@.+\..+/.test(email);
  const f3 = phone.replace(/\D/g, "").length >= 7;
  const f4 = Boolean(program);
  const all = f1 && f2 && f3 && f4;
  const stat = (ok: boolean) => (ok ? "● CONFIRMADO" : "○ PENDIENTE");
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    "Solicitud de admisión - CIA ALFA 552",
  )}&body=${encodeURIComponent(
    `Nueva solicitud de admisión\n\nNombre: ${name.trim()}\nCorreo: ${email.trim()}\nTeléfono / WhatsApp: ${phone.trim()}\nPrograma de interés: ${program}`,
  )}`;

  return (
    <section id="sec-cta" className="border-b border-[var(--hairline)]">
      <div className="alfa-frame grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-7 px-5 py-[clamp(4.5rem,8vw,7rem)] md:border-r md:border-[var(--hairline)] md:px-12">
        <span className="eyebrow">Admisión · Checklist prevuelo</span>
        <h2
          data-reveal
          className="text-[clamp(40px,5vw,72px)] font-extrabold leading-[0.98] tracking-[-0.035em]"
        >
          Autorizado para{" "}
          <span className="text-[var(--accent-text)]">despegar.</span>
        </h2>
        <p className="max-w-[44ch] text-[16px] leading-relaxed text-[var(--lt)]">
          Completa la lista y prepara tu solicitud en el correo. Cuando la envíes,
          un asesor de admisión te contactará en menos de 48 horas con requisitos,
          costos y fechas de examen.
        </p>
      </div>

        <div className="flex flex-col justify-center px-5 py-[clamp(4.5rem,8vw,7rem)] md:px-12">
        <div className="flex flex-col">
          <Row n="01" status={stat(f1)} ok={f1}>
            <Label htmlFor="f-name" className="mono text-[10px] tracking-[0.14em] text-[var(--mid)]">
              NOMBRE COMPLETO
            </Label>
            <Input
              id="f-name"
              className={inputClass}
              placeholder="APELLIDOS, NOMBRES"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setPrepared(false);
              }}
            />
          </Row>

          <Row n="02" status={stat(f2)} ok={f2}>
            <Label htmlFor="f-mail" className="mono text-[10px] tracking-[0.14em] text-[var(--mid)]">
              CORREO ELECTRÓNICO
            </Label>
            <Input
              id="f-mail"
              type="email"
              className={inputClass}
              placeholder="NOMBRE@DOMINIO.COM"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setPrepared(false);
              }}
            />
          </Row>

          <Row n="03" status={stat(f3)} ok={f3}>
            <Label htmlFor="f-tel" className="mono text-[10px] tracking-[0.14em] text-[var(--mid)]">
              TELÉFONO / WHATSAPP
            </Label>
            <Input
              id="f-tel"
              type="tel"
              className={inputClass}
              placeholder="+58 000 000 0000"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setPrepared(false);
              }}
            />
          </Row>

          <Row n="04" status={stat(f4)} ok={f4}>
            <Label htmlFor="f-prog" className="mono text-[10px] tracking-[0.14em] text-[var(--mid)]">
              PROGRAMA DE INTERÉS
            </Label>
            <Select
              value={program}
              onValueChange={(value) => {
                setProgram(value);
                setPrepared(false);
              }}
            >
              <SelectTrigger
                id="f-prog"
                className="h-auto w-full rounded-none border-0 bg-transparent px-0 py-1 text-sm text-[var(--ink)] shadow-none focus-visible:ring-0 dark:bg-transparent data-placeholder:text-[var(--mid)]"
              >
                <SelectValue placeholder="SELECCIONAR PROGRAMA" />
              </SelectTrigger>
              <SelectContent
                position="popper"
                className="border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
              >
                <SelectItem value="TMA">TMA-01 · MANTENIMIENTO AERONÁUTICO</SelectItem>
                <SelectItem value="TCP">TDC-01 · TRIPULANTE DE CABINA</SelectItem>
                <SelectItem value="DV">DDV-01 · DESPACHO DE VUELO</SelectItem>
              </SelectContent>
            </Select>
          </Row>

          <Button
            type="button"
            onClick={() => {
              if (!all) return;
              window.location.href = mailto;
              setPrepared(true);
            }}
            disabled={!all}
            className="alfa-submit mono mt-8 flex h-auto items-center justify-between rounded-none px-6 py-5 text-[13px] tracking-[0.14em]"
            style={{
              border: `1px solid ${all || prepared ? "var(--accent)" : "var(--line)"}`,
              background: prepared ? "var(--accent)" : "transparent",
              color: prepared ? "var(--accent-ink)" : all ? "var(--ink)" : "var(--mid)",
              opacity: all || prepared ? 1 : 0.65,
              transition:
                "background 0.5s cubic-bezier(0.16,1,0.3,1),color 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span>
              {prepared
                ? "CORREO PREPARADO · CONFIRMA EL ENVÍO"
                : all
                  ? "ABRIR CORREO PARA ENVIAR"
                  : "COMPLETA LOS DATOS PARA CONTINUAR"}
            </span>
            <span aria-hidden>→</span>
          </Button>

          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener"
            className="alfa-cta alfa-cta--ghost alfa-cta--wa mono mt-4 flex items-center justify-between px-6 py-4 text-[12px] tracking-[0.14em] text-[var(--lt)]"
          >
            <span className="flex items-center gap-3"><WhatsAppIcon />O ESCRÍBENOS POR WHATSAPP</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  n,
  status,
  ok,
  children,
}: {
  n: string;
  status: string;
  ok: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-4 border-b border-[var(--hairline)] py-4 transition-colors focus-within:border-[var(--accent)]">
      <span className="mono text-[12px] text-[var(--mid)]">{n}</span>
      <div className="flex flex-col gap-1.5">{children}</div>
      <span
        className="mono text-right text-[10px] tracking-[0.12em]"
        style={{ color: ok ? "var(--accent-text)" : "var(--mid)" }}
      >
        {status}
      </span>
    </div>
  );
}
