import type { Lesson, Source } from "./types";

// Clases 7 a 12 del Módulo 2 (Seguridad y herramientas). Contenido redactado por ClimaPro: pendiente de revisión técnica.
const manual: Source = {
  title: "Manual de instalación y uso del fabricante de tu equipo",
  verified: false,
  note: "Pendiente de incorporar: elegir manuales concretos y comprobarlos.",
};
const pendingVideo = (title: string) => ({ title, note: "Pendiente de incorporar: recurso a seleccionar y verificar por el equipo docente." });

export const lesson7: Lesson = {
  id: "riesgos-electricos",
  title: "Riesgos eléctricos",
  summary: "Peligros, corte seguro de energía y cuándo no intervenir.",
  minutes: 25,
  risk: true,
  review: "pendiente",
  prerequisites: ["Clase 1: ¿Qué hace un aire acondicionado?"],
  objectives: [
    "Reconocer los riesgos eléctricos presentes en un equipo de aire acondicionado.",
    "Explicar cómo se corta la energía de forma segura y cómo verificar que quedó cortada.",
    "Identificar las protecciones eléctricas de una instalación (térmica, diferencial, puesta a tierra).",
    "Saber en qué situaciones un principiante no debe intervenir de ninguna manera.",
  ],
  sections: [
    {
      type: "text",
      title: "Por qué la electricidad es el riesgo número uno",
      paragraphs: [
        "Un aire acondicionado se alimenta con una tensión peligrosa (por lo general 220 V en Argentina) y toma corrientes altas: un equipo de 3000 frigorías puede demandar más de 10 amperios.",
        "El contacto con partes energizadas puede provocar desde un calambre doloroso hasta un accidente grave o fatal. Además, una conexión mal hecha puede originar un incendio por sobrecalentamiento.",
        "La regla básica para un principiante es simple: no se trabaja jamás sobre un equipo energizado. Ni para «ver un cable rápido» ni porque «el interruptor está lejos».",
      ],
    },
    {
      type: "list",
      title: "Riesgos eléctricos más comunes",
      items: [
        "Contacto directo: tocar cables o bornes energizados dentro de la unidad interior o exterior, o en la placa electrónica.",
        "Contacto indirecto: tocar la carcasa metálica de un equipo con falla de aislación o sin puesta a tierra.",
        "Trabajos en húmedo: agua y electricidad juntas (desagües, evaporadores húmedos, lluvia en unidades exteriores).",
        "Capacitores cargados: algunos componentes guardan energía incluso con el equipo apagado.",
        "Conexiones provisorias: alargues, zapatillas y cables sin capacidad suficiente, que se calientan y pueden incendiarse.",
      ],
    },
    {
      type: "supervised",
      title: "Qué podés estudiar y qué no debés hacer todavía",
      theory: [
        "Identificar dónde está el interruptor o llave que alimenta el circuito del equipo.",
        "Leer en la placa la tensión y la corriente del equipo.",
        "Reconocer visualmente el térmico, el disyuntor diferencial y el cable de tierra en un tablero.",
      ],
      requiresSupervision: [
        "Abrir tapas o acceder a la placa electrónica de un equipo.",
        "Medir tensiones o continuidad con multímetro.",
        "Verificar ausencia de tensión sobre conexiones reales.",
        "Cualquier modificación de la instalación eléctrica (es tarea de un electricista matriculado).",
      ],
    },
    {
      type: "text",
      title: "Cómo se corta y verifica la energía (lo que hará tu instructor)",
      paragraphs: [
        "Primero se identifica el circuito que alimenta el equipo y se acciona su llave térmica: se apaga, no se deja «a medias».",
        "Después se bloquea y se señala para que nadie la reponga mientras se trabaja (bloqueo y etiquetado).",
        "Por último se verifica la ausencia de tensión con un instrumento adecuado, probándolo primero en un punto sabidamente energizado y después en el equipo. Este procedimiento lo realiza personal capacitado; tu tarea de principiante es entenderlo y respetarlo.",
      ],
    },
    {
      type: "warning",
      title: "Situaciones en las que no debés intervenir nunca",
      items: [
        "Equipo encendido o con el interruptor en marcha, aunque parezca «solo mirar».",
        "Cables pelados, cajas abiertas o olores a quemado: avisá y pedí un electricista matriculado.",
        "Lluvia o piso mojado cerca de instalaciones eléctricas exteriores.",
        "Tableros de edificios o comercios: su manipulación requiere autorización y habilitación.",
        "Nunca uses agua ni elementos metálicos para apagar un foco de origen eléctrico.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [pendingVideo("Cinco reglas de oro de la seguridad eléctrica")],
    },
    {
      type: "activity",
      title: "Actividad práctica: mapa de cortes de tu casa",
      intro: "Actividad de observación sin riesgo: no abrís ni tocás nada energizado.",
      steps: [
        "Ubicá el tablero eléctrico de tu casa. Identificá cuántas llaves tiene y qué etiqueta tiene cada una.",
        "Averiguá (con ayuda de un adulto si sos menor) qué llave corresponde al circuito del aire acondicionado.",
        "Observá si el equipo está conectado a un tomacorriente propio o a una conexion provisoria (alargue, zapatilla). Anotalo.",
        "Buscá en el manual del equipo qué requisitos eléctricos pide el fabricante.",
        "Escribí qué harías, paso a paso, antes de que un técnico capacitado intervenga el equipo.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "AEA 90364 — Reglamentación para la Ejecución de Instalaciones Eléctricas en Inmuebles (Asociación Electrotécnica Argentina)", url: "https://aea.org.ar", verified: false, note: "Sitio institucional comprobado el 31/10/2026. La parte y edición aplicables, y su adopción en cada jurisdicción, deben confirmarse con un profesional habilitado." },
    { title: "Manual del electricista instalador o texto de seguridad eléctrica de nivel técnico", verified: false, note: "Pendiente de incorporar un texto concreto." },
  ],
  quiz: [
    { id: "q1", question: "¿Cuál es la regla básica para un principiante frente a un equipo energizado?", options: ["Puede mirar dentro si no toca", "Nunca se trabaja sobre un equipo energizado", "Basta con apagar el control remoto", "Se puede tocar con guantes de tela"], correct: 1, explanation: "Ninguna intervención sobre un equipo energizado, ni siquiera para mirar." },
    { id: "q2", question: "El orden correcto del corte seguro es…", options: ["Verificar, cortar, señalizar", "Cortar, bloquear y señalizar, verificar ausencia de tensión", "Cortar y volver a trabajar", "Pedir permiso y tocar"], correct: 1, explanation: "Se corta, se bloquea y señaliza, y luego se verifica con instrumento adecuado." },
    { id: "q3", question: "Los capacitores son un riesgo porque…", options: ["Consumen mucha energía", "Pueden guardar energía aunque el equipo esté apagado", "Se calientan con el sol", "Hacen ruido"], correct: 1, explanation: "Guardan carga eléctrica: solo se manipulan con capacitación y descarga previa." },
    { id: "q4", question: "¿Quién debe modificar una instalación eléctrica?", options: ["Cualquier persona con multímetro", "El dueño de casa", "Un electricista matriculado", "El vendedor del equipo"], correct: 2, explanation: "Las modificaciones de instalaciones corresponden a un electricista matriculado." },
  ],
};

export const lesson8: Lesson = {
  id: "riesgos-refrigerantes-presion",
  title: "Riesgos con refrigerantes y presión",
  summary: "Quemaduras por frío, gases inflamables y ventilación.",
  minutes: 25,
  risk: true,
  review: "pendiente",
  prerequisites: ["Clase 3: presión y cambios de estado."],
  objectives: [
    "Explicar por qué el circuito de refrigerante está siempre a presión, incluso con el equipo apagado.",
    "Describir los riesgos de las fugas: quemaduras por frío, desplazamiento de oxígeno e inflamabilidad.",
    "Reconocer qué refrigerantes se usan hoy y qué precaución especial exige cada uno.",
    "Entender que la carga, recuperación y detección de fugas son tareas para personal capacitado.",
  ],
  sections: [
    {
      type: "text",
      title: "Un circuito siempre a presión",
      paragraphs: [
        "El refrigerante permanece dentro del circuito a presión tanto con el equipo encendido como apagado. En el lado de alta presión las presiones son de varias decenas de psi, y suben con el calor.",
        "Si un caño se corta o una conexión cede, el refrigerante sale a gran velocidad y se evapora de golpe: puede lastimar piel y ojos por frío extremo (quemadura por frío).",
        "Por eso nunca se debilita, se dobla ni se corta una cañería con refrigerante, y las válvulas de servicio solo se operan con capacitación y herramientas específicas.",
      ],
    },
    {
      type: "list",
      title: "Riesgos según el refrigerante",
      items: [
        "R-410A y R-32 (los más comunes en equipos nuevos): trabajan a presiones más altas que el antiguo R-22. El R-32 es ligeramente inflamable (clase A2L): cerca de una fuga no debe haber chispas, llamas ni cigarrillos.",
        "R-22 (equipos antiguos): en retirada por su impacto en la capa de ozono; sigue a presión y con sus mismos riesgos físicos.",
        "Cualquier refrigerante en un ambiente cerrado y sin ventilación puede desplazar el aire: en espacios chicos (pasillos, cuartos de máquinas) puede faltar oxígeno.",
        "El refrigerante nunca se libera a la atmósfera: se recupera con equipos específicos por una norma ambiental.",
      ],
    },
    {
      type: "supervised",
      title: "Qué podés estudiar y qué no debés hacer todavía",
      theory: [
        "Leer en la placa qué refrigerante usa el equipo y cuánta carga lleva de fábrica.",
        "Reconocer fotos de válvulas de servicio, manómetros y mangueras de carga.",
        "Entender qué es una fuga y cuáles son sus señales (manchas de aceite, hielo en cañerías, bajo rendimiento).",
      ],
      requiresSupervision: [
        "Conectar o desconectar mangueras de manómetros.",
        "Purgar una fuga para detectarla o inyectar nitrógeno.",
        "Recuperar, cargar o ajustar la carga de refrigerante.",
        "Reemplazar componentes del circuito frigorífico.",
      ],
    },
    {
      type: "warning",
      title: "Seguridad: qué hacer y qué no",
      items: [
        "Ante una fuga visible o olor raro cerca del equipo, alejate, ventilá el lugar y avisá a un técnico capacitado.",
        "No uses herramientas que generen chispas (amoladoras, soldadoras) cerca de cañerías con refrigerante.",
        "No apliques calor directo (soplete) sobre el circuito sin capacitación.",
        "Usá siempre protección de ojos y guantes cuando un profesional trabaje el circuito cerca de vos.",
        "Nunca intentes «tapar» una fuga con cinta, silicona o pegamentos: es un peligro y no resuelve el problema.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [pendingVideo("Manipulación segura de refrigerantes: reglas básicas")],
    },
    {
      type: "activity",
      title: "Actividad práctica: ficha de refrigerante del equipo",
      intro: "Solo lectura de etiquetas y manuales, sin tocar el circuito.",
      steps: [
        "Anotá qué refrigerante indica la placa de un equipo (R-410A, R-32, otro) y la carga de fábrica.",
        "Buscá en la hoja de datos de seguridad (SDS) de ese refrigerante, en el sitio del fabricante, sus principales riesgos.",
        "Escribí tres precauciones que corresponden a ese refrigerante en particular.",
        "Conversá con un adulto o tu instructor qué harías si detectás una fuga en casa.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "Hojas de datos de seguridad (SDS) de los refrigerantes R-410A y R-32 de los fabricantes", verified: false, note: "Pendiente de incorporar los enlaces oficiales." },
    { title: "Normativa ambiental argentina sobre gestión de refrigerantes", verified: false, note: "Pendiente de verificar la norma vigente." },
  ],
  quiz: [
    { id: "q1", question: "¿El circuito de refrigerante mantiene presión con el equipo apagado?", options: ["No, se descarga solo", "Sí, siempre está a presión", "Solo en verano", "Solo si está conectado a la red"], correct: 1, explanation: "El refrigerante queda cargado en el circuito: siempre está a presión." },
    { id: "q2", question: "El R-32 exige una precaución especial porque…", options: ["Es tóxico al tacto", "Es ligeramente inflamable", "Se congela", "Corroe el cobre"], correct: 1, explanation: "Es de clase A2L: no deben generarse chispas ni llamas cerca de una fuga." },
    { id: "q3", question: "¿Qué es una quemadura por frío?", options: ["Una lesión por contacto con refrigerante que se evapora de golpe", "Un resfrío por aire frío", "Una marca del sol en verano", "Una quemadura por el compresor caliente"], correct: 0, explanation: "El refrigerante que se libera se evapora rápidamente y congela la piel." },
    { id: "q4", question: "Ante una fuga de refrigerante en un ambiente cerrado, lo primero es…", options: ["Encender una luz para ver mejor", "Ventilar el lugar y alejarse", "Tapar la fuga con cinta", "Prender el equipo para que trabaje"], correct: 1, explanation: "Se ventila para evitar falta de oxígeno y se avisa a un técnico capacitado." },
  ],
};

export const lesson9: Lesson = {
  id: "altura-y-ergonomia",
  title: "Trabajo en altura y ergonomía",
  summary: "Escaleras, arneses y levantamiento de cargas.",
  minutes: 20,
  risk: true,
  review: "pendiente",
  prerequisites: ["Clase 1: partes de un equipo split."],
  objectives: [
    "Reconocer los riesgos del trabajo en altura en instalaciones de aire acondicionado.",
    "Entender las reglas básicas para usar una escalera de forma segura.",
    "Aplicar principios ergonómicos para mover equipos y materiales sin lastimarse.",
  ],
  sections: [
    {
      type: "text",
      title: "Altura: el riesgo que más accidentes causa",
      paragraphs: [
        "Las unidades exteriores suelen instalarse en fachadas, balcones, techos o terrazas. Trabajo en altura significa cualquier tarea desde donde una caída pueda causar daño, y en Argentina la reglamentación lo considera un riesgo especial.",
        "La mayoría de las caídas graves ocurren a poca altura: desde una silla, una escalera apoyada sin asegurar o el borde de un techo.",
        "Para un principiante, la regla es directa: no se trabaja en altura sin capacitación, equipo certificado (arnés con líneas de vida ancladas) y autorización. Tampoco se improvisa con sillas, cajones o baldes.",
      ],
    },
    {
      type: "list",
      title: "Escalera: reglas básicas que siempre se cumplen",
      items: [
        "Elegir la escalera adecuada al trabajo, en buen estado, con zapatas antideslizantes.",
        "Apoyarla sobre suelo firme y parejo, con el ángulo correcto (aproximadamente 75° respecto del piso).",
        "Sobrepasar el punto de apoyo al menos un metro si se va a subir a un nivel superior.",
        "No subirse a los dos últimos peldaños, no estirarse de costado y no trabajar con las manos ocupadas sin herramientas portaherramientas.",
        "Nunca una sola persona instala una unidad exterior en fachada: es un trabajo en equipo o lo hace personal con formación específica.",
      ],
    },
    {
      type: "text",
      title: "Ergonomía: cuidar la espalda y las manos",
      paragraphs: [
        "Un equipo split de 3000 frigorías pesa entre 25 y 40 kg; el exterior puede pesar más de 40 kg. Se levanta con la espalda recta y la carga cerca del cuerpo, y siempre entre dos personas si supera el peso que puedas manejar con seguridad.",
        "El transporte se hace con carros o correas específicas, no a pulso por escaleras angostas.",
        "Las herramientas cortantes (cutter, cañeras, abocardadores) se usan y se guardan con protección: los cortes en manos y dedos son lesiones muy frecuentes.",
      ],
    },
    {
      type: "warning",
      title: "Seguridad: cuando no se trabaja",
      items: [
        "No se sube a techos frágiles, chapas o cielorrasos sin puntos de apoyo certificados.",
        "No se trabaja en fachadas hacia la calle sin señalizar y sin permiso si corresponde.",
        "No se levanta un equipo pesado solo ni «de apuro».",
        "No se usa una escalera de aluminio cerca de instalaciones eléctricas energizadas.",
        "Con lluvia, viento fuerte o piso mojado, se posterga la tarea en altura.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [pendingVideo("Uso seguro de escaleras en instalaciones de climatización")],
    },
    {
      type: "activity",
      title: "Actividad práctica: relevamiento sin riesgo",
      intro: "Observación desde el suelo, sin subirte a nada.",
      steps: [
        "Mirá desde abajo una unidad exterior instalada en tu cuadra: ¿a qué altura está? ¿Cómo la habrían izado?",
        "Identificá en tu casa o edificio dónde están las escaleras y si tienen elementos de seguridad (apoyo firme, pasamanos).",
        "Pesá (si podés) o estimá el peso de un equipo en su caja según la etiqueta. ¿Lo levantarías solo? ¿Por qué?",
        "Anotá tres situaciones de tu entorno donde una tarea de climatización implicaría riesgo de altura, y qué se debería hacer en cada caso.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "Ley 19.587 de Higiene y Seguridad en el Trabajo", url: "https://www.argentina.gob.ar/normativa/nacional/ley-19587-17612", verified: true, note: "Texto oficial. Enlace comprobado el 31/10/2026." }, { title: "Decreto 351/1979 (reglamentario de la Ley 19.587)", url: "https://www.argentina.gob.ar/normativa/nacional/decreto-351-1979-32030", verified: true, note: "Texto oficial. No se citan artículos específicos: los requisitos de trabajo en altura deben confirmarse en el texto vigente." }, { title: "Decreto 911/1996 — Higiene y seguridad en la industria de la construcción", url: "https://www.argentina.gob.ar/normativa/nacional/decreto-911-1996-38568", verified: true, note: "Aplica a obras de construcción; incluye trabajos en altura. Enlace comprobado el 31/10/2026." },
    { title: "Resolución SRT 886/2015 — Protocolo de Ergonomía", url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-886-2015-246272/texto", verified: true, note: "Superintendencia de Riesgos del Trabajo. Herramienta oficial para identificar riesgos, incluido el levantamiento manual de cargas." },
  ],
  quiz: [
    { id: "q1", question: "¿Desde qué altura se considera riesgo especial de trabajo en altura?", options: ["Desde 10 metros", "Desde cualquier altura donde una caída pueda causar daño", "Solo en andamios", "Solo en edificios altos"], correct: 1, explanation: "La mayoría de las caídas graves ocurren a baja altura." },
    { id: "q2", question: "Una unidad exterior pesada se levanta…", options: ["Solo, con la espalda curvada", "Entre dos personas o con elementos de transporte adecuados", "Tirando desde una ventana", "Con la escalera como carrito"], correct: 1, explanation: "Cargas pesadas se mueven entre dos personas o con carros y correas." },
    { id: "q3", question: "¿Qué se hace con la escalera antes de subir?", options: ["Nada, se sube directo", "Verificar apoyo firme, ángulo correcto y estado general", "Mojarla para que no resbale", "Atarla al equipo"], correct: 1, explanation: "El chequeo previo de la escalera es obligatorio." },
  ],
};

export const lesson10: Lesson = {
  id: "proteccion-personal",
  title: "Equipo de protección personal",
  summary: "Guantes, anteojos, calzado y su uso correcto.",
  minutes: 20,
  review: "pendiente",
  prerequisites: ["Clase 7: riesgos eléctricos.", "Clase 8: riesgos con refrigerantes."],
  objectives: [
    "Identificar los elementos de protección personal (EPP) que se usan en climatización.",
    "Relacionar cada EPP con el riesgo que previene.",
    "Reconocer que el EPP complementa, no reemplaza, los procedimientos seguros.",
  ],
  sections: [
    {
      type: "text",
      title: "La última barrera",
      paragraphs: [
        "El equipo de protección personal (EPP) es la última línea de defensa: primero se eliminan o se reducen los riesgos con procedimientos y herramientas seguras, y el EPP protege lo que queda.",
        "Un EPP mal elegido o mal puesto da una falsa sensación de seguridad. Cada elemento tiene su uso correcto y su mantenimiento.",
      ],
    },
    {
      type: "parts",
      title: "Los EPP de la climatización",
      parts: [
        { name: "Anteojos de seguridad", description: "Protegen los ojos de salpicaduras de refrigerante, viruta de cobre y partículas. Son de policarbonato, con protección lateral." },
        { name: "Guantes", description: "Guantes de cuero o anticorte para cañerías y herramientas; aislantes para tareas eléctricas bajo supervisión. No todo guante sirve para todo." },
        { name: "Calzado de seguridad", description: "Con punta reforzada y suela antideslizante: protege de caídas de herramientas y de resbalones en superficies húmedas." },
        { name: "Casco", description: "Obligatorio en obra o cuando hay riesgo de objetos que caen (izajes de unidades, trabajo bajo andamios)." },
        { name: "Arnés de seguridad", description: "Certificado y anclado correctamente, solo para trabajos en altura con capacitación específica." },
        { name: "Ropa de trabajo", description: "Manga larga y ajustada para cañerías y soldaduras, sin partes colgantes que se enganchen en ventiladores." },
      ],
    },
    {
      type: "list",
      title: "Riesgo y protección correspondiente",
      items: [
        "Fuga de refrigerante → anteojos y guantes: la evaporación congela piel y ojos.",
        "Corte y abocardado de caños → anteojos (viruta de cobre) y guantes anticorte.",
        "Tareas eléctricas supervisadas → guantes aislantes y herramientas aisladas, verificadas.",
        "Trabajo en altura → arnés certificado, casco y señalización de la zona.",
        "Manejo de equipos pesados → calzado de seguridad y ayuda de otra persona.",
      ],
    },
    {
      type: "warning",
      title: "Cuidado del EPP",
      items: [
        "Un anteojos rayado o con lente flojo se reemplaza: no se «arregla».",
        "Un guante mojado con refrigerante o aceite se cambia: la protección ya no es confiable.",
        "El arnés se inspecciona antes de cada uso y se retira de servicio ante cualquier corte o costura dañada.",
        "El EPP es personal: no se comparte sin higienizarlo, y las medidas deben corresponder a cada persona.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [pendingVideo("Cómo colocarse correctamente el equipo de protección personal")],
    },
    {
      type: "activity",
      title: "Actividad práctica: armado de un kit de protección",
      intro: "Ejercicio de análisis, sin compras obligatorias.",
      steps: [
        "Hacé una lista de los EPP que usarías para: limpiar filtros de una unidad interior, y acompañar a un técnico en un cambio de unidad exterior.",
        "Para cada elemento, escribí el riesgo que previene.",
        "Buscá en una casa de repuestos el precio aproximado de anteojos de seguridad y comparalo con el costo de una lesión ocular.",
        "Verificá qué EPP ya tenés en tu casa (guantes, anteojos de obra) y en qué estado están.",
      ],
    },
  ],
  sources: [
    { title: "Decreto 351/1979, capítulo sobre protección personal del trabajador", url: "https://www.argentina.gob.ar/normativa/nacional/decreto-351-1979-32030", verified: true, note: "Marco oficial general para EPP. No es una guía específica de climatización; el EPP concreto depende de la tarea y de la evaluación de riesgos." },
    { title: "Fichas técnicas de los fabricantes de EPP", verified: false, note: "Pendiente de verificar certificaciones." },
  ],
  quiz: [
    { id: "q1", question: "¿Cuál es la función correcta del EPP?", options: ["Reemplaza a los procedimientos seguros", "Es la última barrera, complementa los procedimientos", "Se usa solo cuando hay visita", "Se usa solo para tareas eléctricas"], correct: 1, explanation: "Primero se controla el riesgo; el EPP protege lo que queda." },
    { id: "q2", question: "¿Qué protege de una salpicadura de refrigerante en los ojos?", options: ["Un pañuelo", "Anteojos de seguridad de policarbonato", "Gafas de sol", "La caspa de la gorra"], correct: 1, explanation: "Anteojos de seguridad, con protección lateral." },
    { id: "q3", question: "Un arnés con una costura dañada…", options: ["Se usa con cuidado", "Se repara con hilo grueso", "Se retira de servicio", "Se usa solo para bajar"], correct: 2, explanation: "Cualquier daño hace que el arnés no sea confiable: se retira." },
  ],
};

export const lesson11: Lesson = {
  id: "herramientas-basicas",
  title: "Herramientas básicas",
  summary: "Las herramientas manuales del técnico.",
  minutes: 20,
  review: "pendiente",
  prerequisites: ["Clase 10: equipo de protección personal."],
  objectives: [
    "Reconocer las herramientas manuales básicas de instalación y mantenimiento.",
    "Identificar el uso correcto de cada una y sus cuidados.",
    "Distinguir herramientas comunes de las específicas de refrigeración.",
  ],
  sections: [
    {
      type: "text",
      title: "La caja del principiante",
      paragraphs: [
        "Antes de las herramientas específicas de refrigeración, todo técnico necesita un set básico de herramientas manuales. Con ellas se monta soportes, se ajusta tornillería, se abre y cierra accesos y se ordena el trabajo.",
        "La calidad importa: una llave que resbala destruye la cabeza del tornillo y provoca accidentes. Y la orden también: cada herramienta vuelve a su lugar, limpia y protegida.",
      ],
    },
    {
      type: "list",
      title: "Las herramientas básicas",
      items: [
        "Destornilladores planos y Phillips, con mango aislado, en varios tamaños.",
        "Llaves ajustables y juego de llaves fijas (en especial de 10, 12, 13 y 14 mm para soportes y abrazaderas).",
        "Pijas o alicates universal y de punta, para prensar y sostener.",
        "Cinta métrica, nivel de burbuja y lápiz de carpintero para marcar montajes.",
        "Taladro inalámbrico con brocas para mampostería y madera, y detector de cables y cañerías antes de taladrar.",
        "Cutter con hoja nueva, sierra de mano y limas para ajustes menores.",
        "Llaves hexagonales (Allen) para soportes y abrazaderas de los fabricantes.",
      ],
    },
    {
      type: "text",
      title: "Antes de taladrar una pared",
      paragraphs: [
        "Se verifica con detector el trazado: detrás de una pared puede haber cables energizados, cañerías de agua o gas.",
        "Se marca el punto, se confirma la altura y se cubre la zona de trabajo para evitar que caiga polvo sobre muebles o equipos.",
        "Se usa anteojo de seguridad y mascarilla: la polvo de mampostería irrita ojos y vías respiratorias.",
      ],
    },
    {
      type: "warning",
      title: "Cuidados de las herramientas",
      items: [
        "No se usan herramientas con mango pelado o aislación dañada para tareas cerca de electricidad.",
        "Las herramientas eléctricas a batería se cargan lejos de humedad y no se cambian accesorios con la batería puesta.",
        "Las cortantes se guardan con su protector y nunca se guardan sueltas en un bolsillo.",
        "Una herramienta dañada se repara o se reemplaza: «se arregla con cinta» no es una reparación.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [pendingVideo("Kit de herramientas básicas para instalación de split")],
    },
    {
      type: "activity",
      title: "Actividad práctica: inventario y uso",
      intro: "Con herramientas tuyas o de la casa, con cuidado y supervisión de un adulto si sos menor.",
      steps: [
        "Hacé el inventario de las herramientas básicas que tenés y marcá cuáles faltan.",
        "Con un nivel de burbuja, verificá si una repisa o un soporte de tu casa está a nivel. ¿Cómo lo corregirías?",
        "Practicá el uso de la cinta métrica: medí el alto y el ancho de una pared y anotá las medidas.",
        "Identificá qué herramienta usarías para ajustar una abrazadera de cañería y por qué.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "IEC 60900 — Trabajos en tensión: herramientas manuales para uso hasta 1000 V CA y 1500 V CC", verified: false, note: "Norma internacional de referencia para herramientas aisladas (marcado con doble triángulo y «1000 V»). Texto de pago, no consultado directamente: verificar en el catálogo del fabricante que la herramienta declare esta norma." },
  ],
  quiz: [
    { id: "q1", question: "¿Qué se hace antes de taladrar una pared?", options: ["Taladrar rápido para no dudar", "Verificar el trazado con detector de cables y cañerías", "Mojar la pared", "Pedir ayuda al vecino"], correct: 1, explanation: "Puede haber cables energizados o cañerías detrás: se detecta antes." },
    { id: "q2", question: "Para ajustar soportes y abrazaderas se usan principalmente…", options: ["Cutter", "Llaves fijas y hexagonales", "Sierra", "Pincel"], correct: 1, explanation: "Son las herramientas de apriete del set básico." },
    { id: "q3", question: "Una herramienta con mango pelado…", options: ["Se usa con guantes", "Se repara o se reemplaza", "Se usa solo en tareas no eléctricas", "Se envuelve en cinta y sigue"], correct: 1, explanation: "La aislación dañada no se improvisa: se corrige." },
  ],
};

export const lesson12: Lesson = {
  id: "herramientas-especificas",
  title: "Herramientas específicas",
  summary: "Manómetros, bomba de vacío, abocardador, detector de fugas y pinza amperométrica (reconocimiento).",
  minutes: 25,
  review: "pendiente",
  prerequisites: ["Clase 3: presión y cambios de estado.", "Clase 11: herramientas básicas."],
  objectives: [
    "Reconocer las herramientas específicas de refrigeración y para qué sirve cada una.",
    "Entender, en términos generales, cómo se usan.",
    "Saber que su uso real requiere capacitación práctica supervisada.",
  ],
  sections: [
    {
      type: "text",
      title: "Las herramientas propias del oficio",
      paragraphs: [
        "Además de las herramientas básicas, la climatización usa un grupo de herramientas específicas. En esta clase las conocés para reconocerlas y entender su función; el manejo real se aprende con práctica supervisada.",
      ],
    },
    {
      type: "parts",
      title: "Herramientas específicas de refrigeración",
      parts: [
        { name: "Manómetros (juego de alta y baja)", description: "Miden la presión del circuito por lado, con mangueras que se conectan a las válvulas de servicio. Permiten diagnosticar cargas y fallas." },
        { name: "Bomba de vacío", description: "Extrae el aire y la humedad del circuito antes de cargar refrigerante. Sin vacío previo, la instalación falla y se daña el compresor." },
        { name: "Abocardador", description: "Forma el cono de cobre (abocardado) que sella las uniones flare de las cañerías. Un abocardado mal hecho es causa frecuente de fugas." },
        { name: "Cortador de caños y dobladora de resortes", description: "Cortan el cobre sin deformar y permiten doblar sin estrangular el caño." },
        { name: "Detector de fugas", description: "Electrónico o con burbujeador, encuentra pérdidas de refrigerante en uniones y serpentinas." },
        { name: "Pinza amperométrica", description: "Mide la corriente que toma el equipo sin cortar el circuito; sirve para diagnosticar consumos." },
        { name: "Balanza de carga", description: "Pesa el refrigerante que se carga al circuito para respetar la carga exacta del fabricante." },
      ],
    },
    {
      type: "supervised",
      title: "Qué podés estudiar y qué no debés hacer todavía",
      theory: [
        "Identificar cada herramienta en fotos y videos, y decir para qué sirve.",
        "Entender por qué el vacío y el abocardado correcto son claves de una instalación sin fugas.",
        "Leer en el manual del fabricante qué presiones y qué carga espera el equipo.",
      ],
      requiresSupervision: [
        "Conectar mangueras de manómetros o hacer vacío en un circuito real.",
        "Abocardar caños para una instalación.",
        "Usar la pinza amperométrica sobre circuitos energizados.",
        "Cargar refrigerante con balanza.",
      ],
    },
    {
      type: "text",
      title: "Por qué el vacío y el abocardado importan tanto",
      paragraphs: [
        "El aire y la humedad dentro del circuito son enemigos del sistema: la humedad puede congelar y formar ácidos que dañan el compresor. Por eso toda apertura del circuito se evacúa con bomba de vacío antes de operar.",
        "El abocardado es la unión flare entre el caño y la válvula de servicio: si el cono sale rayado o descentrado, la unión pierde. Con práctica supervisada se aprende a hacer un cono parejo y limpio.",
        "Estas dos tareas separan a una instalación correcta de una instalación con problemas a los meses.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [
        pendingVideo("Presentación del juego de manómetros y sus mangueras"),
        pendingVideo("Cómo se hace un abocardado correcto (demostración)"),
      ],
    },
    {
      type: "activity",
      title: "Actividad práctica: reconocimiento",
      intro: "Identificación visual, sin operar herramientas.",
      steps: [
        "Buscá fotos de un juego de manómetros, una bomba de vacío y un abocardador, y anotá qué distingue a cada uno.",
        "Mirá las válvulas de servicio de una unidad exterior (sin tocarlas): identificá las roscas donde se conectarían las mangueras.",
        "En el manual del equipo, anotá el refrigerante, la carga de fábrica y el largo máximo de cañería que admite sin carga adicional.",
        "Hacé una lista de qué herramientas de este grupo tendría que tener tu instructor para una instalación completa.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "Manuales de herramientas de refrigeración de los fabricantes", verified: false, note: "Pendiente de incorporar manuales concretos." },
  ],
  quiz: [
    { id: "q1", question: "¿Para qué sirve la bomba de vacío?", options: ["Para enfriar el equipo", "Para extraer aire y humedad del circuito antes de cargar refrigerante", "Para medir consumo", "Para limpiar filtros"], correct: 1, explanation: "Sin vacío previo, la humedad del circuito daña el sistema." },
    { id: "q2", question: "El abocardador forma…", options: ["El cono de cobre de la unión flare", "El vacío del circuito", "La carga de refrigerante", "El nivel del soporte"], correct: 0, explanation: "Un cono mal hecho es causa frecuente de fugas." },
    { id: "q3", question: "La pinza amperométrica mide…", options: ["La presión del circuito", "El vacío", "La corriente que toma el equipo sin cortar el circuito", "La temperatura ambiente"], correct: 2, explanation: "Se ampera en el circuito por inducción, sin abrirlo." },
  ],
};
