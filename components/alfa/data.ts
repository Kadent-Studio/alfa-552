// Content for the CIA ALFA 552 landing — ported from the Claude Design source.

import { IMG } from "./images";

export type Program = {
  /** Stable internal code used by site links and data lookups. */
  code: string;
  /** Public course identifier shown in program listings. */
  publicCode: string;
  name: string;
  dur: string;
  mode: string;
  startDate: string;
  startDateISO: string;
  capacity: number;
  admission: {
    minimumAge: number;
    underageNote?: string;
    documents: { label: string; detail: string }[];
  };
  out: string;
  fig: string;
  img: string;
  calendarImage: keyof typeof IMG;
  soon: boolean;
};

export const programs: Program[] = [
  {
    code: "TMA-552",
    publicCode: "TMA-01",
    name: "Técnico de Mantenimiento Aeronáutico",
    dur: "7 MESES INTENSIVOS",
    mode: "Presencial",
    startDate: "11 de enero de 2027",
    startDateISO: "2027-01-11",
    capacity: 20,
    admission: {
      minimumAge: 17,
      underageNote:
        "Si aún no tienes 18 años, presenta autorización firmada de tu representante legal y copia de su cédula de identidad.",
      documents: [
        { label: "Identificación personal", detail: "Copia legible de la cédula de identidad vigente." },
        {
          label: "Soporte académico",
          detail:
            "Copia del título de Bachiller o de Educación Superior, junto con las Notas Certificadas de Educación Media General originales.",
        },
        { label: "Registro civil", detail: "Copia del acta de nacimiento." },
        {
          label: "Identificación visual",
          detail: "Dos fotografías recientes, tamaño carnet, con fondo blanco.",
        },
        {
          label: "Material de archivo",
          detail:
            "Una carpeta marrón tamaño oficio, provista de gancho, destinada a la apertura y resguardo del expediente académico del alumno.",
        },
      ],
    },
    out: "Talleres OMAC, líneas aéreas y aviación general. Con habilitaciones en sistema motopropulsor y aviónica hacia la licencia TMA (INAC).",
    fig: "Célula y motores",
    img: IMG.turbine,
    calendarImage: "turbine",
    soon: false,
  },
  {
    code: "TCP-552",
    publicCode: "TDC-01",
    name: "Tripulante de Cabina",
    dur: "6 MESES",
    mode: "Presencial",
    startDate: "11 de enero de 2027",
    startDateISO: "2027-01-11",
    capacity: 20,
    admission: {
      minimumAge: 17,
      underageNote:
        "Si aún no tienes 18 años, presenta autorización firmada de tu representante legal y copia de su cédula de identidad.",
      documents: [
        { label: "Identificación personal", detail: "Copia legible de la cédula de identidad vigente." },
        {
          label: "Soporte académico",
          detail:
            "Copia del título de Bachiller o de Educación Superior, junto con las Notas Certificadas de Educación Media General originales.",
        },
        { label: "Registro civil", detail: "Copia del acta de nacimiento." },
        { label: "Aptitud psicofísica", detail: "Precalificativo médico." },
        {
          label: "Identificación visual",
          detail: "Dos fotografías recientes, tamaño carnet, con fondo blanco.",
        },
        {
          label: "Material de archivo",
          detail:
            "Una carpeta marrón tamaño oficio, provista de gancho, destinada a la apertura y resguardo del expediente académico del alumno.",
        },
      ],
    },
    out: "Tripulante de cabina en aerolíneas comerciales. Licencia TCP (INAC).",
    fig: "Cabina de pasajeros",
    img: IMG.cabinCrew,
    calendarImage: "cabinCrew",
    soon: false,
  },
  {
    code: "DV-552",
    publicCode: "DDV-01",
    name: "Despacho de Vuelo",
    dur: "6 MESES",
    mode: "Presencial",
    startDate: "11 de enero de 2027",
    startDateISO: "2027-01-11",
    capacity: 20,
    admission: {
      minimumAge: 20,
      documents: [
        { label: "Identificación personal", detail: "Copia legible de la cédula de identidad vigente." },
        {
          label: "Soporte académico",
          detail:
            "Copia del título de Bachiller o de Educación Superior, junto con las Notas Certificadas de Educación Media General originales.",
        },
        { label: "Registro civil", detail: "Copia del acta de nacimiento." },
        {
          label: "Identificación visual",
          detail: "Dos fotografías recientes, tamaño carnet, con fondo blanco.",
        },
        {
          label: "Material de archivo",
          detail:
            "Una carpeta marrón tamaño oficio, provista de gancho, destinada a la apertura y resguardo del expediente académico del alumno.",
        },
      ],
    },
    out: "Centros de control de operaciones (CCO) de aerolíneas. Licencia DV.",
    fig: "Plan de vuelo",
    img: IMG.planeBlueSky,
    calendarImage: "planeBlueSky",
    soon: false,
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

const SHORT_MONTHS = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
const shortDate = (iso: string) => {
  const [year, month, day] = iso.split("-");
  return `${day} ${SHORT_MONTHS[Number(month) - 1]} ${year.slice(-2)}`;
};

export const cohorts: Cohort[] = programs.map((program, index) => ({
  id: `C-27${String.fromCharCode(65 + index)}`,
  date: shortDate(program.startDateISO),
  prog: `${program.publicCode} · ${program.name.toUpperCase()}`,
  seats: `${program.capacity} alumnos por curso`,
  status: "INICIO DE CLASES",
  stColor: "var(--lt)",
  dateColor: "var(--ink)",
}));

export type Post = { cat: string; date: string; title: string; lede: string; img: string };

export const posts: Post[] = [
  {
    cat: "MANTENIMIENTO",
    date: "12 AGO 2026",
    title: "Técnico en mantenimiento: quien decide si una aeronave vuela",
    lede: "Inspecciona, repara y certifica célula, motores y sistemas en aeronaves que estén bajo órdenes de trabajo en organizaciones de mantenimiento y líneas aéreas certificados por la Autoridad Aeronáutica.",
    img: IMG.turbine,
  },
  {
    cat: "CABINA",
    date: "05 AGO 2026",
    title: "Tripulante de Cabina: la seguridad antes que el servicio",
    lede: "El tripulante de cabina es la autoridad de seguridad a bordo. Ejecuta evacuaciones, primeros auxilios y manejo de emergencias, y a la vez cuida la experiencia del pasajero en aerolíneas comerciales.",
    img: IMG.cabinCrew,
  },
  {
    cat: "OPERACIONES",
    date: "28 JUL 2026",
    title: "Despachador de vuelo: se encarga de la programación, organización y plan de vuelo",
    lede: "Desde el centro de control de operaciones planifica ruta, combustible, peso y balance, y sigue el clima. Comparte con el comandante la responsabilidad legal de cada vuelo que despacha.",
    img: IMG.cockpit,
  },
];

export const CONTACT = {
  phone: "+58 424-6329924",
  email: "ventas@alfa552.com",
  whatsapp: `https://wa.me/584246329924?text=${encodeURIComponent("Hola, quiero información sobre el proceso de admisión.")}`,
};

export const FOUNDED = 2008;
export const YEARS = new Date().getFullYear() - FOUNDED;
