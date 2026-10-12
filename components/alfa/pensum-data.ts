// Currícula y horas transcritas del documento "PENSUM RAV 147 Y 141".
// Las horas por asignatura se muestran como aparecen en la fuente. La fuente
// no desglosa teoría y práctica por materia, así que no se infiere esa división.

import { IMG } from "./images";

export type Module = {
  name: string;
  hours: number;
  /** La fuente identifica expresamente el módulo como práctica. */
  practice?: boolean;
  /** La fuente describe una combinación de materias y prácticas. */
  mixed?: boolean;
};

export type CurriculumBlock = {
  name: string;
  description: string;
  modules: Module[];
};

export type Curriculum = {
  name: string;
  short: string;
  hours: number;
  hoursLabel: string;
  hoursDetail: string;
  summary: string;
  blocks: CurriculumBlock[];
  note?: string;
};

export type Qualification = Curriculum & { code: string };

export type PensumProgram = {
  code: string;
  name: string;
  short: string;
  regulation: string;
  summary: string;
  image: keyof typeof IMG;
  curriculum?: Curriculum;
  qualifications?: Qualification[];
  outcome: string;
};

const module = (name: string, hours: number, practice = false, mixed = false): Module => ({
  name,
  hours,
  ...(practice ? { practice: true } : {}),
  ...(mixed ? { mixed: true } : {}),
});

