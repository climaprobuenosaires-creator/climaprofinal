import type { Lesson, Source } from "./types";
import outdoorImg from "@/assets/outdoor-unit.jpg";
import indoorImg from "@/assets/indoor-unit.jpg";

// Clases 13 a 18 del Módulo 3 (El ciclo frigorífico en detalle). Contenido redactado por ClimaPro: pendiente de revisión técnica.
const manual: Source = {
  title: "Manual de instalación y uso del fabricante de tu equipo",
  verified: false,
  note: "Pendiente de incorporar: elegir manuales concretos y comprobarlos.",
};
const pendingVideo = (title: string) => ({ title, note: "Pendiente de incorporar: recurso a seleccionar y verificar por el equipo docente." });
// Verificación honesta: solo se comprobó que el enlace existe y que título y canal coinciden.
const linkChecked = "Enlace, título y canal comprobados el 28/10/2026. Reproducción completa y revisión del contenido con el equipo docente pendientes.";

export const lesson13: Lesson = {
  id: "compresor",
  title: "El compresor",
  summary: "Tipos de compresor y cómo funcionan.",
  minutes: 25,
  review: "pendiente",
  prerequisites: ["Clase 1: partes de un equipo split.", "Clase 3: presión y cambios de estado."],
  objectives: [
    "Explicar qué hace el compresor dentro del ciclo frigorífico.",
    "Reconocer los tipos de compresor más usados: pistón, rotativo y scroll.",
    "Entender por qué el compresor es el componente que más energía consume.",
    "Identificar los síntomas externos de un compresor con problemas, sin abrir el equipo.",
  ],
  sections: [
    {
      type: "text",
      title: "El corazón del equipo",
      paragraphs: [
        "El compresor es una bomba accionada por un motor eléctrico. Aspira el vapor de refrigerante frío que viene del evaporador y lo comprime: al comprimirlo, suben su presión y su temperatura.",
        "Ese vapor caliente a alta presión viaja al condensador, donde puede liberar el calor al aire exterior. Sin compresor, el refrigerante no circularía y no habría ciclo.",
        "En un split, el compresor está en la unidad exterior. Es el componente que más electricidad consume y el que hace el ruido característico cuando el equipo arranca.",
      ],
    },
    {
      type: "list",
      title: "Qué entra y qué sale del compresor",
      items: [
        "Entra: vapor de refrigerante frío, a baja presión, por el caño grueso (aspiración).",
        "Sale: vapor de refrigerante muy caliente, a alta presión, por el caño fino (descarga) hacia el condensador.",
        "El compresor está sellado (hermético): adentro lleva también aceite que lo lubrica y que circula mezclado con el refrigerante.",
      ],
    },
    { type: "diagram", title: "Tipos de compresor", kind: "compressor-types" },
    {
      type: "text",
      title: "Por qué importa el aceite",
      paragraphs: [
        "El aceite del compresor se mezcla con el refrigerante y recorre todo el circuito. Si el equipo pierde refrigerante, también pierde lubricación, y el compresor puede dañarse.",
        "Por eso una fuga de refrigerante no se «recarga y listo»: hay que encontrarla y repararla. Esa tarea corresponde a un técnico capacitado.",
      ],
    },
    { type: "gallery", title: "Recursos visuales", images: [{ src: outdoorImg, caption: "El compresor está dentro de la unidad exterior, junto al condensador y el ventilador." }] },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [
        {
          title: "Tipos y funcionamiento de compresores de refrigeración y aire acondicionado",
          url: "https://www.youtube.com/watch?v=zevMpYD6SS4",
          author: "CONFOREMPRESARIAL LATINOAMERICA",
          learning: "Recorrido por los tipos de compresor y sus partes, con ejemplos de refrigeración y aire acondicionado.",
          verification: linkChecked,
          note: "Recurso externo de referencia, aún no validado por el equipo docente para esta clase.",
        },
        pendingVideo("Animación del compresor scroll paso a paso"),
      ],
    },
    {
      type: "activity",
      title: "Actividad práctica: escuchar el arranque",
      intro: "Solo observación y escucha, con el equipo funcionando normalmente. No abras ninguna tapa.",
      steps: [
        "Con el equipo en frío, acercate a la unidad exterior (sin tocarla) cuando arranca.",
        "Escuchá el momento en que se oye el zumbido del compresor, distinto del ruido del ventilador.",
        "Tocá con la mano (sin apoyar el peso) el aire que sale del ventilador exterior: ¿está caliente? ¿Por qué?",
        "Anotá qué pasaría con ese calor si el compresor no comprimiera el refrigerante.",
      ],
    },
    {
      type: "warning",
      title: "Seguridad",
      items: [
        "El compresor trabaja con electricidad y con refrigerante a alta presión y temperatura. Nunca lo toques con el equipo en marcha.",
        "La carcasa del compresor puede estar muy caliente durante el funcionamiento: riesgo de quemaduras.",
        "Reparar o reemplazar un compresor es tarea de un técnico con herramientas y capacitación.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "Catálogos técnicos de fabricantes de compresores (Embraco, Copeland u otros)", verified: false, note: "Pendiente de incorporar: elegir y comprobar documentación oficial." },
  ],
  quiz: [
    { id: "q1", question: "¿Qué hace el compresor con el refrigerante?", options: ["Lo enfría", "Lo comprime: sube su presión y su temperatura", "Lo filtra", "Lo almacena"], correct: 1, explanation: "Comprime el vapor que viene del evaporador y lo envía caliente y a alta presión al condensador." },
    { id: "q2", question: "¿Qué tipo de compresor es el más común en equipos hogareños?", options: ["De pistón", "Rotativo", "De tornillo", "Centrífugo"], correct: 1, explanation: "El rotativo es compacto y silencioso, ideal para splits hogareños." },
    { id: "q3", question: "¿Por qué una fuga de refrigerante puede dañar el compresor?", options: ["Porque el compresor se congela", "Porque pierde el aceite que lo lubrica, que circula con el refrigerante", "Porque entra aire y explota", "No puede dañarlo"], correct: 1, explanation: "El aceite viaja mezclado con el refrigerante: sin refrigerante no hay lubricación." },
  ],
};

export const lesson14: Lesson = {
  id: "condensador-evaporador",
  title: "Condensador y evaporador",
  summary: "Dónde se libera y dónde se absorbe el calor.",
  minutes: 25,
  review: "pendiente",
  prerequisites: ["Clase 3: presión y cambios de estado.", "Clase 13: el compresor."],
  objectives: [
    "Explicar qué es un intercambiador de calor.",
    "Describir qué le pasa al refrigerante en el condensador y en el evaporador.",
    "Entender el rol de las aletas y los ventiladores.",
    "Relacionar la suciedad de las serpentinas con la pérdida de rendimiento.",
  ],
  sections: [
    {
      type: "text",
      title: "Dos serpentinas, dos trabajos opuestos",
      paragraphs: [
        "El condensador y el evaporador son intercambiadores de calor: serpentinas de caño con aletas de aluminio y un ventilador que hace pasar aire. Físicamente son muy parecidos; lo que cambia es el trabajo que hacen.",
        "El condensador (unidad exterior) recibe el vapor caliente a alta presión que viene del compresor. El aire exterior le quita calor y el refrigerante se condensa: pasa de vapor a líquido.",
        "El evaporador (unidad interior) recibe el refrigerante frío a baja presión. Absorbe el calor del aire del ambiente y se evapora: pasa de líquido a vapor. El aire, al ceder su calor, sale frío.",
      ],
    },
    { type: "diagram", title: "Cómo intercambian calor", kind: "heat-exchangers" },
    {
      type: "list",
      title: "Por qué tienen aletas y ventilador",
      items: [
        "Las aletas multiplican la superficie de contacto con el aire: cuanta más superficie, más calor se intercambia.",
        "El ventilador fuerza el paso del aire: sin él, el intercambio sería muy lento.",
        "Si las aletas están sucias o tapadas (polvo, pelusas, hojas), el intercambio empeora: el equipo enfría menos y consume más.",
      ],
    },
    {
      type: "text",
      title: "El agua del evaporador",
      paragraphs: [
        "Cuando el aire húmedo toca la serpentina fría del evaporador, parte de su vapor de agua se condensa en gotas, como en un vaso con hielo.",
        "Esa agua cae en una bandeja y sale por el desagüe. Si el desagüe se tapa o la bandeja se desnivela, el equipo gotea adentro de la casa.",
      ],
    },
    { type: "gallery", title: "Recursos visuales", images: [{ src: indoorImg, caption: "Evaporador: serpentina con aletas detrás de los filtros de la unidad interior." }, { src: outdoorImg, caption: "Condensador: serpentina y ventilador de la unidad exterior." }] },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [
        {
          title: "Cómo funciona el ciclo de refrigeración (para principiantes)",
          url: "https://www.youtube.com/watch?v=cdUge74ZlOU",
          author: "Friolandia Service",
          learning: "Animación introductoria del ciclo completo, con el recorrido del refrigerante por condensador y evaporador.",
          verification: "Enlace, título y canal comprobados el 28/10/2026; transcripción automática consultada en español. Revisión completa del contenido con el equipo docente pendiente.",
          note: "Recurso externo de referencia, aún no validado por el equipo docente para esta clase.",
        },
        {
          title: "Circuito básico de refrigeración, detallado paso a paso",
          url: "https://www.youtube.com/watch?v=84ENvrTozrQ",
          author: "Universo Eléctrico",
          learning: "Explicación termodinámica del circuito con un split como ejemplo; complementa los diagramas de esta clase.",
          verification: "Enlace, título y canal comprobados el 28/10/2026; transcripción automática consultada en español. Revisión completa del contenido con el equipo docente pendiente.",
          note: "Recurso externo de referencia, aún no validado por el equipo docente para esta clase.",
        },
      ],
    },
    {
      type: "activity",
      title: "Actividad práctica: observar los intercambiadores",
      intro: "Solo observación con el equipo apagado y sin desarmar nada. Los filtros de la unidad interior sí se pueden sacar: es una tarea de usuario que indica el manual.",
      steps: [
        "Con el equipo apagado, abrí la tapa frontal de la unidad interior como indica el manual y sacá los filtros.",
        "Observá la serpentina con aletas que queda a la vista: ese es el evaporador. ¿Está limpio?",
        "Mirá la unidad exterior desde un lugar seguro: identificá el ventilador y la serpentina detrás de la rejilla.",
        "Lavá los filtros con agua como indica el manual, dejalos secar y volvé a colocarlos.",
        "Anotá qué diferencia hay entre limpiar filtros (tarea del usuario) y limpiar serpentinas (tarea técnica).",
      ],
    },
    {
      type: "warning",
      title: "Seguridad",
      items: [
        "Antes de tocar los filtros, apagá el equipo y cortá la alimentación eléctrica.",
        "Las aletas de aluminio son muy filosas: no pases los dedos por los bordes.",
        "La limpieza profunda de serpentinas y bandeja la hace un técnico, con el equipo desconectado.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "ASHRAE Handbook — Fundamentals (2021), cap. 4: Heat Transfer", url: "https://www.ashrae.org/technical-resources/ashrae-handbook", verified: false, note: "Obra de referencia (en inglés, de pago). Confirmar edición y capítulo con el ejemplar disponible." },
  ],
  quiz: [
    { id: "q1", question: "¿Qué le pasa al refrigerante en el condensador?", options: ["Se evapora absorbiendo calor", "Se condensa liberando calor al exterior", "Se comprime", "Se filtra"], correct: 1, explanation: "El vapor caliente cede calor al aire exterior y pasa a líquido." },
    { id: "q2", question: "¿Para qué sirven las aletas de las serpentinas?", options: ["Para decorar", "Para multiplicar la superficie de contacto con el aire", "Para sostener el ventilador", "Para aislar eléctricamente"], correct: 1, explanation: "Más superficie significa mejor intercambio de calor." },
    { id: "q3", question: "Si el evaporador está sucio, el equipo…", options: ["Enfría mejor", "Enfría menos y consume más", "No cambia", "Se apaga solo"], correct: 1, explanation: "La suciedad dificulta el intercambio de calor y baja el rendimiento." },
    { id: "q4", question: "¿De dónde sale el agua del desagüe?", options: ["Del refrigerante", "De la humedad del aire que se condensa en el evaporador", "De la lluvia", "De un tanque interno"], correct: 1, explanation: "Es la humedad del ambiente condensada sobre la serpentina fría." },
  ],
};

export const lesson15: Lesson = {
  id: "dispositivos-de-expansion",
  title: "Dispositivos de expansión",
  summary: "Tubo capilar y válvula de expansión.",
  minutes: 20,
  review: "pendiente",
  prerequisites: ["Clase 3: presión y cambios de estado.", "Clase 14: condensador y evaporador."],
  objectives: [
    "Explicar la doble función del dispositivo de expansión.",
    "Diferenciar el tubo capilar de la válvula de expansión termostática.",
    "Entender qué pasa si entra demasiado o muy poco refrigerante al evaporador.",
  ],
  sections: [
    {
      type: "text",
      title: "La frontera entre alta y baja presión",
      paragraphs: [
        "El dispositivo de expansión es un estrechamiento en el circuito, ubicado entre el condensador y el evaporador. Cumple dos misiones: bajar bruscamente la presión del refrigerante líquido y dosificar cuánto refrigerante entra al evaporador.",
        "Al caer la presión, parte del líquido se evapora de golpe y la mezcla se enfría mucho. Por eso al evaporador llega una mezcla fría de líquido y vapor, lista para absorber calor.",
        "Es el punto que separa el lado de alta presión (caliente) del lado de baja presión (frío).",
      ],
    },
    { type: "diagram", title: "Capilar y válvula termostática", kind: "expansion-devices" },
    {
      type: "list",
      title: "Si la dosificación falla",
      items: [
        "Demasiado refrigerante: el evaporador no alcanza a evaporarlo todo y puede llegar líquido al compresor, que no está hecho para comprimir líquido («golpe de líquido»).",
        "Muy poco refrigerante: el evaporador trabaja a medias, enfría poco y el vapor sale recalentado.",
        "El capilar no se regula: viene calculado de fábrica. La válvula termostática se autorregula según la temperatura a la salida del evaporador.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [
        {
          title: "Unidad condensadora, válvula de expansión y tuberías en una cámara frigorífica",
          url: "https://mediateca.educa.madrid.org/video/t5p9o74ewjfvh9q9",
          author: "Mediateca de EducaMadrid (contenido educativo de docentes)",
          learning: "Clase docente sobre la selección de la unidad condensadora y la válvula de expansión. Es de nivel técnico y trata una cámara frigorífica, pero los principios son los mismos del aire acondicionado.",
          verification: "Enlace y ficha comprobados el 28/10/2026; la transcripción publicada en la ficha está en español. Revisión completa del contenido con el equipo docente pendiente.",
          note: "Recurso externo de referencia, aún no validado por el equipo docente para esta clase.",
        },
        pendingVideo("Animación del tubo capilar y la válvula de expansión en un split"),
      ],
    },
    {
      type: "activity",
      title: "Actividad práctica: el efecto del estrechamiento",
      intro: "Una experiencia con agua, sin riesgos, para entender la caída de presión.",
      steps: [
        "Tomá una botella con agua y hacé un agujero chico en la tapa.",
        "Apretá la botella y observá cómo sale el chorro fino y con fuerza por el agujero.",
        "Pensá: el agua adentro está a «alta presión» (porque apretás) y afuera a «baja presión». El agujero es el estrechamiento, como el capilar.",
        "Anotá con tus palabras qué le pasa al refrigerante cuando atraviesa el dispositivo de expansión.",
      ],
    },
    {
      type: "warning",
      title: "Seguridad",
      items: [
        "El capilar y la válvula están conectados al circuito de refrigerante a presión: no los toques ni los dobles.",
        "Un capilar tapado o roto es una reparación técnica: requiere vacío, soldadura y carga de refrigerante, siempre con capacitación y supervisión.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "Documentación técnica de fabricantes de válvulas de expansión (Danfoss u otros)", verified: false, note: "Pendiente de incorporar: elegir y comprobar documentación oficial." },
  ],
  quiz: [
    { id: "q1", question: "¿Cuáles son las dos misiones del dispositivo de expansión?", options: ["Comprimir y calentar", "Bajar la presión y dosificar el refrigerante al evaporador", "Filtrar y almacenar", "Ventilar y deshumidificar"], correct: 1, explanation: "Baja bruscamente la presión del líquido y regula cuánto refrigerante entra al evaporador." },
    { id: "q2", question: "¿Qué diferencia hay entre el capilar y la válvula termostática?", options: ["El capilar se autorregula y la válvula no", "La válvula se autorregula según la temperatura y el capilar es fijo", "Son lo mismo", "El capilar es eléctrico"], correct: 1, explanation: "El capilar es un caño fijo calculado de fábrica; la válvula abre o cierra según el bulbo sensor." },
    { id: "q3", question: "Si entra demasiado refrigerante al evaporador, ¿qué puede pasar?", options: ["Nada", "Llega líquido al compresor y puede dañarlo", "El equipo enfría el doble", "Se apaga el ventilador"], correct: 1, explanation: "El compresor no puede comprimir líquido: es el «golpe de líquido»." },
  ],
};

export const lesson16: Lesson = {
  id: "refrigerantes",
  title: "Refrigerantes",
  summary: "R-410A, R-32, R-22 y su impacto ambiental.",
  minutes: 25,
  risk: true,
  review: "pendiente",
  prerequisites: ["Clase 3: presión y cambios de estado.", "Clase 6: cómo leer la etiqueta y el manual."],
  objectives: [
    "Explicar qué es un refrigerante y qué propiedades debe tener.",
    "Distinguir los refrigerantes más comunes: R-22, R-410A y R-32.",
    "Entender qué son el agotamiento de la capa de ozono y el potencial de calentamiento global (GWP).",
    "Reconocer las precauciones de seguridad de cada refrigerante.",
  ],
  sections: [
    {
      type: "text",
      title: "El fluido que transporta el calor",
      paragraphs: [
        "El refrigerante es el fluido que circula por el circuito y transporta el calor. Un buen refrigerante se evapora a baja temperatura, absorbe mucho calor al evaporarse y no se congela dentro del circuito.",
        "No siempre se usaron los mismos. Los refrigerantes viejos resultaron dañinos para la capa de ozono o para el clima, y fueron reemplazados por otros mejores.",
        "Cada equipo está diseñado para un solo tipo de refrigerante, indicado en la placa. Nunca se mezclan ni se sustituyen entre sí.",
      ],
    },
    {
      type: "list",
      title: "Los tres que vas a encontrar",
      items: [
        "R-22: el clásico de los equipos viejos. Daña la capa de ozono y está en retiro: ya no se fabrican equipos nuevos con este gas.",
        "R-410A: el estándar de los splits de los últimos años. No daña el ozono, pero tiene alto potencial de calentamiento global. No es inflamable (clasificación A1).",
        "R-32: el reemplazo actual. Calienta mucho menos el planeta que el R-410A, pero es levemente inflamable (A2L): exige precauciones extra con chispas y llamas.",
      ],
    },
    { type: "diagram", title: "Impacto ambiental comparado", kind: "refrigerant-compare" },
    {
      type: "text",
      title: "Ozono y calentamiento global: dos problemas distintos",
      paragraphs: [
        "La capa de ozono nos protege de la radiación ultravioleta del sol. Los gases con cloro (como el R-22) la destruyen. El Protocolo de Montreal ordenó eliminarlos.",
        "El calentamiento global es otro problema: algunos refrigerantes, aunque no dañen el ozono, son gases de efecto invernadero muy potentes si se escapan al aire. De eso se trata el GWP.",
        "Por eso el refrigerante nunca debe liberarse a la atmósfera: se recupera con equipos especiales. Y por eso la tendencia mundial es pasar a gases de bajo GWP como el R-32.",
      ],
    },
    {
      type: "supervised",
      title: "Qué podés estudiar y qué no debés hacer todavía",
      theory: [
        "Leer en la placa qué refrigerante usa un equipo.",
        "Entender las clasificaciones de seguridad (A1, A2L) y el GWP.",
        "Conocer las normas ambientales sobre recuperación de refrigerante.",
      ],
      requiresSupervision: [
        "Cargar, recuperar o trasvasar refrigerante.",
        "Soldar cañerías de un circuito cargado.",
        "Trabajar con R-32 cerca de posibles fuentes de ignición.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [
        {
          title: "Guía completa de refrigerantes: de los HFC a los hidrocarburos",
          url: "https://www.youtube.com/watch?v=9seg_YDPiko",
          author: "Compresores Servicios C.A.",
          learning: "Charla técnica extensa (casi una hora) sobre la transición de refrigerantes y su comercialización. Útil como panorama; está orientada a vendedores y técnicos.",
          verification: "Enlace, título y canal comprobados el 28/10/2026; transcripción automática consultada en español. Revisión completa del contenido con el equipo docente pendiente.",
          note: "Recurso externo de referencia, aún no validado por el equipo docente para esta clase.",
        },
        pendingVideo("Video introductorio corto sobre R-410A, R-32 y medio ambiente"),
      ],
    },
    {
      type: "activity",
      title: "Actividad práctica: censo de refrigerantes",
      intro: "Solo lectura de placas y etiquetas, sin abrir equipos.",
      steps: [
        "Buscá la placa de dos o tres equipos (en tu casa, comercios o catálogos en línea) y anotá qué refrigerante usan.",
        "Clasificalos: ¿son R-22, R-410A, R-32 u otro?",
        "Investigá en la tabla de esta clase qué impacto ambiental tiene cada uno.",
        "Anotá qué refrigerante elegirías para un equipo nuevo y por qué.",
      ],
    },
    {
      type: "warning",
      title: "Seguridad: refrigerantes",
      items: [
        "El refrigerante está a presión incluso con el equipo apagado. Una fuga puede causar quemaduras por frío en piel y ojos.",
        "El R-32 es levemente inflamable: ante una fuga, nada de chispas, llamas ni soldaduras cerca.",
        "Liberar refrigerante a la atmósfera daña el ambiente y está prohibido por normas ambientales.",
        "Toda manipulación del circuito requiere capacitación práctica supervisada y, según la jurisdicción, habilitación correspondiente.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "Hojas de datos de seguridad (SDS) de los refrigerantes R-410A y R-32", verified: false, note: "Pendiente de verificar." },
    { title: "Protocolo de Montreal y sus enmiendas (incluida Kigali) — Secretaría del Ozono, PNUMA", url: "https://ozone.unep.org/treaties/montreal-protocol", verified: true, note: "Fuente oficial de Naciones Unidas. Enlace comprobado el 31/10/2026." }, { title: "Ley 27.356 — Aprobación de la Enmienda de Kigali (Argentina)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-27356-274800", verified: true, note: "Texto oficial argentino. Enlace comprobado el 31/10/2026." },
    { title: "IPCC AR6, Grupo de Trabajo I, capítulo 7 (material suplementario con valores de GWP)", url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/", verified: false, note: "Fuente institucional. El sitio bloquea la verificación automática; los valores de GWP cambian entre informes (AR4, AR5, AR6) y la normativa puede usar uno anterior: indicar siempre qué informe se cita." },
  ],
  quiz: [
    { id: "q1", question: "¿Por qué el R-22 está en retiro?", options: ["Porque enfría poco", "Porque daña la capa de ozono", "Porque es inflamable", "Porque es caro"], correct: 1, explanation: "Su cloro destruye la capa de ozono; el Protocolo de Montreal ordenó eliminarlo." },
    { id: "q2", question: "¿Qué mide el GWP de un refrigerante?", options: ["Su presión de trabajo", "Cuánto calienta el planeta comparado con el CO₂", "Su precio por kilo", "Su inflamabilidad"], correct: 1, explanation: "El GWP compara el efecto invernadero del gas con el del dióxido de carbono." },
    { id: "q3", question: "¿Qué precaución extra exige el R-32 frente al R-410A?", options: ["Ninguna", "Es levemente inflamable: evitar chispas y llamas cerca de una fuga", "Hay que usarlo solo de noche", "Hay que mezclarlo con agua"], correct: 1, explanation: "El R-32 es clasificación A2L: levemente inflamable." },
    { id: "q4", question: "Si un equipo pierde refrigerante, lo correcto es…", options: ["Liberarlo al aire", "Recargarlo sin más", "Que un técnico encuentre y repare la fuga, y recupere el gas con equipos especiales", "Cambiar el refrigerante por otro tipo"], correct: 2, explanation: "Nunca se libera a la atmósfera ni se recarga sin reparar la fuga." },
  ],
};

export const lesson17: Lesson = {
  id: "inverter-vs-convencional",
  title: "Inverter y convencional",
  summary: "Diferencias entre equipos inverter y on/off.",
  minutes: 20,
  review: "pendiente",
  prerequisites: ["Clase 13: el compresor.", "Clase 5: frigorías, BTU y capacidad."],
  objectives: [
    "Explicar cómo regula la temperatura un equipo convencional (on/off).",
    "Explicar cómo lo hace un equipo inverter.",
    "Comparar consumo, confort y precio de ambas tecnologías.",
    "Aclarar la confusión frecuente entre «inverter» y «frío/calor».",
  ],
  sections: [
    {
      type: "text",
      title: "Dos maneras de regular la temperatura",
      paragraphs: [
        "Un equipo convencional (on/off) tiene el compresor a velocidad fija: funciona a plena potencia hasta llegar a la temperatura elegida, se apaga, y vuelve a arrancar cuando el ambiente se calienta. Prende y para muchas veces.",
        "Un equipo inverter regula la velocidad del compresor: arranca fuerte para llegar rápido a la temperatura y después baja las revoluciones para mantenerla, sin apagarse.",
        "«Inverter» no significa frío/calor: un equipo puede ser frío/calor con cualquiera de las dos tecnologías. La válvula inversora (que sí da frío y calor) se ve en la clase 18.",
      ],
    },
    { type: "diagram", title: "Temperatura en el tiempo: on/off vs inverter", kind: "inverter-curve" },
    {
      type: "list",
      title: "Comparación práctica",
      items: [
        "Consumo: el inverter evita los picos de arranque y suele gastar menos electricidad, sobre todo en usos largos.",
        "Confort: el inverter mantiene la temperatura más estable y es más silencioso.",
        "Precio: el inverter cuesta más al comprarlo; el ahorro se nota en la factura con el tiempo.",
        "Reparación: la electrónica del inverter es más compleja y sus repuestos, más caros.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [
        {
          title: "Diferencias entre aire acondicionado inverter y convencional",
          url: "https://www.youtube.com/watch?v=mhtigN_MV1Y",
          author: "CONFOREMPRESARIAL LATINOAMERICA",
          learning: "Comparación práctica entre ambas tecnologías y consejos de compra e instalación.",
          verification: linkChecked,
          note: "Recurso externo de referencia, aún no validado por el equipo docente para esta clase.",
        },
        pendingVideo("Animación del variador de velocidad del compresor inverter"),
      ],
    },
    {
      type: "activity",
      title: "Actividad práctica: detectar la tecnología",
      intro: "Solo observación y lectura de datos, sin abrir equipos.",
      steps: [
        "Buscá en la placa o el manual de un equipo si dice «inverter» o indica corriente variable.",
        "Con el equipo funcionando un rato, escuchá la unidad exterior: ¿se apaga y prende, o sigue funcionando suave? (No concluyas solo por esto: anotá lo que observás.)",
        "Compará en un comercio o catálogo en línea el precio de dos equipos de igual capacidad, uno inverter y uno convencional.",
        "Anotá para qué uso le recomendarías cada uno a un familiar.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "Secretaría de Energía de Argentina — Etiquetado en eficiencia energética", url: "https://www.argentina.gob.ar/economia/energia/eficiencia-energetica/etiquetado-en-eficiencia-energetica", verified: true, note: "Fuente oficial. Enlace comprobado el 31/10/2026." },
  ],
  quiz: [
    { id: "q1", question: "¿Cómo mantiene la temperatura un equipo convencional?", options: ["Regulando la velocidad del compresor", "Prendiendo y apagando el compresor", "Abriendo una ventanilla", "Cambiando el refrigerante"], correct: 1, explanation: "Funciona a plena potencia y se detiene al llegar a la temperatura elegida." },
    { id: "q2", question: "¿Qué hace la tecnología inverter?", options: ["Invierte el ciclo a calor", "Regula la velocidad del compresor para mantener la temperatura sin apagarse", "Limpia el aire", "Usa dos compresores"], correct: 1, explanation: "El compresor acelera o desacelera según la necesidad, sin arranques bruscos." },
    { id: "q3", question: "«Inverter» significa que el equipo…", options: ["Es frío/calor", "Regula la velocidad del compresor (frío/calor es otra función)", "No consume electricidad", "No necesita instalación"], correct: 1, explanation: "Confusión frecuente: frío/calor depende de la válvula inversora, no del inverter." },
  ],
};

export const lesson18: Lesson = {
  id: "valvula-inversora",
  title: "Frío/calor: la válvula inversora",
  summary: "Cómo un equipo pasa de enfriar a calefaccionar.",
  minutes: 20,
  review: "pendiente",
  prerequisites: ["Clase 13: el compresor.", "Clase 14: condensador y evaporador."],
  objectives: [
    "Explicar qué es una bomba de calor.",
    "Describir cómo la válvula de cuatro vías invierte el recorrido del refrigerante.",
    "Entender qué les pasa al condensador y al evaporador al cambiar de modo.",
    "Conocer la función de deshielo (defrost) en modo calor.",
  ],
  sections: [
    {
      type: "text",
      title: "El mismo equipo, al revés",
      paragraphs: [
        "Un equipo frío/calor (bomba de calor) usa el mismo ciclo frigorífico en las dos direcciones. En verano saca el calor del interior y lo tira afuera; en invierno toma calor del aire exterior (aunque esté frío, el aire tiene calor) y lo entrega adentro.",
        "El componente que hace posible el cambio es la válvula inversora o válvula de cuatro vías, ubicada en la unidad exterior, entre el compresor y las dos serpentinas.",
        "La válvula no cambia los componentes: cambia a dónde va el gas caliente del compresor. Así, la serpentina que era condensador pasa a ser evaporador, y al revés.",
      ],
    },
    { type: "diagram", title: "Modo frío y modo calor", kind: "reversing-valve" },
    {
      type: "list",
      title: "Qué pasa en cada modo",
      items: [
        "Modo frío: el gas caliente del compresor va a la unidad exterior (condensador) y el calor sale afuera. La unidad interior es el evaporador y enfría.",
        "Modo calor: la válvula desvía el gas caliente hacia la unidad interior, que ahora es el condensador y calefacciona. La unidad exterior pasa a ser el evaporador.",
        "La válvula tiene una bobina eléctrica (solenoide) que la acciona cuando elegís «calor» en el control remoto.",
      ],
    },
    {
      type: "text",
      title: "El deshielo en invierno",
      paragraphs: [
        "En modo calor, la unidad exterior trabaja como evaporador y su serpentina queda muy fría. Si afuera hace mucho frío y hay humedad, se forma hielo sobre las aletas.",
        "El equipo lo detecta y hace cada tanto un ciclo de deshielo (defrost): invierte por unos minutos el circuito para calentar la serpentina exterior y derretir el hielo. Es normal ver vapor saliendo de la unidad exterior en esos momentos: no es humo.",
      ],
    },
    {
      type: "videos",
      title: "Videos recomendados",
      videos: [
        {
          title: "Válvula inversora de 4 vías en aire acondicionado frío-calor",
          url: "https://www.youtube.com/watch?v=k31lxGKaVVk",
          author: "Full Service Paraná",
          learning: "Muestra una válvula inversora real en un equipo frío/calor y explica sus conexiones.",
          verification: "Enlace, título y canal comprobados el 28/10/2026. La transcripción automática consultada aparece en otro idioma, por lo que el idioma del audio y la revisión completa del contenido quedan pendientes de verificar con el equipo docente.",
          note: "Recurso externo de referencia, aún no validado por el equipo docente para esta clase.",
        },
        pendingVideo("Animación del ciclo frío/calor con válvula de cuatro vías"),
      ],
    },
    {
      type: "activity",
      title: "Actividad práctica: comparar los dos modos",
      intro: "Solo observación con el equipo funcionando, en un día fresco. No toques cañerías ni abras tapas.",
      steps: [
        "Poné el equipo en modo frío unos minutos y acercá la mano (sin tocar) a la salida de aire de la unidad exterior: ¿cómo sale el aire?",
        "Cambiá a modo calor, esperá unos minutos y repetí la observación en la unidad exterior: ¿qué cambió?",
        "Anotá en qué modo la unidad exterior expulsa aire caliente y en cuál expulsa aire frío, y explicá por qué con el diagrama de esta clase.",
        "Si alguna vez viste «vapor» salir de una unidad exterior en invierno, anotá qué estaba pasando.",
      ],
    },
    {
      type: "warning",
      title: "Seguridad",
      items: [
        "La válvula inversora está conectada a la descarga caliente del compresor: sus caños pueden quemar.",
        "Su reemplazo requiere abrir el circuito de refrigerante: tarea exclusiva de técnicos capacitados.",
        "Si el equipo no cambia de modo o se escucha un golpe seco repetido, no insistas: llamá al servicio técnico.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "Documentación técnica de fabricantes sobre válvulas de cuatro vías", verified: false, note: "Pendiente de incorporar: elegir y comprobar documentación oficial." },
  ],
  quiz: [
    { id: "q1", question: "¿Qué hace la válvula inversora?", options: ["Cambia el refrigerante", "Invierte el recorrido del gas caliente del compresor entre las unidades", "Regula la velocidad del ventilador", "Filtra el aire"], correct: 1, explanation: "Desvía la descarga del compresor hacia una u otra serpentina, cambiando el rol de cada una." },
    { id: "q2", question: "En modo calor, la unidad interior funciona como…", options: ["Evaporador", "Condensador", "Compresor", "Capilar"], correct: 1, explanation: "Recibe el gas caliente y entrega calor al ambiente: es el condensador." },
    { id: "q3", question: "¿De dónde saca calor el equipo en invierno?", options: ["De una resistencia eléctrica siempre", "Del aire exterior, que tiene calor aunque esté frío", "Del gas de la red domiciliaria", "Del sol únicamente"], correct: 1, explanation: "La bomba de calor extrae calor del aire de afuera y lo entrega adentro." },
    { id: "q4", question: "Si en invierno sale vapor de la unidad exterior, probablemente…", options: ["Se está quemando", "Está haciendo el ciclo de deshielo, que es normal", "Perdió todo el refrigerante", "Hay que apagarlo ya"], correct: 1, explanation: "El defrost derrite el hielo de la serpentina exterior y produce vapor de agua." },
  ],
};
