import type { Lesson, Source } from "./types";
import splitImg from "@/assets/split-system.jpg";
import outdoorImg from "@/assets/outdoor-unit.jpg";
import indoorImg from "@/assets/indoor-unit.jpg";
import splitReference from "@/assets/split-circuito-referencia.jpeg.asset.json";

// Clases 2 a 6 del Módulo 1. Contenido redactado por ClimaPro: pendiente de revisión técnica.
const manual: Source = {
  title: "Manual de instalación y uso del fabricante de tu equipo",
  verified: false,
  note: "Pendiente de incorporar: elegir manuales concretos y comprobarlos.",
};
const pendingVideo = (title: string) => ({ title, note: "Pendiente de incorporar: recurso a seleccionar y verificar por el equipo docente." });

export const lesson2: Lesson = {
  id: "calor-y-temperatura",
  title: "Calor, temperatura y humedad",
  summary: "Conceptos físicos esenciales explicados de forma simple.",
  minutes: 25,
  review: "pendiente",
  prerequisites: ["Clase 1: ¿Qué hace un aire acondicionado?"],
  objectives: [
    "Diferenciar calor de temperatura.",
    "Explicar en qué sentido viaja el calor y por qué.",
    "Distinguir calor sensible y calor latente con ejemplos cotidianos.",
    "Entender qué es la humedad relativa y por qué el equipo saca agua del aire.",
  ],
  sections: [
    {
      type: "text",
      title: "Calor y temperatura no son lo mismo",
      paragraphs: [
        "La temperatura indica qué tan caliente o frío está algo. Se mide con un termómetro, en grados Celsius (°C).",
        "El calor es energía que pasa de un cuerpo a otro. Una pileta de agua tibia tiene mucho más calor acumulado que una taza de agua hirviendo, aunque la taza esté a más temperatura.",
        "El calor siempre viaja solo desde lo más caliente hacia lo más frío. Para llevarlo al revés (del interior fresco al exterior caluroso) hace falta una máquina que consuma energía: eso es el aire acondicionado.",
      ],
    },
    {
      type: "list",
      title: "Tres formas en que se mueve el calor",
      items: [
        "Conducción: por contacto directo. Ejemplo: el calor que pasa a través de una pared o de un caño de cobre.",
        "Convección: transportado por un fluido en movimiento. Ejemplo: el ventilador que hace pasar aire por la serpentina.",
        "Radiación: sin contacto, como el sol que calienta una ventana. Es una de las causas por las que un ambiente se calienta.",
      ],
    },
    {
      type: "text",
      title: "Calor sensible y calor latente",
      paragraphs: [
        "Calor sensible: el que cambia la temperatura y se nota con el termómetro. Por ejemplo, el aire que pasa de 28 °C a 18 °C.",
        "Calor latente: el que se absorbe o libera cuando una sustancia cambia de estado, sin cambiar su temperatura. Por ejemplo, el agua que hierve sigue a 100 °C mientras se evapora, aunque la hornalla siga dándole calor.",
        "El aire acondicionado aprovecha el calor latente: el refrigerante absorbe mucho calor al evaporarse. Lo verás en detalle en la clase 3.",
      ],
    },
    {
      type: "text",
      title: "La humedad del aire",
      paragraphs: [
        "El aire contiene vapor de agua. La humedad relativa (en %) indica cuánto vapor tiene el aire comparado con el máximo que puede tener a esa temperatura.",
        "Cuando el aire toca una superficie fría (la serpentina del evaporador), parte de ese vapor se condensa en gotas, igual que en un vaso con hielo en verano. Por eso el equipo produce agua y necesita desagüe.",
        "Al sacar humedad, el ambiente se siente más agradable: con menos humedad, la transpiración se evapora mejor y el cuerpo se refresca.",
      ],
    },
    { type: "gallery", title: "Recursos visuales", images: [{ src: indoorImg, caption: "La serpentina fría del evaporador es donde se condensa la humedad del aire." }] },
    { type: "videos", title: "Videos recomendados", videos: [pendingVideo("Calor sensible y calor latente explicado")] },
    {
      type: "activity",
      title: "Actividad práctica: el vaso con hielo",
      intro: "Una experiencia casera, sin riesgos, para observar la condensación.",
      steps: [
        "Llená un vaso de vidrio con agua y hielo, y secalo bien por fuera.",
        "Dejalo 10 minutos sobre una mesa en un ambiente cálido.",
        "Observá las gotas que aparecen por fuera. ¿De dónde salió esa agua?",
        "Si tenés un termómetro de cocina, medí la temperatura del agua mientras el hielo se derrite: va a mantenerse cerca de 0 °C. Eso es calor latente.",
        "Anotá en tu cuaderno qué relación tiene esto con el desagüe del aire acondicionado.",
      ],
    },
  ],
  sources: [
    { title: "Libro de física de nivel secundario o terciario (termodinámica básica)", verified: false, note: "Pendiente de incorporar: elegir un texto concreto con autor y edición." },
    { title: "ASHRAE Handbook — Fundamentals (2021), cap. 1: Psychrometrics", url: "https://www.ashrae.org/technical-resources/ashrae-handbook", verified: false, note: "Obra de referencia (en inglés, de pago). Confirmar edición y capítulo con el ejemplar disponible." },
  ],
  quiz: [
    { id: "q1", question: "¿Cuál es la diferencia entre calor y temperatura?", options: ["Son lo mismo", "La temperatura indica qué tan caliente está algo; el calor es energía que pasa de un cuerpo a otro", "El calor se mide con termómetro y la temperatura no", "La temperatura solo existe en verano"], correct: 1, explanation: "La temperatura es una medida; el calor es energía en tránsito." },
    { id: "q2", question: "Naturalmente, el calor viaja…", options: ["De lo frío a lo caliente", "De lo caliente a lo frío", "Solo hacia arriba", "No se mueve sin ventilador"], correct: 1, explanation: "Para moverlo al revés hace falta una máquina, como el aire acondicionado." },
    { id: "q3", question: "¿Qué es el calor latente?", options: ["El que cambia la temperatura", "El que se absorbe o libera al cambiar de estado sin cambiar la temperatura", "El calor del sol", "El calor del compresor"], correct: 1, explanation: "Ejemplo: el agua hirviendo sigue a 100 °C mientras se evapora." },
    { id: "q4", question: "¿Por qué el equipo produce agua?", options: ["Porque pierde refrigerante", "Porque el vapor del aire se condensa sobre la serpentina fría", "Porque tiene un tanque interno", "Por la lluvia"], correct: 1, explanation: "Es el mismo efecto que las gotas en un vaso con hielo." },
  ],
};