export const programs: PensumProgram[] = [
  {
    code: "RAV 147",
    name: "Técnico en Mantenimiento Aeronáutico",
    short: "Mantenimiento",
    regulation: "FORMACIÓN TMA · RAV 147",
    summary:
      "Una ruta que reúne fundamentos aeronáuticos y formación específica para la habilitación de Célula, con práctica en taller y en operaciones de mantenimiento.",
    image: "turbine",
    outcome:
      "El pensum contempla 400 horas de materias generales, 700 horas para la habilitación de Célula y un año de instrucción práctica en un puesto de trabajo.",
    curriculum: {
      name: "Formación TMA y habilitación de Célula",
      short: "Ruta completa",
      hours: 1100,
      hoursLabel: "HORAS CURRICULARES",
      hoursDetail: "400 h generales + 700 h de Célula",
      summary:
        "Primero se estudian fundamentos, normativa y documentación. Luego se profundiza en estructuras, sistemas y prácticas de mantenimiento de aeronaves de ala fija y rotativa.",
      note: "Además de estas 1.100 horas, el documento exige un año de instrucción práctica en un puesto de trabajo.",
      blocks: [
        {
          name: "Materias generales",
          description: "Fundamentos técnicos, normativa, aerodinámica y documentación aeronáutica.",
          modules: [
            module("Requerimientos, leyes y reglamentos de aviación civil", 40),
            module("Matemáticas", 48),
            module("Física básica", 48),
            module("Química", 48),
            module("Dibujo técnico", 40),
            module("Inglés técnico", 56),
            module("Control de vuelo y aerodinámica de ala fija", 24),
            module("Control de vuelo y aerodinámica de helicóptero", 24),
            module("Formularios y registros de mantenimiento", 24),
            module("Literatura técnica", 24),
            module("Privilegios y limitaciones de un técnico de mantenimiento", 8),
            module("Factores humanos (actuación humana)", 16),
          ],
        },
        {
          name: "Habilitación de Célula",
          description: "Estructura y sistemas de aeronaves, inspección y prácticas de mantenimiento.",
          modules: [
            module("Materias y prácticas de mantenimiento", 72, false, true),
            module("Estructuras y sistemas de aeronaves: ala fija", 72),
            module("Tren de aterrizaje y sistemas asociados", 24),
            module("Sistema de aire y neumático", 16),
            module("Sistema hidráulico", 32),
            module("Sistema de control atmosférico y oxígeno de cabina", 16),
            module("Sistema de instrumentos", 16),
            module("Sistema de comunicación y navegación", 16),
            module("Sistema de combustible", 32),
            module("Sistema eléctrico", 40),
            module("Sistema de posición y advertencia", 16),
            module("Sistema de control de lluvia y hielo", 16),
            module("Sistema de protección contra fuego", 16),
            module("Sistema motopropulsor: motor y hélice", 40),
            module("Estructuras y sistemas de aeronaves: ala rotativa", 40),
            module("Prácticas básicas de mantenimiento en taller", 80, true),
            module("Reparación, mantenimiento y pruebas funcionales de sistemas y componentes de aeronaves", 36, true),
            module("Documentación de tareas prácticas de control", 8, true),
            module("Inspección de estructura", 16, true),
            module("Instalaciones, herramientas y equipamiento de mantenimiento", 24, true),
            module("Prácticas aplicadas a operaciones de mantenimiento de línea", 36, true),
            module("Prácticas aplicadas a operaciones de mantenimiento de base", 36, true),
          ],
        },
      ],
    },
  },
  {
    code: "HABILITACIONES TMA",
    name: "Habilitaciones para poseedores de licencia TMA",
    short: "Habilitaciones",
    regulation: "FORMACIÓN POSTERIOR A LA LICENCIA TMA",
    summary:
      "Elige una especialidad para ampliar la formación técnica: sistema motopropulsor, aviónica o hélices.",
    image: "turbine",
    outcome:
      "Estas rutas están dirigidas a personas que ya poseen una licencia de Técnico en Mantenimiento Aeronáutico.",
    qualifications: [
      {
        code: "MOTOPROPULSOR",
        name: "Sistema motopropulsor",
        short: "Motopropulsor",
        hours: 550,
        hoursLabel: "HORAS DEL PENSUM",
        hoursDetail: "Motores recíprocos, turbinas y prácticas de mantenimiento",
        summary:
          "Estudia motores recíprocos y de turbina, sus componentes, pruebas funcionales y procedimientos de mantenimiento en taller, línea y base.",
        note: "Pensum para poseedores de licencia TMA.",
        blocks: [
          {
            name: "Motores y mantenimiento",
            description: "Motores recíprocos, motores a turbina y prácticas del sistema motopropulsor.",
            modules: [
              module("Motores recíprocos", 120),
              module("Motores a turbina", 120),
              module("Prácticas básicas de mantenimiento en taller", 80, true),
              module("Sistema motopropulsor, componentes y pruebas funcionales", 30, true),
              module("Documentación de tareas prácticas de control", 40, true),
              module("Instalaciones, herramientas y equipamiento de mantenimiento", 40, true),
              module("Prácticas aplicadas a operaciones de mantenimiento en línea", 60, true),
              module("Prácticas aplicadas a operaciones de mantenimiento en base", 60, true),
            ],
          },
        ],
      },
      {
        code: "AVIÓNICA",
        name: "Habilitación de Aviónica",
        short: "Aviónica",
        hours: 750,
        hoursLabel: "HORAS DEL PENSUM",
        hoursDetail: "Electricidad, electrónica, instrumentos y sistemas de aeronaves",
        summary:
          "Revisa electricidad y electrónica, técnicas digitales, sistemas eléctricos e instrumentos, control automático de vuelo, navegación inercial y radionavegación.",
        note: "Pensum para poseedores de licencia TMA. El documento repite el nombre de cuatro bloques prácticos sin distinguir sus contenidos.",
        blocks: [
          {
            name: "Fundamentos y sistemas de aviónica",
            description: "Bases eléctricas y electrónicas, instrumentos, control de vuelo, navegación y radio.",
            modules: [
              module("Fundamentos de electricidad y electrónica", 48),
              module("Materiales y prácticas de mantenimiento", 48, false, true),
              module("Técnicas digitales, computadoras y dispositivos asociados", 44),
              module("Sistemas eléctricos de aeronaves", 120),
              module("Sistemas de instrumentos de aeronaves", 80),
              module("Sistemas automáticos de control de vuelo (AFCS): ala fija", 32),
              module("Sistemas automáticos de control de vuelo (AFCS): ala rotativa", 32),
              module("Sistemas de navegación inercial de aeronaves (INS)", 32),
              module("Sistemas de radio y radionavegación de aeronaves", 56),
            ],
          },
          {
            name: "Prácticas básicas de mantenimiento en taller",
            description: "Bloques prácticos enumerados en el documento fuente.",
            modules: [
              module("Prácticas básicas de mantenimiento en taller · bloque 1", 32, true),
              module("Prácticas básicas de mantenimiento en taller · bloque 2", 32, true),
              module("Prácticas básicas de mantenimiento en taller · bloque 3", 32, true),
              module("Prácticas básicas de mantenimiento en taller · bloque 4", 162, true),
            ],
          },
        ],
      },
      {
        code: "HÉLICES",
        name: "Habilitación del sistema motopropulsor: hélices",
        short: "Hélices",
        hours: 150,
        hoursLabel: "HORAS DEL PENSUM",
        hoursDetail: "Hélices y prácticas en taller, línea y base",
        summary:
          "Concentra la formación en hélices y en las tareas de mantenimiento, documentación y operación asociadas.",
        note: "Pensum para poseedores de licencia TMA.",
        blocks: [
          {
            name: "Hélices y mantenimiento",
            description: "Módulo de hélices y prácticas aplicadas al mantenimiento aeronáutico.",
            modules: [
              module("Hélices", 34),
              module("Prácticas básicas de mantenimiento en taller", 62, true),
              module("Documentación de tareas prácticas de control", 14, true),
              module("Instalaciones, herramientas y equipamiento de mantenimiento", 24, true),
              module("Prácticas aplicadas a operaciones de mantenimiento en línea", 8, true),
              module("Prácticas aplicadas a operaciones de mantenimiento en base", 8, true),
            ],
          },
        ],
      },
    ],
  },
  {
    code: "RAV 141 · DV",
    name: "Despachador de Vuelo",
    short: "Despacho",
    regulation: "DESPACHADOR DE VUELO · RAV 141",
    summary:
      "Aprende los conocimientos necesarios para planificar y monitorear vuelos, considerando navegación, meteorología, desempeño, peso y seguridad.",
    image: "planeBlueSky",
    outcome:
      "El documento indica 322 horas de formación teórica y 100 horas de instrucción práctica en un puesto de trabajo, dentro de un lapso de 90 días.",
    curriculum: {
      name: "Pensum de Despachador de Vuelo",
      short: "Malla completa",
      hours: 322,
      hoursLabel: "HORAS TEÓRICAS",
      hoursDetail: "+ 100 h de pasantía en puesto de trabajo",
      summary:
        "La malla cubre regulación, planificación, seguimiento y coordinación de las operaciones de vuelo.",
      note: "La pasantía indicada es de 100 horas y debe realizarse en un lapso de 90 días.",
      blocks: [
        {
          name: "Módulos del currículo",
          description: "Fundamentos, planificación, coordinación y seguridad del vuelo.",
          modules: [
            module("Derecho aeronáutico", 24),
            module("Adoctrinamiento en aviación", 20),
            module("Masa y performance de la aeronave", 30),
            module("Navegación", 32),
            module("Control de tránsito aéreo", 20),
            module("Meteorología", 40),
            module("Control de masa y centrado", 40),
            module("Transporte sin riesgo de mercancías peligrosas por vía aérea", 16),
            module("Planificación de vuelo", 40),
            module("Monitoreo de vuelo", 16),
            module("Radiocomunicación", 16),
            module("Factores humanos", 16),
            module("Seguridad: situaciones anormales y de emergencia", 12),
          ],
        },
      ],
    },
  },
  {
    code: "RAV 141 · TCP",
    name: "Tripulante de Cabina de Pasajeros",
    short: "Tripulante de cabina",
    regulation: "TRIPULANTE DE CABINA · RAV 141",
    summary:
      "Fórmate en responsabilidades de cabina, seguridad operacional, atención de emergencias, primeros auxilios e inglés.",
    image: "cabinCrew",
    outcome:
      "El pensum reúne 232 horas de conocimientos teóricos y 40 horas de instrucción práctica en la escuela.",
    curriculum: {
      name: "Pensum de Tripulante de Cabina",
      short: "Malla completa",
      hours: 272,
      hoursLabel: "HORAS TOTALES",
      hoursDetail: "232 h teóricas + 40 h prácticas",
      summary:
        "La formación combina normativa y responsabilidades de cabina con procedimientos de emergencia, seguridad, salud e inglés.",
      blocks: [
        {
          name: "Módulos del currículo",
          description: "Conocimientos aeronáuticos, seguridad, responsabilidades e instrucción práctica.",
          modules: [
            module("Derecho aeronáutico", 20),
            module("Adoctrinamiento aeronáutico", 32),
            module("Factores humanos en aviación", 12),
            module("Obligaciones y responsabilidades", 36),
            module("Equipos y procedimientos de emergencia", 40),
            module("Transporte sin riesgo de mercancías peligrosas", 12),
            module("Seguridad operacional", 20),
            module("Higiene, medicina de aviación y primeros auxilios", 20),
            module("Inglés", 40),
            module("Instrucción práctica en la escuela", 40, true),
          ],
        },
      ],
    },
  },
];

export function getCurriculum(
  program: PensumProgram,
  qualificationCode?: string,
): Curriculum {
  if (program.qualifications?.length) {
    return (
      program.qualifications.find((item) => item.code === qualificationCode) ??
      program.qualifications[0]
    );
  }
  return program.curriculum!;
}

export function statsFor(curriculum: Curriculum) {
  const modules = curriculum.blocks.flatMap((block) => block.modules);
  return {
    modules: modules.length,
    blocks: curriculum.blocks.length,
    hours: curriculum.hours,
  };
}
