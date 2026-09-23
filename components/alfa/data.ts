// Content for the CIA ALFA 552 landing — ported from the Claude Design source.

import { IMG } from "./images";

export type Program = {
  code: string;
  name: string;
  dur: string;
  mode: string;
  req: string;
  out: string;
  fig: string;
  img: string;
  soon: boolean;
};

export const programs: Program[] = [
  {
    code: "TMA-552",
    name: "Técnico de Mantenimiento Aeronáutico",
    dur: "30 MESES",
    mode: "Presencial · hangar y aula, turno mañana o tarde",
    req: "Secundaria completa · 17 años mín. · Examen de aptitud técnica",
    out: "Talleres OMAC, líneas aéreas y aviación general. Con habilitaciones en sistema motopropulsor y aviónica hacia la licencia TMA (INAC).",
    fig: "Célula y motores",
    img: IMG.turbine,
    soon: false,
  },
  {
    code: "TCP-552",
    name: "Tripulante de Cabina",
    dur: "12 MESES",
    mode: "Presencial · aula y maqueta de cabina",
    req: "Secundaria completa · 18 años mín. · Aptitud psicofísica",
    out: "Tripulante de cabina en aerolíneas comerciales. Licencia TCP (INAC).",
    fig: "Cabina de pasajeros",
    img: IMG.cabinCrew,
    soon: false,
  },
  {
    code: "DV-552",
    name: "Despacho de Vuelo",
    dur: "12 MESES",
    mode: "Presencial + virtual síncrono",
    req: "Secundaria completa · Inglés básico · Entrevista",
    out: "Centros de control de operaciones (CCO) de aerolíneas. Licencia DV.",
    fig: "Plan de vuelo",
    img: IMG.planeBlueSky,
    soon: false,
  },
  {
    code: "PPA-552",
    name: "Formación de Pilotos",
    dur: "EN CERTIFICACIÓN",
    mode: "Programa en proceso de certificación ante el INAC",
    req: "Preinscripción abierta · lista de espera 2027",
    out: "Piloto privado y comercial. Apertura estimada 2027.",
    fig: "Fuselaje en plataforma",
    img: IMG.airlinerSky,
    soon: true,
  },
];

export type Value = { code: string; title: string; body: string };

export const values: Value[] = [
  {
    code: "V-01",
    title: "Seguridad Operacional como Dogma",
    body: "La seguridad no es solo una prioridad, es nuestro principio rector.",
  },
  {
    code: "V-02",
    title: "Excelencia Académica y Tecnológica",
    body: "Nos comprometemos con una formación de alto rendimiento.",
  },
  {
    code: "V-03",
    title: "Integridad y Disciplina Aeronáutica",
    body: "Un carácter inquebrantable basado en la honestidad, la transparencia y el respeto absoluto a la normativa.",
  },
  {
    code: "V-04",
    title: "Profesionalismo y Vocación de Servicio",
    body: "Una ética laboral ejemplar y una actitud de servicio de alta calidad.",
  },
  {
    code: "V-05",
    title: "Evolución e Innovación Continua",
    body: "La aviación es dinámica; nosotros también.",
  },
];

export type Cohort = {
  id: string;
  date: string;
  prog: string;
  seats: string;
  status: string;
  stColor: string;
  dateColor: string;
};

export const cohorts: Cohort[] = [
  { id: "C-26A", date: "09 MAR 26", prog: "TMA · MANTENIMIENTO", seats: "0 / 24", status: "CERRADA", stColor: "var(--mid)", dateColor: "var(--mid)" },
  { id: "C-26B", date: "07 SEP 26", prog: "TMA · CÉLULA Y MOTORES", seats: "5 / 24", status: "ÚLTIMOS CUPOS", stColor: "var(--accent)", dateColor: "var(--ink)" },
  { id: "C-26C", date: "02 NOV 26", prog: "DV · DESPACHO DE VUELO", seats: "14 / 18", status: "ABIERTA", stColor: "var(--lt)", dateColor: "var(--ink)" },
  { id: "C-27A", date: "11 ENE 27", prog: "TCP · TRIPULANTE DE CABINA", seats: "24 / 24", status: "ABIERTA", stColor: "var(--lt)", dateColor: "var(--ink)" },
  { id: "C-27B", date: "15 MAR 27", prog: "TMA · HAB. AVIÓNICA", seats: "20 / 20", status: "ABIERTA", stColor: "var(--lt)", dateColor: "var(--ink)" },
  { id: "C-27C", date: "JUL 27 (EST.)", prog: "PPA · PILOTOS, APERTURA", seats: "LISTA DE ESPERA", status: "PREINSCRIPCIÓN", stColor: "var(--accent)", dateColor: "var(--accent)" },
];

export type Post = { cat: string; date: string; title: string; lede: string; img: string };

export const posts: Post[] = [
  {
    cat: "MANTENIMIENTO",
    date: "12 AGO 2026",
    title: "Técnico en mantenimiento: quien decide si una aeronave vuela",
    lede: "Inspecciona, repara y certifica célula, motores y sistemas en talleres OMAC y líneas aéreas. Con sus habilitaciones (sistema motopropulsor y aviónica) firma la aeronavegabilidad: sin su visto bueno, el avión no despega.",
    img: IMG.turbine,
  },
  {
    cat: "CABINA",
    date: "05 AGO 2026",
    title: "Auxiliar de vuelo: la seguridad antes que el servicio",
    lede: "El tripulante de cabina es la autoridad de seguridad a bordo. Ejecuta evacuaciones, primeros auxilios y manejo de emergencias, y a la vez cuida la experiencia del pasajero en aerolíneas comerciales.",
    img: IMG.cabinCrew,
  },
  {
    cat: "OPERACIONES",
    date: "28 JUL 2026",
    title: "Despachador de vuelo: firma antes que el capitán",
    lede: "Desde el centro de control de operaciones planifica ruta, combustible, peso y balance, y sigue el clima. Comparte con el comandante la responsabilidad legal de cada vuelo que despacha.",
    img: IMG.cockpit,
  },
  {
    cat: "PILOTOS",
    date: "10 JUL 2026",
    title: "Piloto de avión: el mando en la cabina (próximamente)",
    lede: "Conduce la aeronave y toma las decisiones de vuelo con criterio técnico y seguridad operacional. El programa de formación de pilotos está en proceso de certificación ante el INAC, con lista de espera abierta.",
    img: IMG.airlinerSky,
  },
];
