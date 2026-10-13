import type { Metadata } from "next";
import "../alfa.css";
import "./pensum.css";

import { ScrollFX } from "@/components/alfa/scroll-fx";
import { Grain } from "@/components/alfa/grain";
import { SiteHeader } from "@/components/alfa/site-header";
import { SiteFooter } from "@/components/alfa/site-footer";
import { PensumView } from "@/components/alfa/pensum-view";
import { programs } from "@/components/alfa/pensum-data";
import { SITE_URL } from "@/lib/seo/site";

const PAGE_TITLE = "Pensum";
const PAGE_DESCRIPTION =
  "Conoce las materias y horas de formación de CIA ALFA 552: Mantenimiento Aeronáutico, habilitaciones TMA, Despacho de Vuelo y Tripulante de Cabina.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/pensum",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/pensum",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: programs.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name: p.name,
      description: p.summary,
      provider: {
        "@type": "EducationalOrganization",
        name: "CIA ALFA 552",
        url: SITE_URL,
      },
    },
  })),
};

export default function PensumPage() {
  return (
    <div id="alfa-root" className="relative min-w-0 [overflow-x:clip]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <ScrollFX />
      <Grain />
      <SiteHeader />

      <main className="pt-16">
        {/* ---- Intro ------------------------------------------------------ */}
        <section id="sec-pensum-top" className="border-b border-[var(--hairline)]">
          <div className="alfa-container flex flex-col gap-6 pt-[clamp(3.5rem,7vw,6rem)] pb-[clamp(2.5rem,4vw,3.5rem)]">
            <span className="eyebrow">Pensum · Rutas de formación aeronáutica</span>
            <h1
              data-reveal
              className="max-w-[20ch] text-[clamp(34px,4.6vw,64px)] font-extrabold leading-[1.0] tracking-[-0.035em]"
            >
              Lo que se aprende,{" "}
              <span className="text-[var(--accent-text)]">clase por clase.</span>
            </h1>
            <p className="max-w-[60ch] text-[16px] leading-relaxed text-[var(--lt)]">
              Explora las materias y horas de cada ruta. El desglose sigue el
              pensum entregado por la escuela y diferencia la formación general,
              las habilitaciones técnicas y la instrucción práctica indicada.
            </p>

            {/* Aggregate figures (count up on view) */}
            <div className="mt-2 flex flex-wrap gap-x-10 gap-y-5 border-t border-[var(--hairline)] pt-6">
              <IntroStat count={3} label="HABILITACIONES TMA" />
              <IntroStat count={1100} suffix=" H" label="TMA + CÉLULA" gold />
              <IntroStat count={322} suffix=" H" label="DESPACHO · TEORÍA" />
            </div>
          </div>
        </section>

        {/* ---- Pensum ---------------------------------------------------- */}
        <section
          id="sec-pensum"
          className="alfa-section pt-[clamp(2.5rem,5vw,4rem)]"
        >
          <div className="alfa-container" data-reveal>
            <PensumView />
          </div>
        </section>

        {/* ---- CTA ------------------------------------------------------- */}
        <section className="border-t border-[var(--hairline)]">
          <div className="alfa-container pb-[clamp(3.5rem,7vw,6rem)] pt-[clamp(3.5rem,6vw,5rem)]">
            <div className="flex flex-col gap-6 border border-[var(--hairline)] bg-[var(--surface)] p-6 md:flex-row md:items-center md:justify-between md:p-9">
              <div className="flex flex-col gap-3">
                <span className="mono text-[10px] tracking-[0.16em] text-[var(--accent-text)]">
                  ¿TE VES EN ESTA MALLA?
                </span>
                <p className="max-w-[54ch] text-[clamp(18px,2vw,24px)] font-semibold leading-snug tracking-[-0.015em]">
                  Admisión te arma un plan con las fechas de tu cohorte y los
                  requisitos de ingreso.
                </p>
              </div>
              <a
                href="/#sec-cta"
                className="alfa-cta alfa-cta--solid mono flex shrink-0 items-center gap-3 px-6 py-4 text-[12px] tracking-[0.12em]"
              >
                HABLAR CON ADMISIÓN
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function IntroStat({
  count,
  label,
  suffix,
  gold,
}: {
  count: number;
  label: string;
  suffix?: string;
  gold?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        data-count={String(count)}
        data-suffix={suffix ?? ""}
        className="mono text-[clamp(28px,3.4vw,40px)] leading-none tracking-[-0.02em]"
        style={{ color: gold ? "var(--accent-text)" : "var(--ink)" }}
      >
        {count}
        {suffix ?? ""}
      </span>
      <span className="mono text-[10px] tracking-[0.12em] text-[var(--mid)]">
        {label}
      </span>
    </div>
  );
}
