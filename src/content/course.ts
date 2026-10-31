import type { Module, Lesson, LibraryItem } from "./types";
import { lesson2, lesson3, lesson4, lesson5, lesson6 } from "./lessons-m1";
import { lesson7, lesson8, lesson9, lesson10, lesson11, lesson12 } from "./lessons-m2";
import { lesson13, lesson14, lesson15, lesson16, lesson17, lesson18 } from "./lessons-m3";
import { lesson19, lesson20, lesson21, lesson22, lesson23, lesson24 } from "./lessons-m4";
import { lesson25, lesson26, lesson27, lesson28, lesson29, lesson30 } from "./lessons-m5";
import splitImg from "@/assets/split-system.jpg";
import outdoorImg from "@/assets/outdoor-unit.jpg";
import indoorImg from "@/assets/indoor-unit.jpg";
import splitReference from "@/assets/split-circuito-referencia.jpeg.asset.json";
import placaComponentes from "@/assets/m4-placa-componentes.jpg.asset.json";
import placaSensores from "@/assets/m4-placa-sensores.jpg.asset.json";
import puestaTierra from "@/assets/m4-puesta-tierra.jpg.asset.json";

const lesson1: Lesson = {
  id: "que-hace-un-aire-acondicionado",
  title: "¿Qué hace un aire acondicionado?",
  summary: "Entendé cómo un equipo traslada el calor del interior al exterior y reconocé sus partes principales.",
  minutes: 25,
  review: "pendiente",
  cover: splitImg,
  prerequisites: ["Ninguno. Es la clase de inicio del curso."],
  sources: [
    { title: "Manual de instalación y uso del fabricante de tu equipo", verified: false, note: "Pendiente de incorporar: elegir manuales concretos y comprobarlos." },
    { title: "ASHRAE Handbook — Fundamentals (2021), cap. 2: Thermodynamics and Refrigeration Cycles", url: "https://www.ashrae.org/technical-resources/ashrae-handbook", verified: false, note: "Obra de referencia internacional (en inglés, de pago). El sitio bloquea la verificación automática: confirmar edición y capítulo con el ejemplar disponible." },
  ],
  objectives: [
    "Explicar con tus palabras que un aire acondicionado no «fabrica frío», sino que traslada calor.",
    "Identificar la unidad interior, la unidad exterior, las cañerías, el desagüe y las conexiones eléctricas.",
    "Nombrar los cuatro componentes del ciclo frigorífico y su función básica.",
    "Reconocer los riesgos principales antes de acercarte a un equipo.",
  ],
  sections: [
    {
      type: "text",
      title: "La idea central: mover calor",
      paragraphs: [
        "Un aire acondicionado funciona como una «bomba de calor»: toma el calor del aire de la habitación y lo lleva hacia afuera. El aire que sale frío de la unidad interior es aire al que se le quitó calor.",
        "Para hacerlo usa un fluido llamado refrigerante, que circula por un circuito cerrado. El refrigerante absorbe calor cuando se evapora (adentro) y lo libera cuando se condensa (afuera).",
        "Además, al enfriar el aire, la humedad del ambiente se condensa en forma de agua. Por eso los equipos tienen un desagüe.",
      ],
    },
    {
      type: "parts",
      title: "Partes que podés ver en un equipo split",
      image: splitReference.url,
      parts: [
        { name: "Unidad interior", description: "Va dentro del ambiente. Contiene el evaporador, el ventilador interior y los filtros de aire." },
        { name: "Unidad exterior", description: "Va afuera. Contiene el compresor, el condensador y el ventilador exterior. Es la que expulsa el calor." },
        { name: "Cañerías de cobre", description: "Dos caños aislados unen ambas unidades: por ellos circula el refrigerante de ida y de vuelta." },
        { name: "Desagüe", description: "Manguera que evacúa el agua condensada en la unidad interior." },
        { name: "Conexiones eléctricas", description: "Alimentación del equipo y cable de interconexión entre unidades. Solo debe manipularlas personal capacitado." },
      ],
    },
    {
      type: "cycle",
      title: "El ciclo frigorífico, paso a paso",
      intro: "En modo frío, el refrigerante recorre siempre el mismo camino (en modo calor, la válvula inversora cambia el sentido; se ve en la clase 18). Seguí las flechas del esquema:",
    },
    {
      type: "gallery",
      title: "Galería de recursos visuales",
      images: [
        { src: splitReference.url, caption: "Equipo split y circuito de refrigeración con etiquetas en español: imagen aportada por el usuario." },
        { src: indoorImg, caption: "Unidad interior abierta: filtros de aire y serpentina del evaporador." },
        { src: outdoorImg, caption: "Unidad exterior: ventilador y válvulas de servicio con cañerías aisladas." },
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [
        { title: "Funcionamiento del ciclo frigorífico (animación)", note: "Pendiente de incorporar: el equipo docente debe seleccionar y verificar un video de una fuente confiable." },
        { title: "Recorrido por un equipo split instalado", note: "Pendiente de incorporar: recurso a verificar antes de publicarlo." },
      ],
    },
    {
      type: "activity",
      title: "Actividad práctica: observación segura",
      intro: "Observá un equipo instalado en tu casa o en un lugar autorizado. Solo mirar: no abras tapas, no toques cables ni cañerías.",
      steps: [
        "Ubicá la unidad interior y la exterior. Anotá dónde está cada una.",
        "Leé la etiqueta de datos (suele estar al costado de la unidad): marca, modelo, tipo de refrigerante y capacidad.",
        "Seguí con la vista el recorrido de las cañerías entre ambas unidades.",
        "Encontrá por dónde sale el agua del desagüe.",
        "Con el equipo encendido en frío, poné la mano cerca (sin tocar) de la salida de aire interior y luego de la exterior. ¿Qué diferencia notás?",
        "Escribí en un cuaderno lo que observaste.",
      ],
    },
    {
      type: "warning",
      title: "Seguridad para principiantes",
      items: [
        "Nunca abras un equipo conectado a la corriente. Las conexiones eléctricas pueden provocar descargas graves.",
        "No manipules cañerías ni válvulas: el refrigerante está a presión y puede causar quemaduras por frío.",
        "No trabajes en altura (unidades exteriores en fachadas) sin equipo y capacitación adecuados.",
        "Las tareas eléctricas y frigoríficas requieren formación práctica supervisada y, según la jurisdicción, habilitación correspondiente.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "¿Qué hace realmente un aire acondicionado en modo frío?",
      options: ["Fabrica aire frío desde cero", "Traslada el calor del interior hacia el exterior", "Agrega hielo al aire", "Solo mueve el aire con un ventilador"],
      correct: 1,
      explanation: "El equipo no crea frío: absorbe calor del ambiente con el refrigerante y lo libera afuera.",
    },
    {
      id: "q2",
      question: "¿En qué unidad se encuentra normalmente el compresor de un split?",
      options: ["En la unidad interior", "En el control remoto", "En la unidad exterior", "En la cañería de desagüe"],
      correct: 2,
      explanation: "El compresor, junto con el condensador, está en la unidad exterior.",
    },
    {
      id: "q3",
      question: "¿Para qué sirve el desagüe del equipo?",
      options: ["Para cargar refrigerante", "Para evacuar el agua que se condensa al enfriar el aire", "Para ventilar el compresor", "Para conectar la electricidad"],
      correct: 1,
      explanation: "Al enfriar el aire, la humedad se condensa en el evaporador y ese agua se elimina por el desagüe.",
    },
  ],
};

const soon = (id: string, title: string, summary: string, risk = false): Lesson => ({ id, title, summary, minutes: 20, risk });

export const modules: Module[] = [
  {
    id: "fundamentos", number: 1, level: "Inicial",
    title: "Fundamentos del aire acondicionado",
    description: "Los conceptos básicos para entender cómo funciona un equipo.",
    lessons: [
      lesson1,
      lesson2,
      lesson3,
      lesson4,
      lesson5,
      lesson6,
    ],
  },
  {
    id: "seguridad", number: 2, level: "Inicial",
    title: "Seguridad y herramientas",
    description: "Cómo trabajar de forma segura y qué herramientas se usan.",
    lessons: [
      lesson7,
      lesson8,
      lesson9,
      lesson10,
      lesson11,
      lesson12,
    ],
  },
  {
    id: "ciclo-frigorifico", number: 3, level: "Básico",
    title: "El ciclo frigorífico en detalle",
    description: "Cada componente del circuito y cómo trabajan juntos.",
    lessons: [
      lesson13,
      lesson14,
      lesson15,
      lesson16,
      lesson17,
      lesson18,
    ],
  },
  {
    id: "electricidad", number: 4, level: "Básico",
    title: "Electricidad aplicada a la climatización",
    description: "Conceptos eléctricos necesarios para entender un equipo.",
    lessons: [
      lesson19,
      lesson20,
      lesson21,
      lesson22,
      lesson23,
      lesson24,
    ],
  },
  {
    id: "instalacion", number: 5, level: "Intermedio",
    title: "Instalación de equipos split",
    description: "Del relevamiento a la conexión, siguiendo el manual del fabricante.",
    lessons: [
      lesson25, lesson26, lesson27, lesson28, lesson29, lesson30,
    ],
  },
  {
    id: "puesta-en-marcha", number: 6, level: "Intermedio",
    title: "Puesta en marcha",
    description: "Pruebas y controles antes de entregar el equipo funcionando.",
    lessons: [
      soon("prueba-estanqueidad", "Prueba de estanqueidad con nitrógeno", "Comprobar que el circuito no tenga fugas.", true),
      soon("vacio", "Vacío del circuito", "Por qué y cómo se hace el vacío.", true),
      soon("apertura-y-carga", "Apertura de válvulas y carga adicional", "Liberar el refrigerante y ajustar la carga.", true),
      soon("mediciones-funcionamiento", "Mediciones de funcionamiento", "Presiones, temperaturas y consumo.", true),
      soon("control-de-calidad", "Control de calidad", "Lista de verificación de la instalación.", true),
      soon("entrega-al-cliente", "Entrega al cliente", "Cómo explicar el uso y cuidado del equipo."),
    ],
  },
  {
    id: "mantenimiento", number: 7, level: "Avanzado",
    title: "Mantenimiento",
    description: "Mantener los equipos limpios, seguros y eficientes.",
    lessons: [
      soon("mantenimiento-preventivo", "Mantenimiento preventivo", "Plan de tareas y frecuencia."),
      soon("limpieza-interior", "Limpieza de la unidad interior", "Filtros, evaporador y bandeja."),
      soon("limpieza-exterior", "Limpieza de la unidad exterior", "Condensador y ventilador."),
      soon("revision-electrica", "Revisión eléctrica", "Control de conexiones y componentes.", true),
      soon("deteccion-de-fugas", "Detección de fugas", "Métodos para encontrar pérdidas de refrigerante.", true),
      soon("informe-de-servicio", "Registro e informe del servicio", "Documentar el trabajo realizado."),
    ],
  },
  {
    id: "diagnostico", number: 8, level: "Avanzado",
    title: "Diagnóstico de fallas",
    description: "Método ordenado para encontrar y resolver problemas.",
    lessons: [
      soon("metodo-diagnostico", "Método de diagnóstico", "Pasos para diagnosticar con orden."),
      soon("no-enciende", "El equipo no enciende", "Causas frecuentes y cómo verificarlas.", true),
      soon("no-enfria", "Enciende pero no enfría", "Causas frecuentes y cómo verificarlas."),
      soon("agua-ruido-vibracion", "Pierde agua, hace ruido o vibra", "Diagnóstico de problemas mecánicos y de desagüe."),
      soon("codigos-de-error", "Códigos de error y placa", "Interpretar códigos del fabricante y fallas de la placa.", true),
      soon("caso-integrador", "Caso integrador y evaluación final", "Aplicar todo lo aprendido en un caso completo."),
    ],
  },
];

export const allLessons = modules.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title })));
// Una clase está habilitada solo si tiene contenido real.
export const isAvailable = (l: Lesson) => !!l.sections && l.sections.length > 0;
export const availableLessons = allLessons.filter(isAvailable);
/** Cuenta solo clases habilitadas: ids de clases pendientes o viejos no suman progreso. */
export const countCompleted = (completed: string[]) => availableLessons.filter((l) => completed.includes(l.id)).length;
export const getLesson = (id: string) => allLessons.find((l) => l.id === id);
export const PLANNED_LESSONS = 48;

