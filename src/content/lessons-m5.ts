import type { Lesson, Source } from "./types";

// Clases 25–30: material propio para principiantes, pendiente de revisión docente.
// Los valores concretos (distancias, torques, longitudes, cargas) dependen del fabricante y modelo:
// el texto los presenta como ejemplos y remite siempre al manual de instalación.
const manual: Source = { title: "Manual de instalación del fabricante del equipo a instalar", verified: false, note: "Fuente principal para distancias, longitudes, desniveles, torques, carga adicional y conexión. No se verificó un manual concreto: cada modelo trae el suyo." };
const aea: Source = { title: "AEA 90364 — Reglamentación para la Ejecución de Instalaciones Eléctricas en Inmuebles", url: "https://aea.org.ar", verified: false, note: "Sitio de la AEA comprobado el 31/10/2026. Parte, edición y adopción por jurisdicción a confirmar con un profesional habilitado." };
const ley19587: Source = { title: "Ley 19.587 de Higiene y Seguridad en el Trabajo", url: "https://www.argentina.gob.ar/normativa/nacional/ley-19587-17612", verified: true, note: "Texto oficial. Enlace comprobado el 31/10/2026." };
const dec911: Source = { title: "Decreto 911/1996 — Higiene y seguridad en la industria de la construcción (incluye trabajo en altura)", url: "https://www.argentina.gob.ar/normativa/nacional/decreto-911-1996-38568", verified: true, note: "Texto oficial. Enlace comprobado el 31/10/2026. No se citan artículos específicos." };
const srt886: Source = { title: "Resolución SRT 886/2015 — Protocolo de Ergonomía", url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-886-2015-246272/texto", verified: true, note: "Levantamiento manual de cargas. Enlace comprobado el 31/10/2026." };
const ashrae: Source = { title: "ASHRAE Handbook — Fundamentals (2021), capítulos de cálculo de cargas térmicas", url: "https://www.ashrae.org/technical-resources/ashrae-handbook", verified: false, note: "Referencia internacional (en inglés, de pago) para métodos de cálculo completos. El sitio bloquea la verificación automática: confirmar edición y capítulo." };
const montreal: Source = { title: "Protocolo de Montreal y Enmienda de Kigali — Secretaría del Ozono, PNUMA", url: "https://ozone.unep.org/treaties/montreal-protocol", verified: true, note: "Marco por el cual el refrigerante no se libera a la atmósfera. Enlace comprobado el 31/10/2026." };

export const lesson25: Lesson = {
  id: "relevamiento",
  title: "Relevamiento y ubicación",
  summary: "Cómo elegir el lugar de cada unidad.",
  minutes: 30, review: "pendiente", sources: [manual, dec911, ley19587],
  prerequisites: ["Clase 3: tipos de equipos.", "Clase 6: lectura de la etiqueta y del manual.", "Clase 9: trabajo en altura y manejo de cargas."],
  objectives: ["Ordenar un relevamiento antes de instalar.", "Elegir la ubicación de la unidad interior y de la exterior con criterios técnicos.", "Reconocer qué datos dependen del manual del modelo.", "Detectar situaciones que requieren otro profesional."],
  sections: [
    { type: "text", title: "Antes de mover una herramienta", paragraphs: [
      "El relevamiento es la visita en la que se observa el lugar, se conversa con el cliente y se toman datos. Una buena instalación empieza acá: muchos problemas de ruido, goteo, bajo rendimiento o fallas tempranas nacen de una mala ubicación.",
      "El objetivo es responder tres preguntas: dónde va cada unidad, por dónde pasan cañerías, cable y desagüe, y si la instalación eléctrica existente es adecuada. Todo se anota y, si es posible, se fotografía.",
      "Los valores exactos (distancias libres, longitud máxima de cañería, desnivel máximo entre unidades) no son universales: los fija el fabricante para cada modelo en su manual de instalación.",
    ] },
    { type: "parts", title: "Criterios para la unidad interior", parts: [
      { name: "Distribución del aire", description: "Ubicarla donde el aire pueda recorrer el ambiente sin obstáculos como placares altos, vigas o cortinas. Evitar que sople directo sobre camas o escritorios." },
      { name: "Pared firme", description: "La pared debe soportar el peso de la unidad y de la placa de montaje. Revisar si es mampostería, durlock u otro material: el tipo de fijación cambia." },
      { name: "Espacios libres", description: "Respetar las distancias al techo y a los laterales que indica el manual, para la toma de aire y el mantenimiento." },
      { name: "Salida de desagüe", description: "Debe existir un recorrido con pendiente descendente hacia afuera o hacia un desagüe apto. Si no lo hay, se evalúa una bomba de condensado (clase 29)." },
      { name: "Lejos de fuentes de calor", description: "Evitar ubicarla sobre hornallas, estufas o equipos que generen calor, humedad o grasa." },
    ] },
    { type: "parts", title: "Criterios para la unidad exterior", parts: [
      { name: "Circulación de aire", description: "Necesita tomar y expulsar aire libremente. Un lugar encerrado hace que recircule su propio aire caliente y baje el rendimiento." },
      { name: "Base o soporte adecuado", description: "Piso firme y nivelado o ménsulas aptas para el peso, ancladas a una pared resistente." },
      { name: "Acceso seguro", description: "Debe poder instalarse y mantenerse sin riesgo. Si queda en altura o sobre un vacío, se requiere trabajo en altura con las medidas de seguridad correspondientes." },
      { name: "Vecinos y ruido", description: "Evitar que el aire caliente, el ruido o el agua de condensado molesten a vecinos o caigan sobre lugares de paso. Revisar reglamentos del edificio o del consorcio." },
      { name: "Distancia y desnivel", description: "La longitud de cañería y la diferencia de altura entre unidades deben quedar dentro de lo que permite el manual del modelo." },
    ] },
    { type: "list", title: "Lista de relevamiento", items: [
      "Ambiente: medidas, orientación, cantidad de ventanas, personas y equipos que generan calor (se usan en la clase 26).",
      "Modelo y capacidad del equipo, si ya fue comprado; tensión de alimentación indicada en su etiqueta.",
      "Recorrido previsto de cañerías, cable de interconexión y desagüe; cantidad de pases de pared.",
      "Estado del tablero y existencia de puesta a tierra; la evaluación eléctrica la confirma un electricista habilitado.",
      "Accesos, altura de trabajo y herramientas o andamios necesarios.",
      "Permisos del consorcio o del propietario, si corresponde.",
    ] },
    { type: "warning", title: "Cuándo no avanzar", items: [
      "Si la instalación eléctrica no tiene puesta a tierra o protecciones adecuadas: se informa al cliente y se deriva a un electricista habilitado.",
      "Si la unidad exterior queda en altura sin forma de trabajar con seguridad: no improvisar, planificar el trabajo en altura con los medios adecuados.",
      "Si la pared no es firme o hay riesgo de perforar caños de agua, gas o cables embutidos: verificar antes de perforar.",
    ] },
    { type: "activity", title: "Actividad: relevamiento de tu casa", intro: "Elegí un ambiente de tu casa como si fueras a instalar un split. No perfores ni muevas nada: solo observá y anotá.", steps: [
      "Dibujá una planta simple del ambiente con medidas aproximadas, puertas y ventanas.",
      "Marcá dónde pondrías la unidad interior y explicá por qué.",
      "Marcá dónde iría la unidad exterior y por dónde pasarían las cañerías y el desagüe.",
      "Anotá qué datos te faltarían y en qué parte del manual los buscarías.",
    ] },
    { type: "list", title: "Resumen esencial", items: ["El relevamiento define el éxito de la instalación.", "La unidad interior necesita distribución del aire, pared firme y desagüe posible.", "La unidad exterior necesita aire libre, soporte firme y acceso seguro.", "Distancias, longitudes y desniveles se toman siempre del manual del modelo."] },
  ],
  quiz: [
    { id: "q1", question: "¿De dónde se obtienen las distancias libres y la longitud máxima de cañería?", options: ["Son iguales para todos los equipos", "Del manual de instalación del modelo", "Se eligen a ojo", "De la factura de compra"], correct: 1, explanation: "Cada fabricante las fija para su modelo en el manual de instalación." },
    { id: "q2", question: "¿Qué pasa si la unidad exterior queda encerrada sin circulación de aire?", options: ["Recircula aire caliente y baja su rendimiento", "Funciona mejor porque está protegida", "No cambia nada", "Consume menos"], correct: 0, explanation: "Necesita expulsar el calor: si vuelve a tomar su propio aire caliente, rinde menos y puede detenerse por protección." },
    { id: "q3", question: "Durante el relevamiento descubrís que el tablero no tiene puesta a tierra. ¿Qué hacés?", options: ["Instalás igual", "Usás el neutro como tierra", "Informás al cliente y derivás a un electricista habilitado", "Lo resolvés con un cable cualquiera"], correct: 2, explanation: "La puesta a tierra es una protección esencial y su ejecución corresponde a un profesional habilitado. El neutro nunca reemplaza al conductor de protección." },
  ],
};

export const lesson26: Lesson = {
  id: "carga-termica",
  title: "Cálculo de carga térmica simplificado",
  summary: "Estimar la capacidad necesaria para un ambiente.",
  minutes: 35, review: "pendiente", sources: [ashrae, manual],
  prerequisites: ["Clase 5: frigorías, BTU y capacidad."],
  objectives: ["Explicar qué es la carga térmica de un ambiente.", "Reconocer los factores que la aumentan.", "Hacer una estimación orientativa y entender sus límites.", "Saber cuándo hace falta un cálculo profesional."],
  sections: [
    { type: "text", title: "¿Qué es la carga térmica?", paragraphs: [
      "La carga térmica es la cantidad de calor que hay que quitar de un ambiente para mantenerlo a la temperatura deseada. Se expresa en frigorías por hora, BTU/h o kW, las mismas unidades de la clase 5.",
      "Ese calor entra por paredes, techo y ventanas, por el sol, por el aire exterior que se filtra, y también se genera adentro: personas, iluminación, computadoras, cocina.",
      "Un equipo chico no llega a enfriar en los días más calurosos y trabaja sin descanso. Uno sobredimensionado puede enfriar demasiado rápido, deshumidificar poco y, en equipos convencionales, encender y apagar con frecuencia. Elegir bien la capacidad es parte de una buena instalación.",
    ] },
    { type: "list", title: "Factores que aumentan la carga", items: [
      "Sol directo sobre ventanas grandes, sobre todo orientadas al oeste o al norte (en el hemisferio sur).",
      "Techo bajo losa o chapa expuesta al sol, sin aislación.",
      "Muchas personas en el ambiente (cada persona aporta calor).",
      "Equipos eléctricos: computadoras, televisores, cocina, iluminación.",
      "Ambientes integrados o puertas que quedan abiertas a otros espacios.",
      "Clima de la zona: la misma habitación requiere más capacidad en una ciudad más calurosa.",
    ] },
    { type: "text", title: "Una estimación orientativa", paragraphs: [
      "En Argentina es habitual una regla práctica para viviendas: multiplicar el volumen del ambiente (largo × ancho × alto, en m³) por unas 50 frigorías/h por m³, y luego corregir según sol, ocupación y equipos. Es una aproximación de uso comercial, no un método normalizado.",
      "Ejemplo: un dormitorio de 4 m × 4 m con 2,6 m de altura tiene unos 42 m³. 42 × 50 ≈ 2100 frigorías/h. Si recibe sol fuerte por la tarde, se elige el tamaño comercial superior más cercano, por ejemplo 2250 o 3000 frigorías.",
      "Esta cuenta sirve para dormitorios y livings comunes. No sirve para locales comerciales, oficinas con muchas personas o equipos, ambientes vidriados, cocinas profesionales ni espacios con requisitos especiales: allí corresponde un cálculo de cargas completo, como los descriptos en el ASHRAE Handbook, realizado por un profesional.",
    ] },
    { type: "activity", title: "Actividad: estimá la capacidad de tu ambiente", intro: "Usá las medidas que tomaste en la clase 25.", steps: [
      "Calculá el volumen: largo × ancho × alto.",
      "Multiplicá por 50 para obtener frigorías/h aproximadas.",
      "Anotá los factores que aumentan la carga en tu ambiente (sol, personas, equipos).",
      "Elegí el tamaño comercial más cercano y convertí el resultado a BTU/h (1 frigoría/h ≈ 3,97 BTU/h).",
      "Escribí en una línea por qué tu número es una estimación y no un cálculo definitivo.",
    ] },
    { type: "list", title: "Resumen esencial", items: ["Carga térmica: calor a quitar para mantener la temperatura.", "Sol, techo, personas, equipos y clima la aumentan.", "La regla de unas 50 frigorías/h por m³ es solo orientativa para viviendas.", "Ambientes comerciales o especiales requieren un cálculo profesional."] },
  ],
  quiz: [
    { id: "q1", question: "¿Qué es la carga térmica de un ambiente?", options: ["El peso del equipo", "El calor que hay que quitar para mantener la temperatura deseada", "La potencia eléctrica del tablero", "La presión del refrigerante"], correct: 1, explanation: "Es la cantidad de calor que entra o se genera y que el equipo debe extraer." },
    { id: "q2", question: "Un ambiente de 50 m³ con la regla orientativa de 50 frigorías/h por m³ necesita aproximadamente:", options: ["250 frigorías/h", "1000 frigorías/h", "2500 frigorías/h", "25.000 frigorías/h"], correct: 2, explanation: "50 × 50 = 2500 frigorías/h, a corregir luego por sol, ocupación y equipos." },
    { id: "q3", question: "¿En cuál de estos casos la regla práctica NO alcanza?", options: ["Un dormitorio común", "Un living pequeño", "Un local comercial vidriado con mucha gente", "Un estudio chico sin sol directo"], correct: 2, explanation: "Locales comerciales, vidriados o con mucha ocupación necesitan un cálculo de cargas completo." },
  ],
};

export const lesson27: Lesson = {
  id: "montaje-unidades",
  title: "Montaje de unidades",
  summary: "Fijación de la unidad interior y exterior.",
  minutes: 35, risk: true, review: "pendiente", sources: [manual, dec911, srt886, ley19587],
  prerequisites: ["Clase 9: trabajo en altura y manejo de cargas.", "Clase 11: herramientas manuales.", "Clase 25: relevamiento y ubicación."],
  objectives: ["Describir el orden general del montaje.", "Explicar la función de la placa de montaje y de las ménsulas.", "Reconocer la importancia del nivel y de la pendiente.", "Identificar los riesgos del montaje y cuándo se requiere supervisión."],
  sections: [
    { type: "text", title: "Orden general del montaje", paragraphs: [
      "Cada fabricante describe el procedimiento de su modelo, pero el orden general suele ser: fijar la placa de la unidad interior, hacer el pase de pared, colgar la unidad interior, colocar el soporte o la base de la exterior, ubicar la unidad exterior y luego interconectar cañerías, cable y desagüe.",
      "El montaje es mecánico: todavía no se conecta a la red eléctrica ni se abren las válvulas de servicio. Esas etapas tienen sus propias clases y controles.",
    ] },
    { type: "parts", title: "Elementos del montaje", parts: [
      { name: "Placa de montaje", description: "Chapa que viene con la unidad interior. Se fija a la pared con tarugos y tornillos aptos para el material de la pared. Su posición define la altura y el nivel del equipo." },
      { name: "Pase de pared", description: "Perforación por donde salen cañerías, cable y desagüe. Suele hacerse con una leve inclinación hacia afuera para que el agua no vuelva al interior. El diámetro y la posición los indica el manual." },
      { name: "Ménsulas o base", description: "Soportes de la unidad exterior. Deben ser aptos para su peso, estar bien anclados y nivelados. Se suelen usar tacos antivibratorios para reducir ruido." },
      { name: "Nivel", description: "Herramienta para comprobar que la placa y las unidades queden en la posición correcta. Algunos fabricantes indican una leve inclinación de la unidad interior hacia el lado del desagüe: seguir el manual." },
    ] },
    { type: "supervised", title: "Qué entender y qué se hace solo con supervisión", theory: [
      "Por qué se verifica el material de la pared antes de elegir la fijación.",
      "Por qué la unidad exterior necesita un soporte calculado para su peso.",
      "Cómo se lee en el manual la plantilla de perforación y las distancias.",
    ], requiresSupervision: [
      "Perforar paredes, sobre todo cerca de instalaciones embutidas.",
      "Colocar ménsulas y montar la unidad exterior, especialmente en altura o en fachadas.",
      "Levantar y trasladar las unidades: la exterior puede ser pesada y se maneja entre dos personas cuando corresponde.",
    ] },
    { type: "warning", title: "Riesgos del montaje", items: [
      "Caída de altura y caída de objetos sobre personas que pasan: trabajar en altura solo con capacitación, equipos y medidas de seguridad.",
      "Lesiones por levantar carga: postura correcta y ayuda de otra persona.",
      "Perforar un caño de agua o gas, o un cable embutido: verificar el recorrido antes.",
      "Una unidad exterior mal fijada puede caer: nunca improvisar soportes.",
    ] },
    { type: "activity", title: "Actividad: lectura de la plantilla", intro: "Buscá en internet el manual de instalación de un split de cualquier marca (sitio oficial del fabricante).", steps: [
      "Encontrá la figura de la placa de montaje y la ubicación del pase de pared.",
      "Anotá las distancias libres que pide para la unidad interior y la exterior.",
      "Buscá si indica peso de las unidades y tipo de soporte.",
      "Compará con lo que habías previsto en tu relevamiento de la clase 25.",
    ] },
    { type: "list", title: "Resumen esencial", items: ["El montaje es mecánico; la conexión eléctrica y la apertura de válvulas vienen después.", "La placa de montaje define altura y nivel de la unidad interior.", "La unidad exterior requiere soporte apto, anclado y nivelado.", "Perforar, montar en altura y levantar cargas se hace con capacitación y supervisión."] },
  ],
  quiz: [
    { id: "q1", question: "¿Para qué sirve la placa de montaje?", options: ["Para conectar la electricidad", "Para fijar la unidad interior a la pared en la posición correcta", "Para cargar refrigerante", "Para filtrar el aire"], correct: 1, explanation: "La placa se fija a la pared y sobre ella se cuelga la unidad interior." },
    { id: "q2", question: "¿Por qué el pase de pared suele tener una leve inclinación hacia afuera?", options: ["Para que el agua no vuelva al interior", "Por estética", "Para que entre más aire", "No importa la inclinación"], correct: 0, explanation: "La inclinación ayuda a que el agua de lluvia o condensado salga hacia afuera." },
    { id: "q3", question: "¿Qué tarea requiere supervisión durante la formación?", options: ["Leer el manual", "Anotar distancias", "Montar la unidad exterior en una fachada", "Dibujar la planta del ambiente"], correct: 2, explanation: "El trabajo en altura y el montaje de cargas pesadas tienen riesgo de caída y requieren capacitación y supervisión." },
  ],
};

export const lesson28: Lesson = {
  id: "canerias-de-cobre",
  title: "Cañerías de cobre",
  summary: "Corte, abocardado y aislación.",
  minutes: 40, risk: true, review: "pendiente", sources: [manual, montreal],
  prerequisites: ["Clase 8: refrigerantes y presión.", "Clase 12: herramientas de refrigeración.", "Clase 13: compresores (contaminación del circuito)."],
  objectives: ["Reconocer la línea de líquido y la de gas (succión).", "Explicar por qué el corte, el abocardado y la limpieza son críticos.", "Describir la aislación de las cañerías.", "Distinguir lo que se comprende en teoría de lo que se practica con supervisión."],
  sections: [
    { type: "text", title: "Dos cañerías, dos funciones", paragraphs: [
      "Un split se interconecta con dos caños de cobre: uno de menor diámetro (línea de líquido) y otro de mayor diámetro (línea de gas o succión). Los diámetros los define el fabricante para cada capacidad y modelo; no se cambian por criterio propio.",
      "El cobre usado en refrigeración es de calidad específica para ese uso, limpio y deshidratado, y se mantiene tapado hasta su instalación. La humedad, el polvo o las limaduras dentro del circuito pueden dañar el compresor y obstruir el dispositivo de expansión.",
      "Muchos splits traen refrigerante en la unidad exterior para una longitud de cañería determinada. Si la cañería es más larga, puede requerirse carga adicional según el manual: eso se trata en el módulo 6.",
    ] },
    { type: "parts", title: "Pasos y herramientas principales", parts: [
      { name: "Medición y curvado", description: "Se mide el recorrido y se curva con curvadora o con radios suaves para no aplastar el caño. Un caño aplastado restringe el paso del refrigerante." },
      { name: "Corte", description: "Con cortatubos, no con sierra: la sierra deja limaduras que pueden entrar al circuito. El corte debe quedar recto." },
      { name: "Escariado", description: "Se quita la rebaba interior con el escariador, con el caño hacia abajo para que las virutas caigan afuera." },
      { name: "Abocardado (flare)", description: "Se coloca la tuerca antes de abocardar y se forma el cono con un abocardador. En los splits actuales se usa habitualmente un abocardado a 45°; la medida del cono depende del diámetro y de la herramienta. Un abocardado defectuoso es una causa frecuente de fugas." },
      { name: "Ajuste con torquímetro", description: "Las tuercas se ajustan con llave dinamométrica al torque que indica el fabricante. Poco ajuste genera fugas; demasiado puede partir el abocardado." },
      { name: "Aislación", description: "Cada caño lleva su aislación térmica (espuma elastomérica o similar) para evitar condensación y pérdidas de rendimiento. Luego se encinta el conjunto." },
    ] },
    { type: "supervised", title: "Qué entender y qué se hace solo con supervisión", theory: [
      "Por qué el circuito debe mantenerse limpio y seco.",
      "Qué es un buen abocardado: liso, centrado, sin fisuras y con el tamaño correcto.",
      "Por qué el torque se toma del manual y no se ajusta «a fuerza».",
    ], requiresSupervision: [
      "Practicar corte, escariado y abocardado (primero en caños de práctica, sin refrigerante).",
      "Conectar cañerías a las válvulas de servicio de la unidad exterior.",
      "Cualquier tarea sobre un circuito que contenga refrigerante: requiere capacitación y, según la jurisdicción, habilitación.",
    ] },
    { type: "warning", title: "Seguridad y ambiente", items: [
      "Usar protección ocular y guantes al cortar y abocardar.",
      "Nunca abrir válvulas ni aflojar conexiones de un equipo cargado sin capacitación: el refrigerante sale a presión y puede provocar quemaduras por frío.",
      "El refrigerante no se libera a la atmósfera; se recupera con equipos específicos (marco del Protocolo de Montreal).",
      "Algunos refrigerantes actuales, como el R-32, son levemente inflamables (clasificación A2L): no generar llamas ni chispas cerca de una posible fuga.",
    ] },
    { type: "activity", title: "Actividad: inspección de abocardados", intro: "Si tenés acceso a un taller o a un instructor, pedí ver abocardados bien hechos y defectuosos. Si no, buscá imágenes en el manual de un fabricante.", steps: [
      "Describí cómo se ve un abocardado correcto.",
      "Enumerá tres defectos posibles (fisura, descentrado, tamaño incorrecto) y qué consecuencia tendría cada uno.",
      "Buscá en un manual la tabla de torques para cada diámetro y anotá que esos valores son de ese modelo.",
    ] },
    { type: "list", title: "Resumen esencial", items: ["Línea de líquido (fina) y de gas o succión (gruesa); diámetros según el fabricante.", "Cortatubos y escariador: nunca sierra ni limaduras dentro del caño.", "Abocardado correcto y torque del manual para evitar fugas.", "Cada caño se aísla; las prácticas se hacen con supervisión."] },
  ],
  quiz: [
    { id: "q1", question: "¿Por qué se corta con cortatubos y no con sierra?", options: ["Porque es más rápido", "Porque la sierra deja limaduras que pueden entrar al circuito", "Porque la sierra no corta cobre", "Da lo mismo"], correct: 1, explanation: "Las limaduras pueden dañar el compresor u obstruir la expansión." },
    { id: "q2", question: "¿De dónde se obtiene el torque de ajuste de las tuercas?", options: ["Se ajusta a fuerza", "De la tabla del fabricante, con llave dinamométrica", "Siempre es el mismo valor", "No hace falta ajustarlas"], correct: 1, explanation: "Cada diámetro tiene un torque indicado por el fabricante; poco o demasiado ajuste causa fallas." },
    { id: "q3", question: "¿Para qué se aíslan las cañerías?", options: ["Para que se vean mejor", "Para evitar condensación y pérdidas de rendimiento", "Para aumentar la presión", "Para conducir electricidad"], correct: 1, explanation: "La aislación evita que el caño frío condense agua y que gane calor en el recorrido." },
    { id: "q4", question: "¿Qué significa que el R-32 sea A2L?", options: ["Que es tóxico", "Que es levemente inflamable", "Que no tiene presión", "Que no daña nada"], correct: 1, explanation: "A2L es la clasificación de seguridad de refrigerantes de baja toxicidad y baja inflamabilidad." },
  ],
};

export const lesson29: Lesson = {
  id: "desague-condensado",
  title: "Desagüe",
  summary: "Pendiente correcta y bombas de condensado.",
  minutes: 25, review: "pendiente", sources: [manual],
  prerequisites: ["Clase 2: calor y temperatura (condensación).", "Clase 25: relevamiento y ubicación."],
  objectives: ["Explicar de dónde sale el agua del equipo.", "Describir cómo debe ser un desagüe por gravedad.", "Reconocer cuándo se usa una bomba de condensado.", "Identificar fallas típicas de desagüe."],
  sections: [
    { type: "text", title: "¿De dónde sale el agua?", paragraphs: [
      "En modo frío, el evaporador está más frío que el punto de rocío del aire del ambiente. La humedad del aire se condensa sobre sus aletas, gotea en la bandeja y debe salir por la manguera de desagüe.",
      "La cantidad de agua depende de la humedad, la temperatura y el tiempo de funcionamiento: en días húmedos puede ser considerable. En modo calor, la unidad exterior también puede producir agua durante el descongelamiento.",
    ] },
    { type: "list", title: "Desagüe por gravedad: buenas prácticas", items: [
      "Pendiente descendente continua en todo el recorrido. Es habitual indicar al menos 1 cm por metro, pero el valor mínimo se confirma en el manual del modelo.",
      "Sin tramos que suban, sin panzas (curvas hacia abajo donde se acumule agua) y sin aplastamientos.",
      "Manguera aislada en el tramo interior, si el manual lo indica, para evitar que condense por fuera.",
      "Descarga a un lugar apto: no sobre veredas, pasos o propiedad vecina.",
      "El extremo no debe quedar sumergido en agua ni tapado.",
    ] },
    { type: "text", title: "Bomba de condensado", paragraphs: [
      "Cuando no es posible lograr pendiente descendente (por ejemplo, la unidad interior está en una pared interna y el desagüe queda más alto), se usa una bomba de condensado: un pequeño equipo que eleva el agua hasta un punto de descarga.",
      "Su elección, ubicación y conexión siguen las instrucciones de su fabricante. Muchas tienen un contacto de alarma que puede detener el equipo si el agua no se evacua; esa conexión eléctrica corresponde a personal capacitado.",
    ] },
    { type: "warning", title: "Fallas típicas", items: [
      "Agua que gotea por la unidad interior: pendiente incorrecta, manguera aplastada o bandeja obstruida.",
      "Malos olores: agua estancada en la bandeja o en panzas de la manguera.",
      "Manchas de humedad en la pared: pase de pared mal sellado o manguera dañada dentro de la pared.",
    ] },
    { type: "activity", title: "Actividad: observá un desagüe", intro: "Si tenés un split en funcionamiento, observá su desagüe sin desarmar nada.", steps: [
      "Seguí con la vista el recorrido de la manguera.",
      "Anotá si tiene pendiente continua, panzas o tramos que suben.",
      "Observá dónde descarga el agua y si podría molestar a alguien.",
      "Proponé una mejora si encontrás un problema.",
    ] },
    { type: "list", title: "Resumen esencial", items: ["El agua es humedad del aire condensada en el evaporador.", "Por gravedad: pendiente continua, sin panzas, a un lugar apto.", "Pendiente mínima: la del manual del modelo.", "Sin pendiente posible, bomba de condensado según su fabricante."] },
  ],
  quiz: [
    { id: "q1", question: "¿De dónde proviene el agua que sale por el desagüe en modo frío?", options: ["Del refrigerante", "De la humedad del aire condensada en el evaporador", "De una pérdida del caño de agua", "Del compresor"], correct: 1, explanation: "El aire se enfría por debajo de su punto de rocío al pasar por el evaporador y deja su humedad." },
    { id: "q2", question: "¿Qué es una «panza» en la manguera de desagüe?", options: ["Un tramo donde se acumula agua", "Un tipo de bomba", "Un filtro", "Una conexión eléctrica"], correct: 0, explanation: "Es una curva hacia abajo que retiene agua y puede causar goteos y olores." },
    { id: "q3", question: "¿Cuándo se usa una bomba de condensado?", options: ["Siempre", "Nunca", "Cuando no se puede lograr pendiente descendente", "Solo en invierno"], correct: 2, explanation: "Si el agua no puede salir por gravedad, la bomba la eleva hasta un punto de descarga." },
  ],
};

export const lesson30: Lesson = {
  id: "conexion-electrica",
  title: "Conexión eléctrica",
  summary: "Conexión según el manual del fabricante, con advertencias.",
  minutes: 35, risk: true, review: "pendiente", sources: [manual, aea],
  prerequisites: ["Clase 7: riesgos eléctricos.", "Clase 20: protecciones y puesta a tierra.", "Clase 23: diagramas eléctricos."],
  objectives: ["Identificar la alimentación, el cable de interconexión y la puesta a tierra.", "Comprender por qué se sigue el diagrama del modelo.", "Reconocer protecciones y sección de cables como decisiones del manual y de la reglamentación.", "Saber qué tareas corresponden a un electricista habilitado."],
  sections: [
    { type: "text", title: "Qué se conecta", paragraphs: [
      "Un split necesita una alimentación eléctrica desde el tablero, con su protección, y un cable de interconexión entre unidad interior y exterior que lleva alimentación y señales de comunicación o mando. Según el modelo, la alimentación entra por la unidad interior o por la exterior.",
      "El esquema de conexión, la numeración de bornes, la sección de los cables y la protección recomendada están en el manual y en la etiqueta de cada modelo. No hay un esquema único: dos equipos de igual capacidad pueden conectarse de forma distinta.",
      "La instalación eléctrica del inmueble (circuito, protección, puesta a tierra) debe cumplir la reglamentación vigente, en Argentina la AEA 90364 según su adopción en cada jurisdicción, y ser ejecutada o verificada por un electricista habilitado.",
    ] },
    { type: "parts", title: "Elementos de la conexión", parts: [
      { name: "Circuito y protección", description: "Termomagnético dimensionado según el consumo del equipo, la sección del cable y la reglamentación; protección diferencial según corresponda. El valor no se elige a ojo." },
      { name: "Cable de alimentación", description: "Sección y tipo indicados por el fabricante y la reglamentación, de acuerdo con la corriente y la longitud." },
      { name: "Cable de interconexión", description: "Une los bornes numerados de ambas unidades respetando exactamente la correspondencia del diagrama. Un error puede impedir la comunicación o dañar la placa." },
      { name: "Conductor de protección (PE)", description: "Verde-amarillo, conectado al borne de tierra de cada unidad. Nunca se reemplaza por el neutro." },
      { name: "Prensacables y terminales", description: "Sujetan el cable para que no tire de los bornes y aseguran un buen contacto. Una conexión floja calienta y puede provocar fallas." },
    ] },
    { type: "supervised", title: "Qué entender y qué se hace solo con supervisión", theory: [
      "Leer el diagrama de conexión del manual e identificar L, N, PE y bornes de comunicación.",
      "Explicar por qué el circuito debe tener su protección y puesta a tierra.",
      "Reconocer que la tensión y frecuencia del equipo deben coincidir con la de la red.",
    ], requiresSupervision: [
      "Cualquier conexión a bornes, al tablero o a la red: solo con el circuito cortado, bloqueado y verificado sin tensión, por personal capacitado.",
      "La instalación del circuito, la protección y la puesta a tierra: electricista habilitado.",
      "Energizar el equipo por primera vez: se hace en la puesta en marcha (módulo 6), después de los controles previos.",
    ] },
    { type: "warning", title: "Advertencias", items: [
      "Riesgo de electrocución: nunca trabajar con tensión.",
      "Los capacitores pueden conservar carga después de desconectar el equipo (clase 21).",
      "No usar enchufes ni prolongadores improvisados si el manual indica conexión fija.",
      "No energizar antes de completar la instalación mecánica, la prueba de estanqueidad y el vacío (módulo 6).",
    ] },
    { type: "activity", title: "Actividad: lectura del diagrama de conexión", intro: "Usá el manual de instalación que descargaste en la clase 27.", steps: [
      "Ubicá el diagrama de conexión entre unidades.",
      "Anotá si la alimentación entra por la unidad interior o por la exterior.",
      "Listá los bornes y qué une cada uno.",
      "Buscá qué protección y qué sección de cable recomienda el fabricante, y anotá que la decisión final se ajusta a la reglamentación con un electricista habilitado.",
    ] },
    { type: "list", title: "Resumen esencial", items: ["Alimentación con protección, interconexión y puesta a tierra.", "El diagrama, los bornes, cables y protección se toman del manual del modelo.", "La instalación eléctrica del inmueble la ejecuta o verifica un electricista habilitado.", "Nunca conectar con tensión; se energiza recién en la puesta en marcha."] },
  ],
  quiz: [
    { id: "q1", question: "¿Dónde se encuentra el esquema de conexión correcto de un split?", options: ["Es igual para todas las marcas", "En el manual y la etiqueta del modelo", "Se deduce por los colores", "En cualquier video"], correct: 1, explanation: "Cada modelo tiene su propio diagrama y numeración de bornes." },
    { id: "q2", question: "¿Qué ocurre si se invierten bornes del cable de interconexión?", options: ["Nada", "Enfría más", "Puede fallar la comunicación o dañarse la placa", "Se ahorra energía"], correct: 2, explanation: "La correspondencia de bornes debe respetarse exactamente." },
    { id: "q3", question: "¿Puede usarse el neutro como puesta a tierra?", options: ["Sí, siempre", "Sí, si el cable es grueso", "Solo en equipos chicos", "No, nunca"], correct: 3, explanation: "El conductor de protección (PE) es independiente y no se reemplaza por el neutro." },
    { id: "q4", question: "¿Cuándo se energiza el equipo por primera vez?", options: ["Apenas se cuelga la unidad", "En la puesta en marcha, después de estanqueidad y vacío", "Antes de conectar las cañerías", "Durante el relevamiento"], correct: 1, explanation: "Se energiza tras completar la instalación y los controles previos del módulo 6." },
  ],
};
