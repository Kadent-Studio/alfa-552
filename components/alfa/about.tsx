import { IMG } from "./images";

const STATS = [
  { count: "15", suffix: " AÑOS", label: "DE OPERACIÓN", accent: false },
  { count: "1240", suffix: "+", label: "TÉCNICOS EGRESADOS", accent: true },
  { count: "92", suffix: "%", label: "EMPLEABILIDAD 12M", accent: false },
];

export function About() {
  return (
    <section id="sec-about" className="border-b border-[var(--hairline)]">
      <div className="alfa-frame grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-[clamp(2rem,4vw,3.25rem)] px-5 py-[clamp(4.5rem,8vw,7rem)] md:border-r md:border-[var(--hairline)] md:px-12">
        <h2
          data-reveal
          className="max-w-[24ch] text-[clamp(30px,3.6vw,50px)] font-bold leading-[1.04] tracking-[-0.03em]"
        >
          Una operación con estándares de calidad y seguridad forma profesionales
          de alto valor y cotización en el mercado aeronáutico.
        </h2>

        <div
          data-reveal
          style={{ transitionDelay: "0.12s" }}
          className="max-w-[62ch] space-y-4 text-[15px] leading-relaxed text-[var(--lt)] md:columns-2 md:gap-10 md:space-y-0"
        >
          <p className="md:mb-4">
            El centro de instrucción aeronáutica ALFA 552 opera bajo los criterios
            de las normas nacionales e internacionales dictaminadas por la
            autoridad aeronáutica. Cada programa de formación está alineado a los
            requisitos para la obtención de la licencia certificada emitida por el
            Instituto Nacional de Aeronáutica Civil, bajo el cumplimiento de las
            Regulaciones Aeronáuticas Venezolanas.
          </p>
          <p>
            Nuestros instructores tienen una formación forjada en una larga
            trayectoria en líneas aéreas y talleres de mantenimiento aeronáutico,
            donde sus conocimientos son de gran valor y están apegados a los
            programas de formación de nuestra organización. El plan de estudios
            combina prácticas reales en campo con teoría en aula.
          </p>
        </div>

        <div className="grid grid-cols-3 border border-[var(--hairline)]">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-2.5 p-5 md:p-6 ${
                i < STATS.length - 1 ? "border-r border-[var(--hairline)]" : ""
              }`}
            >
              <span
                data-count={s.count}
                data-suffix={s.suffix}
                className={`mono text-[clamp(24px,3vw,34px)] leading-none ${
                  s.accent ? "text-[var(--accent-text)]" : ""
                }`}
              >
                {s.count}
                {s.suffix}
              </span>
              <span className="mono text-[10px] tracking-[0.12em] text-[var(--mid)]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

        <div className="relative min-h-[52vh] md:min-h-0">
          <div className="h-full overflow-hidden md:sticky md:top-16 md:h-[calc(100vh-4rem)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.hangar}
              alt="Hangar de mantenimiento con una aeronave de fuselaje ancho en plataforma"
              loading="lazy"
              decoding="async"
              className="alfa-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