export const library: LibraryItem[] = [
  { id: "unidad-interior", name: "Unidad interior", category: "Componente", image: indoorImg, description: "Contiene evaporador, ventilador y filtros. Enfría el aire del ambiente.", lessonId: lesson1.id },
  { id: "unidad-exterior", name: "Unidad exterior", category: "Componente", image: outdoorImg, description: "Contiene compresor y condensador. Expulsa el calor hacia afuera.", lessonId: lesson1.id },
  { id: "compresor", name: "Compresor", category: "Componente", description: "Comprime el refrigerante gaseoso, elevando su presión y temperatura.", lessonId: lesson1.id },
  { id: "condensador", name: "Condensador", category: "Componente", description: "Serpentina donde el refrigerante libera calor y pasa a líquido.", lessonId: lesson1.id },
  { id: "evaporador", name: "Evaporador", category: "Componente", description: "Serpentina donde el refrigerante absorbe calor del ambiente y se evapora.", lessonId: lesson1.id },
  { id: "expansion", name: "Dispositivo de expansión", category: "Componente", description: "Reduce la presión del refrigerante líquido antes del evaporador (capilar o válvula).", lessonId: lesson1.id },
  { id: "refrigerante", name: "Refrigerante", category: "Concepto", description: "Fluido que circula en circuito cerrado y transporta el calor.", lessonId: lesson1.id },
  { id: "ciclo", name: "Ciclo frigorífico", category: "Concepto", description: "Recorrido cerrado: compresión, condensación, expansión y evaporación.", lessonId: lesson1.id },
  { id: "desague", name: "Desagüe", category: "Componente", image: splitImg, description: "Evacúa el agua condensada en la unidad interior.", lessonId: lesson1.id },
  { id: "riesgo-electrico", name: "Riesgo eléctrico", category: "Seguridad", description: "Nunca intervenir un equipo energizado. Requiere formación supervisada." },
  { id: "placa-electronica", name: "Placa electrónica", category: "Componente", image: placaComponentes.url, description: "Recibe señales de los sensores y controla compresor, ventiladores y funciones. Sus componentes varían según fabricante y modelo.", lessonId: "placa-y-sensores" },
  { id: "sensores-del-equipo", name: "Sensores del equipo", category: "Componente", image: placaSensores.url, description: "Informan temperatura, nivel de desagüe u otras condiciones al control. Su tipo y ubicación dependen del modelo.", lessonId: "placa-y-sensores" },
  { id: "puesta-a-tierra", name: "Puesta a tierra", category: "Seguridad", image: puestaTierra.url, description: "El conductor de protección conecta las carcasas metálicas al sistema de puesta a tierra de la instalación, conforme a la normativa vigente.", lessonId: "protecciones-electricas" },
];
