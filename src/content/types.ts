// Estructura reutilizable para todas las clases del curso.
export type Section =
  | { type: "text"; title?: string; paragraphs: string[] }
  | { type: "list"; title: string; items: string[] }
  | { type: "parts"; title: string; image?: string; parts: { name: string; description: string }[] }
  | { type: "cycle"; title: string; intro: string }
  | { type: "diagram"; title: string; kind: "phase-changes" | "pressure-circuit" | "compressor-types" | "heat-exchangers" | "expansion-devices" | "refrigerant-compare" | "inverter-curve" | "reversing-valve" }
  | { type: "gallery"; title: string; images: { src: string; caption: string }[] }
  | { type: "videos"; title: string; videos: { title: string; url?: string; note: string; author?: string; learning?: string; verification?: string }[] }
  | { type: "activity"; title: string; intro: string; steps: string[] }
  | { type: "warning"; title: string; items: string[] }
  // Separa la explicación teórica de lo que solo se hace con capacitación y supervisión.
  | { type: "supervised"; title: string; theory: string[]; requiresSupervision: string[] };

export type Level = "Inicial" | "Básico" | "Intermedio" | "Avanzado";

// "pendiente": el contenido no fue revisado por un instructor cualificado.
export type ReviewStatus = "pendiente" | "aprobada";

export type Source = { title: string; url?: string; verified: boolean; note?: string };

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type Lesson = {
  id: string;
  title: string;
  summary: string;
  minutes: number;
  /** Tema con electricidad, refrigerantes, presión, conexiones o puesta en marcha. */
  risk?: boolean;
  review?: ReviewStatus;
  prerequisites?: string[];
  sources?: Source[];
  cover?: string;
  objectives?: string[];
  sections?: Section[];
  quiz?: QuizQuestion[];
};

export type Module = {
  id: string;
  number: number;
  title: string;
  description: string;
  level: Level;
  lessons: Lesson[];
};

export type LibraryItem = {
  id: string;
  name: string;
  category: "Componente" | "Concepto" | "Herramienta" | "Seguridad";
  description: string;
  image?: string;
  lessonId?: string;
};