export const lesson3: Lesson = {
  id: "presion-y-cambios-de-estado",
  title: "Presión y cambios de estado",
  summary: "Por qué el refrigerante se evapora y se condensa.",
  minutes: 25,
  risk: true,
  review: "pendiente",
  prerequisites: ["Clase 2: Calor, temperatura y humedad (calor latente)."],
  objectives: [
    "Explicar qué es la presión y en qué unidades se mide.",
    "Entender que la temperatura de ebullición depende de la presión.",
    "Relacionar alta y baja presión con las zonas caliente y fría del ciclo.",
    "Reconocer por qué un circuito con refrigerante a presión es peligroso.",
  ],
  sections: [
    {
      type: "text",
      title: "¿Qué es la presión?",
      paragraphs: [
        "La presión es la fuerza que hace un gas o un líquido sobre las paredes que lo contienen. Pensá en una rueda de bicicleta inflada: el aire empuja la cubierta desde adentro.",
        "En climatización se usan sobre todo dos unidades: el psi (libras por pulgada cuadrada) y el bar. Los manómetros de los técnicos suelen mostrar ambas.",
        "Presión manométrica es la que marca el manómetro tomando como cero la presión del aire que nos rodea. Presión absoluta es la que cuenta también el aire atmosférico.",
      ],
    },
    {
      type: "text",
      title: "La presión cambia el punto de ebullición",
      paragraphs: [
        "El agua hierve a unos 100 °C al nivel del mar. En una olla a presión hierve a más temperatura, y en la montaña (menos presión) hierve a menos temperatura.",
        "Con el refrigerante pasa lo mismo: a baja presión se evapora a temperaturas muy bajas, y a alta presión se condensa aunque esté caliente.",
        "Esta es la clave del aire acondicionado: el equipo cambia la presión del refrigerante para que se evapore adentro (absorbiendo calor) y se condense afuera (liberándolo).",
      ],
    },
    {
      type: "list",
      title: "Las dos zonas del circuito",
      items: [
        "Lado de alta presión: desde la salida del compresor, pasando por el condensador, hasta el dispositivo de expansión. Refrigerante caliente.",
        "Lado de baja presión: desde el dispositivo de expansión, pasando por el evaporador, hasta la entrada del compresor. Refrigerante frío.",
        "Cada refrigerante tiene su propia relación presión-temperatura, que el fabricante publica en tablas. Las verás más adelante.",
      ],
    },
    {
      type: "supervised",
      title: "Qué podés estudiar y qué no debés hacer todavía",
      theory: [
        "Entender la relación entre presión y temperatura.",
        "Reconocer en fotos los manómetros y las válvulas de servicio.",
        "Leer en el manual qué refrigerante y qué presiones indica el fabricante.",
      ],
      requiresSupervision: [
        "Conectar manómetros a un equipo.",
        "Abrir o cerrar válvulas de servicio.",
        "Liberar, recuperar o cargar refrigerante.",
      ],
    },
    { type: "diagram", title: "Cambios de estado del refrigerante", kind: "phase-changes" },
    { type: "diagram", title: "Presión y recorrido en el circuito frigorífico", kind: "pressure-circuit" },
    { type: "gallery", title: "Equipo split y recorrido general del refrigerante", images: [{ src: splitReference.url, caption: "Equipo split y circuito de refrigeración: referencia aportada por el usuario." }] },
    { type: "videos", title: "Videos recomendados", videos: [
      {
        title: "Sistemas de refrigeración por compresión",
        url: "https://www.upv.es/visor/media/200dd740-4bb2-11e8-af70-03116a2e3d4b/c",
        author: "B. Velázquez Martí · Universitat Politècnica de València (UPV)",
        learning: "Complemento universitario sobre el ciclo de compresión, la selección del refrigerante y las presiones del evaporador y del condensador. Incluye dimensionado, más avanzado que esta clase.",
        verification: "Ficha oficial, autor, enlace y pertinencia comprobados el 28/10/2026. Reproducción y revisión completa del audio en español pendientes; la ficha consultada está en español.",
        note: "Recurso externo de referencia, aún no validado por el equipo docente para esta clase.",
      },
      {
        ...pendingVideo("Relación presión-temperatura en refrigerantes"),
        note: "Pendiente: seleccionar un video introductorio en español centrado en presión y cambios de estado, comprobar su reproducción y revisar su contenido completo con el equipo docente.",
      },
    ] },
    {
      type: "activity",
      title: "Actividad práctica: presión y ebullición en la cocina",
      intro: "Una observación con supervisión de un adulto si sos menor. Cuidado con el agua caliente.",
      steps: [
        "Poné agua a calentar en una pava o en una olla destapada.",
        "Observá cuándo empieza a hervir. Fijate que, mientras hierve, no se pone más caliente.",
        "Pensá: si la olla fuera a presión, ¿hervirá a más o a menos temperatura?",
        "Escribí con tus palabras por qué el equipo necesita alta presión en el condensador y baja presión en el evaporador.",
      ],
    },
    {
      type: "warning",
      title: "Seguridad: refrigerante y presión",
      items: [
        "El circuito del equipo está siempre a presión, incluso apagado. Una fuga o un caño cortado puede expulsar refrigerante con fuerza.",
        "El refrigerante que se escapa se evapora de golpe y puede causar quemaduras por frío en piel y ojos.",
        "Algunos refrigerantes actuales (como el R-32) son ligeramente inflamables: no hay que generar chispas ni llamas cerca de una fuga.",
        "La manipulación del circuito requiere capacitación práctica supervisada, herramientas adecuadas y, según la jurisdicción, habilitación correspondiente.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "Tablas presión-temperatura publicadas por fabricantes de refrigerante", verified: false, note: "Pendiente de incorporar: elegir y comprobar las tablas oficiales." },
    { title: "Hojas de datos de seguridad (SDS) de los refrigerantes R-410A y R-32", verified: false, note: "Pendiente de verificar." },
  ],
  quiz: [
    { id: "q1", question: "Si aumenta la presión, la temperatura a la que hierve un líquido…", options: ["Baja", "Sube", "No cambia", "Llega a cero"], correct: 1, explanation: "Por eso en la olla a presión el agua hierve a más de 100 °C." },
    { id: "q2", question: "¿Dónde está el refrigerante a baja presión?", options: ["En el condensador", "A la salida del compresor", "En el evaporador", "En el cable de alimentación"], correct: 2, explanation: "En el evaporador la baja presión permite que se evapore frío, absorbiendo calor del ambiente." },
    { id: "q3", question: "¿Qué tarea puede hacer un principiante sin supervisión?", options: ["Conectar manómetros", "Abrir válvulas de servicio", "Estudiar la relación presión-temperatura", "Cargar refrigerante"], correct: 2, explanation: "Las tareas sobre el circuito requieren capacitación y supervisión." },
  ],
};

export const lesson4: Lesson = {
  id: "tipos-de-equipos",
  title: "Tipos de equipos",
  summary: "Split, ventana, portátil, piso-techo, cassette y multisplit.",
  minutes: 20,
  review: "pendiente",
  prerequisites: ["Clase 1: partes de un equipo split."],
  objectives: [
    "Reconocer los tipos de equipos más comunes en hogares y comercios.",
    "Describir ventajas y limitaciones de cada uno.",
    "Elegir qué tipo conviene según el ambiente, en términos generales.",
  ],
  sections: [
    {
      type: "parts",
      title: "Los equipos más comunes",
      image: splitReference.url,
      parts: [
        { name: "Split de pared", description: "Unidad interior en la pared y exterior afuera. Silencioso y muy usado en casas. Es el que estudiamos en este curso." },
        { name: "De ventana", description: "Todo en una sola caja que atraviesa la pared o la ventana. Más simple de instalar, pero más ruidoso." },
        { name: "Portátil", description: "Una unidad con ruedas que expulsa el calor por una manguera hacia afuera. Práctico, pero menos eficiente." },
        { name: "Piso-techo", description: "Unidad interior grande que se coloca en el techo o abajo en la pared. Para ambientes amplios y comercios." },
        { name: "Cassette", description: "Se coloca embutido en un cielorraso y distribuye el aire en varias direcciones. Común en oficinas y locales." },
        { name: "Multisplit", description: "Una sola unidad exterior conectada a varias unidades interiores, en distintos ambientes." },
      ],
    },
    {
      type: "text",
      title: "Mismo principio, distinta forma",
      paragraphs: [
        "Todos estos equipos usan el mismo principio de ciclo frigorífico por compresión que viste en la clase 1, aunque los componentes concretos (tipo de compresor, dispositivo de expansión, control) varían según fabricante, modelo y capacidad. Lo que cambia es dónde están ubicados los componentes y cómo se distribuye el aire.",
        "En los equipos compactos (ventana y portátil) el compresor y el evaporador están en la misma caja. En los split están separados, y por eso el ruido del compresor queda afuera.",
        "Existen también sistemas centrales con conductos para edificios y grandes superficies. Se mencionan como referencia, pero no forman parte de este curso inicial.",
      ],
    },
    { type: "gallery", title: "Recursos visuales", images: [{ src: splitImg, caption: "Equipo split de pared (imagen ilustrativa con rótulos en inglés)." }, { src: outdoorImg, caption: "Unidad exterior de un split." }] },
    { type: "videos", title: "Videos recomendados", videos: [pendingVideo("Tipos de aire acondicionado y sus usos")] },
    {
      type: "activity",
      title: "Actividad práctica: relevamiento en tu barrio",
      intro: "Solo observación desde la vereda o lugares públicos. No ingreses a propiedades ajenas ni subas a techos.",
      steps: [
        "Durante una caminata, contá cuántos equipos ves y de qué tipo son (split, ventana, otro).",
        "Si entrás a un comercio, fijate si tiene cassette o piso-techo.",
        "Hacé una tabla: tipo de equipo, lugar donde estaba y por qué creés que lo eligieron.",
      ],
    },
  ],
  sources: [manual, { title: "Catálogos técnicos de fabricantes con la línea residencial y comercial", verified: false, note: "Pendiente de incorporar." }],
  quiz: [
    { id: "q1", question: "¿Qué equipo tiene una unidad exterior conectada a varias interiores?", options: ["Portátil", "Multisplit", "De ventana", "Cassette"], correct: 1, explanation: "El multisplit atiende varios ambientes con una sola unidad exterior." },
    { id: "q2", question: "¿Por qué un split suele ser más silencioso que uno de ventana?", options: ["Porque no tiene compresor", "Porque el compresor queda en la unidad exterior", "Porque usa menos refrigerante", "Porque no tiene ventilador"], correct: 1, explanation: "Al separar las unidades, el ruido del compresor queda afuera." },
    { id: "q3", question: "¿Qué equipo se instala embutido en un cielorraso?", options: ["Cassette", "Portátil", "De ventana", "Split de pared"], correct: 0, explanation: "El cassette va en el cielorraso y reparte el aire en varias direcciones." },
  ],
};

export const lesson5: Lesson = {
  id: "frigorias-btu-capacidad",
  title: "Frigorías, BTU y capacidad",
  summary: "Cómo se mide la potencia de un equipo.",
  minutes: 25,
  review: "pendiente",
  prerequisites: ["Clase 2: calor y temperatura.", "Clase 4: tipos de equipos."],
  objectives: [
    "Entender qué significa la capacidad de un equipo.",
    "Convertir aproximadamente entre frigorías, BTU/h y kilovatios.",
    "Diferenciar capacidad de frío y consumo eléctrico.",
    "Comprender por qué un equipo mal dimensionado funciona mal.",
  ],
  sections: [
    {
      type: "text",
      title: "¿Qué es la capacidad?",
      paragraphs: [
        "La capacidad indica cuánto calor puede sacar un equipo de un ambiente por hora. No es lo mismo que lo que consume de electricidad.",
        "En Argentina es muy común hablar de frigorías (por ejemplo, «un equipo de 3000 frigorías»). En otros países y en muchos catálogos se usan BTU/h o kilovatios (kW).",
      ],
    },
    {
      type: "list",
      title: "Equivalencias aproximadas",
      items: [
        "1 frigoría por hora equivale a 1 kilocaloría por hora quitada al ambiente.",
        "1 frigoría/h ≈ 3,97 BTU/h ≈ 1,16 W.",
        "Un equipo de 12.000 BTU/h equivale aproximadamente a 3000 frigorías/h, o 3,5 kW de frío.",
        "Ejemplos de tamaños comerciales: 2250, 3000, 4500 y 6000 frigorías (aprox. 9000, 12.000, 18.000 y 24.000 BTU/h).",
      ],
    },
    {
      type: "text",
      title: "Capacidad no es consumo",
      paragraphs: [
        "Un equipo de 3,5 kW de frío no consume 3,5 kW de electricidad: consume bastante menos. La relación entre el frío que produce y la electricidad que gasta es su eficiencia.",
        "Por eso la etiqueta de eficiencia energética es importante: dos equipos de la misma capacidad pueden consumir distinto. Lo verás en la clase 6.",
      ],
    },
    {
      type: "text",
      title: "Si el equipo es muy chico o muy grande",
      paragraphs: [
        "Muy chico: funciona todo el tiempo y no llega a enfriar en los días de más calor.",
        "Muy grande: enfría rápido y se apaga, prende y apaga seguido, saca poca humedad y el ambiente queda frío pero pegajoso. También es una compra más cara.",
        "La capacidad correcta depende del tamaño del ambiente, el sol, las ventanas, la cantidad de personas y los aparatos. El cálculo simplificado se ve en la clase 26.",
      ],
    },
    { type: "videos", title: "Videos recomendados", videos: [pendingVideo("Frigorías y BTU: cómo elegir la capacidad")] },
    {
      type: "activity",
      title: "Actividad práctica: convertir unidades",
      intro: "Ejercicio con calculadora o en el cuaderno.",
      steps: [
        "Buscá la capacidad de un equipo en su etiqueta o en un catálogo.",
        "Si está en BTU/h, dividila por 4 para obtener una idea aproximada en frigorías.",
        "Si está en frigorías, multiplicala por 1,16 para tenerla en vatios (W).",
        "Compará la capacidad de frío con la potencia eléctrica que figura en la etiqueta. ¿Cuál es mayor?",
      ],
    },
  ],
  sources: [
    manual,
    { title: "NIST Special Publication 811 — Guide for the Use of the International System of Units (factores de conversión, apéndice B)", url: "https://www.nist.gov/pml/special-publication-811", verified: true, note: "Fuente institucional (NIST, EE. UU.). Respalda 1 kcal/h ≈ 1,163 W y 1 BTU/h ≈ 0,293 W, de donde surge 1 frigoría/h ≈ 3,97 BTU/h. Enlace comprobado el 31/10/2026." },
  ],
  quiz: [
    { id: "q1", question: "¿Qué indica la capacidad de un equipo?", options: ["Cuánta electricidad consume", "Cuánto calor puede sacar del ambiente por hora", "Su tamaño físico", "Su nivel de ruido"], correct: 1, explanation: "La capacidad es el calor que el equipo traslada; el consumo es otra cosa." },
    { id: "q2", question: "Un equipo de 12.000 BTU/h equivale aproximadamente a…", options: ["1000 frigorías", "3000 frigorías", "6000 frigorías", "12.000 frigorías"], correct: 1, explanation: "1 frigoría/h ≈ 4 BTU/h, por lo tanto 12.000 / 4 ≈ 3000." },
    { id: "q3", question: "¿Qué pasa si el equipo es demasiado grande para el ambiente?", options: ["Funciona perfecto", "Prende y apaga seguido y saca poca humedad", "No enciende", "Consume menos"], correct: 1, explanation: "Enfría rápido y corta, por lo que deshumidifica poco." },
  ],
};

export const lesson6: Lesson = {
  id: "etiqueta-y-manual",
  title: "Cómo leer la etiqueta y el manual",
  summary: "Datos de placa, refrigerante, consumo y eficiencia.",
  minutes: 20,
  review: "pendiente",
  prerequisites: ["Clase 5: frigorías, BTU y capacidad."],
  objectives: [
    "Identificar los datos de la placa de un equipo.",
    "Interpretar la etiqueta de eficiencia energética.",
    "Saber qué secciones del manual consultar antes de cualquier tarea.",
  ],
  sections: [
    {
      type: "parts",
      title: "Qué dice la placa de datos",
      parts: [
        { name: "Marca y modelo", description: "Permiten buscar el manual y los repuestos correctos." },
        { name: "Capacidad", description: "En frío y, si corresponde, en calor (W, BTU/h o frigorías)." },
        { name: "Alimentación eléctrica", description: "Tensión (por ejemplo, 220 V), frecuencia (50 Hz) y fases." },
        { name: "Potencia y corriente", description: "Lo que consume el equipo y la corriente que toma. Sirve para elegir protecciones (lo ve un electricista)." },
        { name: "Tipo y carga de refrigerante", description: "Por ejemplo, R-410A o R-32, y la cantidad cargada de fábrica." },
        { name: "Presiones de diseño", description: "Las máximas que soporta el circuito. Las usan los técnicos capacitados." },
      ],
    },
    {
      type: "text",
      title: "La etiqueta de eficiencia energética",
      paragraphs: [
        "En Argentina, los aires acondicionados que se venden llevan una etiqueta de eficiencia energética con letras de colores. La letra A (o sus variantes A+, A++) indica los equipos más eficientes.",
        "La etiqueta muestra también el consumo estimado y la capacidad. Comparar etiquetas ayuda a elegir equipos que gasten menos electricidad.",
        "Las normas que regulan esta etiqueta se indican en «Fuentes y referencias» como pendientes de verificar.",
      ],
    },
    {
      type: "list",
      title: "Partes del manual que siempre hay que leer",
      items: [
        "Advertencias de seguridad del fabricante.",
        "Requisitos de instalación: distancias mínimas, largo máximo de cañería y diferencia de altura entre unidades.",
        "Requisitos eléctricos y diagrama de conexión.",
        "Mantenimiento recomendado por el usuario (por ejemplo, limpieza de filtros).",
        "Tabla de códigos de error y condiciones de garantía.",
      ],
    },
    { type: "gallery", title: "Recursos visuales", images: [{ src: outdoorImg, caption: "La placa de datos suele estar en un costado de la unidad exterior y también en la interior." }] },
    { type: "videos", title: "Videos recomendados", videos: [pendingVideo("Cómo interpretar la etiqueta de eficiencia energética")] },
    {
      type: "activity",
      title: "Actividad práctica: ficha de un equipo",
      intro: "Leé la placa sin abrir ni desarmar nada, y con el equipo en un lugar accesible a nivel del piso.",
      steps: [
        "Buscá la placa de datos de un equipo en tu casa o un lugar autorizado. Si está en altura, no subas: usá el manual o la caja.",
        "Anotá marca, modelo, capacidad, tensión, consumo y refrigerante.",
        "Buscá la etiqueta de eficiencia (en la caja, el folleto o el comercio) y anotá la letra.",
        "Con el modelo, buscá el manual del fabricante y ubicá la sección de seguridad.",
      ],
    },
    {
      type: "warning",
      title: "Seguridad",
      items: [
        "Leer la placa no requiere abrir el equipo. Nunca retires tapas para buscarla.",
        "Los datos eléctricos sirven para que un electricista matriculado defina la instalación. No los uses para conectar el equipo por tu cuenta.",
      ],
    },
  ],
  sources: [
    manual,
    { title: "IRAM — Etiquetado de Eficiencia Energética", url: "https://www.iram.org.ar/servicio/etiquetado-de-eficiencia-energetica/", verified: true, note: "Página institucional de IRAM. El número y la versión vigente de la norma de etiquetado de acondicionadores de aire deben confirmarse allí (no se verificó el texto de la norma). Enlace comprobado el 31/10/2026." },
    { title: "Secretaría de Energía de Argentina — Etiquetado en eficiencia energética", url: "https://www.argentina.gob.ar/economia/energia/eficiencia-energetica/etiquetado-en-eficiencia-energetica", verified: true, note: "Fuente oficial del Estado nacional. Enlace comprobado el 31/10/2026." },
  ],
  quiz: [
    { id: "q1", question: "¿Dónde se encuentra el tipo de refrigerante del equipo?", options: ["En el control remoto", "En la placa de datos", "En el filtro", "No se informa"], correct: 1, explanation: "La placa indica el refrigerante y la carga de fábrica." },
    { id: "q2", question: "En la etiqueta de eficiencia, la letra A indica…", options: ["El equipo más eficiente", "El más barato", "El más grande", "El más ruidoso"], correct: 0, explanation: "Las letras A y sus variantes corresponden a los equipos de menor consumo." },
    { id: "q3", question: "Si la placa está en una unidad en altura, ¿qué conviene hacer?", options: ["Subir con una silla", "Usar el manual o la caja para leer los datos", "Desarmar la unidad", "Pedirle a alguien que se cuelgue"], correct: 1, explanation: "Nunca te expongas a trabajo en altura sin equipo y capacitación." },
  ],
};
