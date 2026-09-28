"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { MapSite } from "./location-map";

const LocationMap = dynamic(
  () => import("./location-map").then((m) => m.LocationMap),
  {
    ssr: false,
    loading: () => <div className="h-full w-full bg-[var(--surface)]" />,
  },
);

type Site = MapSite & {
  role: string;
  address: string;
  hours: string;
};

// TODO(alfa): confirmar coordenadas y dirección exactas de Campus Caracas y
// del Aula anexa. El hangar apunta al Aeropuerto Int. Simón Bolívar (SVMI).
const SITES: Site[] = [
  {
    id: "campus",
    code: "HQ",
    name: "Campus Caracas",
    role: "Sede principal. Aulas teóricas, simuladores de cabina y sala de despacho.",
    address: "Caracas, Distrito Capital",
    hours: "LUN-SÁB · 08:00-18:00",
    lat: 10.4961,
    lng: -66.8497,
  },
  {
    id: "hangar",
    code: "SVMI",
    name: "Hangar escuela",
    role: "Prácticas de mantenimiento en aeronave real, en plataforma.",
    address: "Aeropuerto Int. Simón Bolívar, Maiquetía, La Guaira",
    hours: "Según calendario de prácticas",
    lat: 10.6012,
    lng: -66.9913,
  },
  {
    id: "anexo",
    code: "ANX",
    name: "Aula anexa",
    role: "Clases teóricas complementarias y exámenes internos.",
    address: "Caracas, Distrito Capital",
    hours: "LUN-VIE · 08:00-17:00",
    lat: 10.4917,
    lng: -66.8783,
  },
];

const directionsUrl = (s: Site) =>
  `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`;

export function Location() {
  const [activeId, setActiveId] = useState(SITES[0].id);
  const active = SITES.find((s) => s.id === activeId) ?? SITES[0];

  return (
    <section id="sec-location" className="border-b border-[var(--hairline)]">
      <div className="alfa-frame grid md:grid-cols-[5fr_7fr]">
        <div className="flex flex-col gap-10 px-5 py-[clamp(4.5rem,8vw,7rem)] md:border-r md:border-[var(--hairline)] md:px-12">
          <div className="flex flex-col gap-5">
            <h2
              data-reveal
              className="max-w-[16ch] text-[clamp(30px,3.4vw,46px)] font-bold leading-[1.04] tracking-[-0.03em] [text-wrap:balance]"
            >
              Encuéntranos en Caracas y Maiquetía.
            </h2>
            <p
              data-reveal
              style={{ transitionDelay: "0.08s" }}
              className="max-w-[42ch] text-[15px] leading-relaxed text-[var(--lt)]"
            >
              La teoría se dicta en Caracas. Las prácticas en aeronave se hacen
              en el hangar escuela del aeropuerto.
            </p>
          </div>

          <ul className="flex flex-col border-t border-[var(--hairline)]" aria-label="Sedes">
            {SITES.map((s) => {
              const on = s.id === activeId;
              return (
                <li key={s.id} className="border-b border-[var(--hairline)]">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActiveId(s.id)}
                    className="alfa-site group grid w-full cursor-pointer grid-cols-[14px_minmax(0,1fr)_auto] items-center gap-4 py-5 text-left"
                  >
                    <span aria-hidden className="alfa-site__mark" />
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="alfa-site__name text-[17px] font-semibold tracking-[-0.01em]">
                        {s.name}
                      </span>
                      <span className="text-[13px] leading-snug text-[var(--mid)]">
                        {s.address}
                      </span>
                    </span>
                    <span className="alfa-site__code mono text-[11px] tracking-[0.14em]">
                      {s.code}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Keyed so each selection replays the short crossfade. */}
          <div key={active.id} className="alfa-swap flex flex-col gap-6" aria-live="polite">
            <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-3 text-[14px] leading-relaxed">
              <dt className="mono pt-[3px] text-[10px] tracking-[0.16em] text-[var(--mid)]">USO</dt>
              <dd className="text-[var(--lt)]">{active.role}</dd>
              <dt className="mono pt-[3px] text-[10px] tracking-[0.16em] text-[var(--mid)]">HORARIO</dt>
              <dd className="mono text-[13px] text-[var(--lt)]">{active.hours}</dd>
            </dl>

            <a
              href={directionsUrl(active)}
              target="_blank"
              rel="noopener noreferrer"
              className="alfa-cta alfa-cta--solid alfa-directions mono flex items-center justify-between gap-6 px-6 py-5 text-[13px] tracking-[0.14em] sm:w-fit sm:min-w-[20rem]"
            >
              <span>CÓMO LLEGAR</span>
              <ArrowUpRight aria-hidden size={18} strokeWidth={1.5} className="alfa-directions__icon" />
              <span className="sr-only">
                a {active.name} en Google Maps (se abre en una pestaña nueva)
              </span>
            </a>
          </div>
        </div>

        <div data-reveal="mask" className="relative h-[62vh] min-h-[380px] md:h-auto md:min-h-[640px]">
          <LocationMap sites={SITES} activeId={activeId} onSelect={setActiveId} />
        </div>
      </div>
    </section>
  );
}
