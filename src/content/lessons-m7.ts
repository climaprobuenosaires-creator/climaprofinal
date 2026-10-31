import type { Lesson } from "./types";

// Contenido didáctico pendiente de revisión docente. Sin parámetros universales ni prácticas autónomas de riesgo.

export const lesson37: Lesson = {
  "id": "mantenimiento-preventivo",
  "title": "Mantenimiento preventivo",
  "summary": "Diseñar mantenimiento según estado, uso, ambiente y fabricante.",
  "minutes": 35,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 36: seguridad, herramientas y fundamentos del split.",
    "Manual del modelo y formación práctica supervisada para cualquier intervención."
  ],
  "sources": [
    {
      "title": "Manual de instalación, servicio y mantenimiento del fabricante del modelo",
      "verified": false,
      "note": "Pendiente de seleccionar y verificar el documento concreto. Parámetros, procedimientos y límites se toman de ese manual; esta clase no define valores universales."
    },
    {
      "title": "Ficha de datos de seguridad del refrigerante y documentación de los instrumentos o productos utilizados",
      "verified": false,
      "note": "Pendiente de verificar con los productos del caso. Confirmar compatibilidad, riesgos y requisitos locales con el instructor antes de practicar."
    }
  ],
  "objectives": [
    "Diseñar mantenimiento según estado, uso, ambiente y fabricante.",
    "Diferenciar prevención de reparación de una falla.",
    "Priorizar tareas seguras y documentar su alcance."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "El mantenimiento preventivo busca conservar seguridad, rendimiento y vida útil antes de que aparezca una avería. No es solo lavar un equipo ni agregar refrigerante periódicamente. Incluye inspección, limpieza autorizada, controles funcionales y registro de cambios respecto de visitas anteriores.",
        "La frecuencia se define con el fabricante, el uso y el ambiente. Polvo, grasa, salinidad, mascotas y ocupación intensa pueden exigir una atención distinta de la de un dormitorio de uso ocasional. No se prescribe el mismo calendario a todos los clientes. El plan se ajusta con evidencia del estado encontrado.",
        "Antes de intervenir se identifica el modelo y se consulta su mantenimiento permitido. Se acuerda acceso, protección del ambiente y corte seguro. El usuario puede encargarse de acciones expresamente autorizadas, como ciertos filtros; desmontaje, electricidad, refrigerante y altura pertenecen a personal formado.",
        "La inspección inicial registra suciedad, daños, drenaje, ruido e historial de quejas. Limpiar antes de registrar puede borrar indicios importantes. Se distingue una tarea preventiva de una corrección: si hay cable deteriorado o agua en partes eléctricas, no se trata como una simple limpieza y se detiene hasta resolver el riesgo.",
        "El mantenimiento termina con rearmado correcto, secado requerido y verificación de funcionamiento aplicable. Se comparan condiciones semejantes para detectar tendencias, sin presentar cambios de lectura como mejoras si el ensayo fue distinto. El cliente recibe tareas realizadas, pendientes y recomendaciones con su motivo."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Planificar",
          "description": "Modelo, historial, ambiente y manual definen alcance y frecuencia."
        },
        {
          "name": "Inspeccionar",
          "description": "Documentar estado antes de limpiar o ajustar; separar riesgo de suciedad normal."
        },
        {
          "name": "Mantener",
          "description": "Aplicar solo tareas autorizadas con protección y personal competente."
        },
        {
          "name": "Cerrar",
          "description": "Rearmar, verificar, registrar y ajustar la próxima visita según evidencia."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Un split de oficina acumula polvo rápidamente y otro de habitación se usa solo algunas noches. El plan no copia la misma frecuencia: combina recomendaciones del fabricante con inspecciones e historial.",
        "En la oficina se encuentra aislación eléctrica dañada. Se informa como corrección pendiente y se coordina revisión profesional; no se da por resuelta con limpieza."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Compará ambiente, horas de uso e historial de los dos casos.",
        "Armá un plan con tareas del usuario y tareas del técnico, sin frecuencia inventada.",
        "Indicá cómo decidirías el próximo control con manual y evidencia.",
        "Redactá un informe que diferencie prevención, corrección y pendiente."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Recargar refrigerante como tarea periódica sin diagnóstico.",
        "Fijar una frecuencia idéntica para todo equipo.",
        "Ocultar daños bajo un informe de limpieza."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Mantener historial por modelo y ubicación.",
        "Acordar alcance y acceso antes de la visita.",
        "Registrar antes y después y explicar límites de lo realizado."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Diseñar mantenimiento según estado, uso, ambiente y fabricante.",
        "Diferenciar prevención de reparación de una falla."
      ],
      "requiresSupervision": [
        "Desmontaje, revisión eléctrica y limpieza técnica con capacitación y supervisión.",
        "Ensayos energizados y trabajo en altura corresponden a personal formado."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Aislar y verificar ausencia de tensión antes de desmontar; respetar riesgos de carga residual.",
        "No acceder a unidades altas sin condiciones de trabajo seguras.",
        "No manipular refrigerante ni productos sin conocer riesgos y compatibilidad."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "¿Qué define la frecuencia?",
      "options": [
        "Un calendario universal",
        "Fabricante, uso, ambiente e historial",
        "Solo el precio",
        "El color del filtro"
      ],
      "correct": 1,
      "explanation": "La acumulación de suciedad y las necesidades dependen del servicio real y del modelo."
    },
    {
      "id": "q2",
      "question": "¿La carga de refrigerante es mantenimiento periódico obligatorio?",
      "options": [
        "Sí",
        "Solo si el cliente lo pide",
        "No; requiere diagnóstico y procedimiento justificado",
        "Cada limpieza"
      ],
      "correct": 2,
      "explanation": "Un circuito no debería perder carga; agregar gas sin causa oculta averías y pérdidas."
    },
    {
      "id": "q3",
      "question": "Un daño eléctrico encontrado debe:",
      "options": [
        "Separarse como corrección y riesgo a resolver",
        "Lavarse",
        "Ignorarse si enfría",
        "Taparse"
      ],
      "correct": 0,
      "explanation": "La limpieza no repara una condición eléctrica peligrosa; se informa y deriva."
    }
  ]
};

export const lesson38: Lesson = {
  "id": "limpieza-interior",
  "title": "Limpieza de filtros y unidad interior",
  "summary": "Diferenciar limpieza autorizada al usuario y limpieza técnica interna.",
  "minutes": 40,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 37: seguridad, herramientas y fundamentos del split.",
    "Manual del modelo y formación práctica supervisada para cualquier intervención."
  ],
  "sources": [
    {
      "title": "Manual de instalación, servicio y mantenimiento del fabricante del modelo",
      "verified": false,
      "note": "Pendiente de seleccionar y verificar el documento concreto. Parámetros, procedimientos y límites se toman de ese manual; esta clase no define valores universales."
    },
    {
      "title": "Ficha de datos de seguridad del refrigerante y documentación de los instrumentos o productos utilizados",
      "verified": false,
      "note": "Pendiente de verificar con los productos del caso. Confirmar compatibilidad, riesgos y requisitos locales con el instructor antes de practicar."
    }
  ],
  "objectives": [
    "Diferenciar limpieza autorizada al usuario y limpieza técnica interna.",
    "Relacionar suciedad, caudal, intercambio y calidad del aire.",
    "Planificar limpieza sin mojar electrónica ni deformar componentes."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "El filtro retiene partículas y protege el intercambio de la unidad interior. Cuando se obstruye aumenta la resistencia al paso de aire; el ventilador puede entregar menos caudal y el equipo pierde capacidad útil. Una serpentina o turbina sucia también altera circulación, transferencia térmica, ruido y distribución.",
        "No todos los filtros son lavables. Se identifica cada elemento en el manual: filtro de malla, medio especial, accesorio o pieza reemplazable. El fabricante define limpieza, secado y reposición. Lavar un medio no lavable puede dañarlo y eliminar su función; instalar filtros todavía húmedos puede provocar problemas.",
        "La tarea accesible al usuario se limita a lo autorizado y seguro con el equipo desconectado. La limpieza interna de turbina, serpentina y bandeja requiere evaluar desmontaje, protección de electrónica, recolección de agua y químicos, estado de aletas y acceso. No se aplica un chorro indiscriminado dentro de la unidad.",
        "Productos, concentración, contacto y enjuague, si corresponde, se obtienen de documentación del producto y del fabricante del equipo. No se mezclan químicos ni se usa un producto doméstico suponiendo compatibilidad con metales, plásticos o recubrimientos. La limpieza no permite prometer esterilización o eliminación de riesgos sanitarios no verificada.",
        "Antes de rearmar se verifica drenaje, ausencia de residuos y agua donde no corresponde, ubicación de piezas y secado según instrucciones. La prueba final evalúa aire, ruido y evacuación del condensado. Una mejora de caudal no resuelve automáticamente una falla frigorífica o un drenaje mal diseñado."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Filtro",
          "description": "Identificar tipo: lavable según manual o reemplazable; no tratarlos de forma indistinta."
        },
        {
          "name": "Serpentina",
          "description": "Aletas y superficie necesitan cuidado para preservar intercambio; método compatible."
        },
        {
          "name": "Turbina y bandeja",
          "description": "Suciedad y biofilm pueden afectar aire y drenaje; acceso y limpieza técnicos."
        },
        {
          "name": "Electrónica y cierre",
          "description": "Proteger componentes, recoger residuos, secar y rearmar antes de energizar."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "El cliente lavó todos los filtros porque se parecían. Uno es un medio especial que el manual indica reemplazar. Se identifica y gestiona la reposición; no se reinstala por apariencia.",
        "Una unidad tiene filtros limpios pero turbina sucia y poco aire. La inspección técnica considera el recorrido completo; repetir solo lavado de filtros no aborda la causa."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Clasificá los filtros de un manual disponible y anotá qué limpieza permite.",
        "Dibujá la ruta filtro → serpentina → turbina → impulsión.",
        "Marcá electrónica, bandeja y puntos de recolección que deben protegerse.",
        "Escribí una lista de rearmado y de prueba final sin desmontar un equipo real."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Lavar cualquier filtro sin identificarlo.",
        "Mojar placas o motores con lavado indiscriminado.",
        "Usar químicos incompatibles o mezclar productos.",
        "Energizar sin secado y rearmado comprobados."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Mostrar al cliente qué filtro puede mantener y cuál no.",
        "Inspeccionar antes de limpiar para conservar indicios de falla.",
        "Registrar producto y método si se realiza limpieza técnica."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Diferenciar limpieza autorizada al usuario y limpieza técnica interna.",
        "Relacionar suciedad, caudal, intercambio y calidad del aire."
      ],
      "requiresSupervision": [
        "Desmontar turbina, bandeja o carcasas más allá de lo autorizado al usuario.",
        "Aplicar limpieza húmeda interna y verificar equipo energizado con personal capacitado."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "No abrir una unidad conectada; los capacitores pueden conservar energía.",
        "Aletas cortantes y productos requieren protección adecuada.",
        "No trabajar sobre escaleras improvisadas ni pulverizar hacia partes eléctricas."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Antes de lavar un filtro, verificás:",
      "options": [
        "Su tipo y las instrucciones del fabricante",
        "Solo su color",
        "Que sea caro",
        "La presión del refrigerante"
      ],
      "correct": 0,
      "explanation": "No todos los medios son lavables; su tratamiento depende del manual."
    },
    {
      "id": "q2",
      "question": "Filtros limpios pero poco caudal indican que:",
      "options": [
        "Siempre falta gas",
        "Hay que inspeccionar también el resto del recorrido de aire",
        "La limpieza terminó",
        "Hay que aumentar presión"
      ],
      "correct": 1,
      "explanation": "Serpentina, turbina y obstáculos también influyen en el caudal; no se diagnostica carga por ese síntoma."
    },
    {
      "id": "q3",
      "question": "Antes de energizar después de limpiar corresponde:",
      "options": [
        "Probar aunque haya agua",
        "Retirar protecciones",
        "Comprobar secado, drenaje y rearmado según instrucciones",
        "Mezclar químicos"
      ],
      "correct": 2,
      "explanation": "La limpieza solo se cierra al dejar la unidad segura y correctamente rearmada."
    }
  ]
};

export const lesson39: Lesson = {
  "id": "limpieza-exterior",
  "title": "Limpieza de la unidad exterior",
  "summary": "Relacionar limpieza exterior con rechazo de calor y circulación de aire.",
  "minutes": 40,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 38: seguridad, herramientas y fundamentos del split.",
    "Manual del modelo y formación práctica supervisada para cualquier intervención."
  ],
  "sources": [
    {
      "title": "Manual de instalación, servicio y mantenimiento del fabricante del modelo",
      "verified": false,
      "note": "Pendiente de seleccionar y verificar el documento concreto. Parámetros, procedimientos y límites se toman de ese manual; esta clase no define valores universales."
    },
    {
      "title": "Ficha de datos de seguridad del refrigerante y documentación de los instrumentos o productos utilizados",
      "verified": false,
      "note": "Pendiente de verificar con los productos del caso. Confirmar compatibilidad, riesgos y requisitos locales con el instructor antes de practicar."
    }
  ],
  "objectives": [
    "Relacionar limpieza exterior con rechazo de calor y circulación de aire.",
    "Elegir un método que proteja aletas, electrónica y entorno.",
    "Reconocer limitaciones de acceso y daño mecánico."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "En refrigeración, la unidad exterior debe liberar al aire el calor extraído más la energía aportada al ciclo. La suciedad sobre el intercambiador y los obstáculos de ventilación reducen esa capacidad. En calefacción cambia su papel térmico; por eso se identifica modo y equipo antes de interpretar su comportamiento.",
        "La inspección observa entrada y salida de aire, hojas, polvo, grasa, corrosión, aletas deformadas y soportes. Un cerramiento que recircula aire caliente no se resuelve solo lavando la serpentina. Se documenta y plantea una corrección de ubicación o ventilación conforme al manual.",
        "Con el equipo aislado y ausencia de tensión verificada, el técnico determina acceso, protección de electrónica y motor, método de limpieza y manejo de residuos. El sentido y la intensidad de limpieza se toman del fabricante. Un chorro agresivo puede doblar aletas, empujar suciedad o ingresar agua a componentes no protegidos.",
        "El uso de químicos exige confirmar compatibilidad con aluminio, cobre, recubrimientos y plásticos, además de dosis y enjuague prescritos. No se usa un limpiador ácido o alcalino por costumbre. La corrosión o aletas dañadas requieren evaluación aparte; no se ocultan como suciedad.",
        "Al cierre se revisan residuos, estado de protecciones, conexiones no perturbadas, estabilidad del soporte y rearmado. Se permite secado conforme al procedimiento y se verifica operación bajo condiciones válidas. No se introduce una mano a través de la rejilla para comprobar ventilación ni se opera con guardas retiradas."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Aire disponible",
          "description": "Comprobar obstáculos y recirculación además de suciedad en el intercambiador."
        },
        {
          "name": "Superficie",
          "description": "Identificar suciedad, recubrimientos, corrosión y aletas deformadas antes de elegir método."
        },
        {
          "name": "Protección",
          "description": "Electricidad aislada, electrónica y motor protegidos, agua y residuos controlados."
        },
        {
          "name": "Verificación",
          "description": "Unidad rearmada, soporte seguro y ensayo final documentado en condiciones comparables."
        }
      ]
    },
    {
      "type": "diagram",
      "title": "Intercambio de calor en ambas unidades",
      "kind": "heat-exchangers"
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Una exterior en un balcón cerrado acumula polvo. Tras limpiarla, sigue tomando su propio aire caliente: el informe señala ventilación no conforme, no promete resolver con otra limpieza.",
        "En ambiente costero hay corrosión visible. Se documenta el daño y se evalúa integridad según fabricante; aplicar químicos fuertes podría empeorarlo."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "En una fotografía propia o esquema del manual, marcá entradas, salida y posibles obstáculos.",
        "Separá problemas de suciedad, ubicación y corrosión del caso.",
        "Prepará una lista de protección y recolección antes de limpiar.",
        "Escribí los controles de cierre y condiciones de una comparación válida."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Usar alta presión indiscriminada sobre aletas.",
        "Suponer que lavar corrige recirculación.",
        "Mojar electrónica o motor sin procedimiento de protección."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Respetar recubrimientos y documentación de productos.",
        "Registrar daño preexistente y límites del servicio.",
        "Coordinar acceso seguro y protección de terceros."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Relacionar limpieza exterior con rechazo de calor y circulación de aire.",
        "Elegir un método que proteja aletas, electrónica y entorno."
      ],
      "requiresSupervision": [
        "Limpieza técnica, desmontaje de guardas y evaluación interna con supervisión.",
        "Ensayo energizado y acceso en altura por personal competente."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Trabajo en fachadas o altura solo con equipo y capacitación.",
        "No acercarse a hélices ni retirar guardas con equipo funcionando.",
        "Evitar escurrimientos sobre personas, instalaciones eléctricas o propiedad vecina."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "La limpieza no corrige por sí sola:",
      "options": [
        "El polvo superficial",
        "La recirculación por un cerramiento inadecuado",
        "Hojas sueltas",
        "Suciedad removible"
      ],
      "correct": 1,
      "explanation": "La ubicación y ventilación son condiciones de instalación; requieren evaluación separada."
    },
    {
      "id": "q2",
      "question": "Un chorro agresivo puede:",
      "options": [
        "Mejorar cualquier equipo",
        "Eliminar toda falla",
        "Deformar aletas e ingresar agua a partes sensibles",
        "Reemplazar el manual"
      ],
      "correct": 2,
      "explanation": "El método debe preservar intercambio y componentes; más fuerza no significa mejor limpieza."
    },
    {
      "id": "q3",
      "question": "Los químicos se eligen por:",
      "options": [
        "Compatibilidad y documentación de producto y equipo",
        "Costumbre únicamente",
        "Color",
        "Precio solamente"
      ],
      "correct": 0,
      "explanation": "Metales, recubrimientos y plásticos pueden dañarse con productos incompatibles."
    }
  ]
};

export const lesson40: Lesson = {
  "id": "revision-electrica",
  "title": "Revisión del drenaje",
  "summary": "Distinguir condensado normal de una falla de evacuación o aislación.",
  "minutes": 35,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 39: seguridad, herramientas y fundamentos del split.",
    "Manual del modelo y formación práctica supervisada para cualquier intervención."
  ],
  "sources": [
    {
      "title": "Manual de instalación, servicio y mantenimiento del fabricante del modelo",
      "verified": false,
      "note": "Pendiente de seleccionar y verificar el documento concreto. Parámetros, procedimientos y límites se toman de ese manual; esta clase no define valores universales."
    },
    {
      "title": "Ficha de datos de seguridad del refrigerante y documentación de los instrumentos o productos utilizados",
      "verified": false,
      "note": "Pendiente de verificar con los productos del caso. Confirmar compatibilidad, riesgos y requisitos locales con el instructor antes de practicar."
    }
  ],
  "objectives": [
    "Distinguir condensado normal de una falla de evacuación o aislación.",
    "Examinar bandeja, recorrido, descarga y bomba con un método ordenado.",
    "Diseñar una prueba de drenaje segura conforme al manual."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "La revisión del drenaje busca que el agua condensada llegue a una descarga adecuada sin pérdidas ni retorno. En frío suele originarse en la interior; en calefacción y descongelamiento puede producirse en la exterior. Antes de diagnosticar se pregunta dónde, cuándo y en qué modo aparece el agua.",
        "En sistemas por gravedad se verifica continuidad de pendiente según fabricante, ausencia de aplastamientos, tramos ascendentes o acumulación y estado de uniones. El extremo sumergido o una descarga obstruida pueden impedir el flujo. La conexión a un sistema sanitario se evalúa según instrucciones y requisitos locales; no se improvisan sifones universales.",
        "La bandeja debe estar íntegra y conectada al recorrido correcto. Suciedad, biofilm o piezas mal asentadas pueden causar desborde. Otra causa de agua visible es condensación exterior sobre cañerías o mangueras sin aislación suficiente, distinta de un drenaje tapado. Se identifica el origen antes de corregir.",
        "Si hay bomba, se revisan depósito, detección de nivel, recorrido de impulsión, descarga y función de alarma conforme a su manual. No se puentea una alarma para evitar paradas. El fallo puede ser hidráulico, mecánico o eléctrico y requiere personal capacitado para acceder a partes internas.",
        "El ensayo de drenaje se planifica con método, volumen y punto indicados por el fabricante, protegiendo electricidad y entorno. No se vuelca agua a ciegas dentro de la unidad ni se sopla presión sin control. Se comprueba ausencia de fuga, salida y funcionamiento de bomba si existe, y se verifica después en operación.",
        "Un informe útil describe causa y recorrido, no solo “se destapó”. Si la ubicación impide evacuación por gravedad, la limpieza no corrige el diseño: se plantea solución adecuada y se deja constancia del pendiente."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Origen",
          "description": "Modo y punto de aparición permiten distinguir condensado, escurrimiento exterior y fuga."
        },
        {
          "name": "Gravedad",
          "description": "Bandeja → conexión → recorrido descendente → descarga apta; revisar todos los tramos."
        },
        {
          "name": "Bomba",
          "description": "Depósito y nivel → bomba → impulsión → descarga, con alarma y montaje según fabricante."
        },
        {
          "name": "Prueba",
          "description": "Ensayo documentado sin mojar componentes y control final de ausencia de pérdidas."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Después de una limpieza, el agua vuelve a gotear. La manguera tiene un tramo ascendente oculto; retirar suciedad no resuelve el recorrido. Se informa la corrección de instalación.",
        "En otro equipo el drenaje descarga correctamente, pero gotea un caño con aislación abierta. Se distingue condensación superficial del desborde de bandeja antes de intervenir."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Dibujá ambos recorridos del ejemplo y marcá el origen de cada gota.",
        "Prepará una lista de revisión desde bandeja hasta descarga.",
        "Indicá dónde consultar prueba y alarma de una bomba sin accionarla.",
        "Redactá qué solución requiere limpieza y cuál requiere corregir recorrido o aislación."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Atribuir toda agua a falta de refrigerante.",
        "Destapar sin revisar pendiente ni descarga.",
        "Puenteo de alarmas de bomba.",
        "Verter agua sin protección o método."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Fotografiar recorrido y punto de falla con autorización.",
        "Verificar después de rearmar, no solo durante limpieza.",
        "Separar obstrucción de defecto de instalación."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Distinguir condensado normal de una falla de evacuación o aislación.",
        "Examinar bandeja, recorrido, descarga y bomba con un método ordenado."
      ],
      "requiresSupervision": [
        "Desmontaje de bandeja, bomba y conexiones eléctricas con capacitación.",
        "Ensayo húmedo interno y verificación de alarmas bajo supervisión."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Agua próxima a electricidad exige detener y aislar de manera segura.",
        "No mezclar productos de destape ni introducirlos sin compatibilidad.",
        "Bombas y accesos internos requieren personal capacitado, sin tensión y con riesgos residuales atendidos."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Una manguera limpia con tramo ascendente puede:",
      "options": [
        "Evacuar siempre bien",
        "Seguir causando problemas de drenaje",
        "No necesitar revisión",
        "Mejorar la gravedad"
      ],
      "correct": 1,
      "explanation": "La limpieza no corrige la geometría; el recorrido debe cumplir el diseño del fabricante."
    },
    {
      "id": "q2",
      "question": "Gotea una cañería y la bandeja no desborda. Primero distinguís:",
      "options": [
        "La marca del control",
        "El precio",
        "Condensación superficial y falla de drenaje",
        "La capacidad comercial"
      ],
      "correct": 2,
      "explanation": "El origen del agua define la investigación; no toda gota viene de la bandeja."
    },
    {
      "id": "q3",
      "question": "La alarma de una bomba debe:",
      "options": [
        "Conservarse y verificarse según manual",
        "Puentease",
        "Retirarse si molesta",
        "Ignorarse"
      ],
      "correct": 0,
      "explanation": "La alarma puede prevenir daños por desborde; anularla oculta el riesgo."
    }
  ]
};

export const lesson41: Lesson = {
  "id": "deteccion-de-fugas",
  "title": "Inspección eléctrica y mecánica",
  "summary": "Organizar inspección sin tensión y reconocer mediciones reservadas a profesionales.",
  "minutes": 40,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 40: seguridad, herramientas y fundamentos del split.",
    "Manual del modelo y formación práctica supervisada para cualquier intervención."
  ],
  "sources": [
    {
      "title": "Manual de instalación, servicio y mantenimiento del fabricante del modelo",
      "verified": false,
      "note": "Pendiente de seleccionar y verificar el documento concreto. Parámetros, procedimientos y límites se toman de ese manual; esta clase no define valores universales."
    },
    {
      "title": "Ficha de datos de seguridad del refrigerante y documentación de los instrumentos o productos utilizados",
      "verified": false,
      "note": "Pendiente de verificar con los productos del caso. Confirmar compatibilidad, riesgos y requisitos locales con el instructor antes de practicar."
    }
  ],
  "objectives": [
    "Organizar inspección sin tensión y reconocer mediciones reservadas a profesionales.",
    "Identificar deterioro de conexiones, soportes y componentes sin suponer su causa.",
    "Decidir cuándo detener el servicio y derivar."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "La inspección eléctrica y mecánica del mantenimiento busca cambios de estado: aislación dañada, marcas térmicas, humedad, corrosión, fijaciones flojas, roce o vibración. Encontrar un indicio no significa haber demostrado la causa. El diagnóstico requiere relacionarlo con historial, circuito y procedimiento.",
        "Antes de abrir, personal capacitado identifica alimentaciones, desconecta, bloquea y verifica ausencia de tensión con método adecuado. En inverter y componentes con capacitores puede haber energía almacenada; se respeta el procedimiento del fabricante y se comprueba la condición segura. El tiempo transcurrido por sí solo no demuestra descarga.",
        "La revisión visual considera cables, sujeciones, terminales, conductor de protección y correspondencia con el diagrama. No se aprietan todos los bornes indiscriminadamente: herramienta, torque y eventual reemplazo se determinan por fabricante. Una conexión quemada puede requerir reemplazo y análisis, no solo reapriete.",
        "En la parte mecánica se revisan soportes, anclajes, guardas, ventiladores, tuberías que rocen, aislación y signos de desgaste o corrosión. No se gira ni fuerza un componente sin procedimiento. El montaje debe soportar cargas y no transmitir vibración indebida; una fijación deteriorada es un problema de seguridad.",
        "Las mediciones de continuidad, aislamiento o componentes se planifican según circuito y equipo. Una prueba aplicada sin aislar electrónica puede dañarla; los ensayos y límites corresponden al manual y al profesional. Medir con tensión presente requiere justificación, método y capacitación específica, no es una actividad de principiante.",
        "El informe diferencia observación, hipótesis y comprobación. Si se detecta riesgo, se mantiene fuera de servicio y se coordina la corrección competente. Rearmar y verificar después es parte del trabajo; nunca se devuelve con guardas o puesta a tierra omitidas."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Aislar",
          "description": "Identificar fuentes, bloquear y verificar ausencia de tensión y energía residual según procedimiento."
        },
        {
          "name": "Electricidad",
          "description": "Cables, PE, sujeciones y señales de daño; aplicar ensayos solo cuando el manual lo permite."
        },
        {
          "name": "Mecánica",
          "description": "Soportes, hélices, guardas, roce, corrosión y vibración sin intervenir piezas en movimiento."
        },
        {
          "name": "Decidir",
          "description": "Riesgo → fuera de servicio; indicio → diagnosticar; conformidad → rearmar y documentar."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Un borne presenta decoloración y aislación deteriorada. El técnico no solo lo aprieta: registra el daño, analiza terminal y conductor, y deriva la corrección adecuada con el equipo seguro.",
        "Una ménsula corroída parece sostener todavía el equipo. No se acepta por apariencia de estabilidad: se evalúa integridad y acceso con personal competente antes de continuar."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Separá observación, hipótesis y comprobación en ambos ejemplos.",
        "En un diagrama del manual, identificá alimentación, PE y componentes con energía residual.",
        "Armá criterios de detención y responsables de cada corrección.",
        "Describí el cierre seguro sin proponer ensayos internos por tu cuenta."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Apretar conexiones quemadas sin evaluar reemplazo y causa.",
        "Suponer que desconectar elimina de inmediato toda energía.",
        "Aplicar un ensayo de aislamiento a electrónica sin procedimiento.",
        "Devolver el equipo sin guardas o PE."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Documentar daño con ubicación e identificación del circuito.",
        "Seguir torques y métodos del fabricante, sin valores universales.",
        "Revisar soporte y entorno con el mismo rigor que el cableado."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Organizar inspección sin tensión y reconocer mediciones reservadas a profesionales.",
        "Identificar deterioro de conexiones, soportes y componentes sin suponer su causa."
      ],
      "requiresSupervision": [
        "Aislamiento eléctrico, ensayos y correcciones por personal formado o habilitado según jurisdicción.",
        "Evaluación y reemplazo de soportes en altura con capacitación específica."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Riesgo de descarga y energía residual: intervención exclusiva de personal capacitado.",
        "No medir resistencia o continuidad sobre un circuito energizado.",
        "No tocar ventiladores en marcha ni acceder a soportes inseguros o en altura sin medios adecuados."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Una conexión quemada se resuelve siempre reapretando:",
      "options": [
        "Sí",
        "No, hay que evaluar daño y causa",
        "Si el equipo enfría",
        "Solo con fuerza"
      ],
      "correct": 1,
      "explanation": "Puede requerir reemplazo de terminal o conductor y diagnóstico; el ajuste solo no demuestra reparación."
    },
    {
      "id": "q2",
      "question": "Después de desconectar un inverter:",
      "options": [
        "No queda energía nunca",
        "Se puede tocar todo",
        "Hay que atender energía residual según procedimiento",
        "Se puentean capacitores"
      ],
      "correct": 2,
      "explanation": "Los circuitos pueden conservar carga; la condición segura debe verificarse."
    },
    {
      "id": "q3",
      "question": "Las mediciones de resistencia se realizan:",
      "options": [
        "Sin tensión y siguiendo el procedimiento del circuito",
        "Con tensión para mayor precisión",
        "Sobre cualquier placa indistintamente",
        "Sin identificar componentes"
      ],
      "correct": 0,
      "explanation": "Medir resistencia en un circuito energizado es peligroso y puede dañar el instrumento o el equipo."
    }
  ]
};

export const lesson42: Lesson = {
  "id": "informe-de-servicio",
  "title": "Planes de mantenimiento y atención al cliente",
  "summary": "Elaborar un plan y un informe claros con alcance y pendientes.",
  "minutes": 35,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 41: seguridad, herramientas y fundamentos del split.",
    "Manual del modelo y formación práctica supervisada para cualquier intervención."
  ],
  "sources": [
    {
      "title": "Manual de instalación, servicio y mantenimiento del fabricante del modelo",
      "verified": false,
      "note": "Pendiente de seleccionar y verificar el documento concreto. Parámetros, procedimientos y límites se toman de ese manual; esta clase no define valores universales."
    },
    {
      "title": "Ficha de datos de seguridad del refrigerante y documentación de los instrumentos o productos utilizados",
      "verified": false,
      "note": "Pendiente de verificar con los productos del caso. Confirmar compatibilidad, riesgos y requisitos locales con el instructor antes de practicar."
    }
  ],
  "objectives": [
    "Elaborar un plan y un informe claros con alcance y pendientes.",
    "Explicar cuidados permitidos al usuario sin transferir tareas peligrosas.",
    "Usar historial para mejorar decisiones sin prometer resultados no medidos."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "Un plan de mantenimiento convierte observaciones técnicas en tareas, responsables y oportunidades de control. Identifica equipo, ubicación, uso y condiciones, y vincula cada tarea con el manual o un problema documentado. La frecuencia no se vende como universal: se acuerda según fabricante, ambiente e historial.",
        "El informe registra motivo de visita, síntomas del cliente, estado inicial, tareas realizadas, materiales o productos, verificaciones y resultado. “Limpieza general” sin alcance no permite saber si se atendieron filtros, turbina, bandeja o exterior. Tampoco demuestra que se realizaron pruebas eléctricas o frigoríficas.",
        "Conviene separar conforme, corrección realizada y pendiente con responsable. Una recomendación no ejecutada no debe figurar como reparación. Si hay una condición insegura, se explica la limitación de uso y la derivación; no se promete que el equipo es seguro por haberlo limpiado.",
        "La atención al cliente empieza escuchando: cuándo ocurre el síntoma, modo, uso, cambios recientes y expectativas. Se explican hipótesis como hipótesis, presupuesto y autorización antes de trabajo adicional. Los datos y fotografías se recogen con autorización y se comparte solo lo necesario para el servicio.",
        "Los cuidados del usuario se limitan a los permitidos por el manual: modo, consigna, limpieza autorizada de filtros, mantener libres entradas y salidas y reconocer avisos. Ante olor a quemado, agua hacia electricidad o ruido severo se indica detener de manera segura y solicitar asistencia, no abrir ni investigar por su cuenta.",
        "Al cierre se entrega documentación y se establece cómo revisar pendientes y próxima visita. No se prometen porcentajes de ahorro, esterilización ni vida útil sin evidencia válida. Un buen servicio comunica lo verificado y también lo que todavía se desconoce."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Ficha del equipo",
          "description": "Modelo, ubicación, condiciones de uso e historial autorizado."
        },
        {
          "name": "Plan",
          "description": "Tarea, criterio, responsable y frecuencia basada en documentación y evidencia."
        },
        {
          "name": "Informe",
          "description": "Estado inicial → trabajo → verificación → resultado → pendientes con responsable."
        },
        {
          "name": "Cliente",
          "description": "Explicación comprensible, autorización de extras y cuidados seguros del usuario."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Un cliente solicita “limpieza completa”. El técnico detalla alcance antes de aceptar y distingue tareas incluidas de una reparación eléctrica que requiere presupuesto y habilitación.",
        "El informe final indica filtros tratados, drenaje verificado según procedimiento y revisión eléctrica pendiente. No declara revisión total ni ahorro medido que no se ensayó."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Redactá una ficha y un plan del equipo de los ejemplos sin inventar datos.",
        "Separá alcance incluido, extra a autorizar y pendiente.",
        "Escribí instrucciones al cliente para cuidados y señales de detención.",
        "Revisá que cada afirmación del informe tenga una evidencia o figure como pendiente."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Prometer ahorro numérico sin medición comparable.",
        "Declarar trabajos o pruebas no realizados.",
        "Indicar al cliente que abra tapas para resolver alarmas.",
        "Copiar una frecuencia sin conocer uso."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Usar lenguaje claro y conservar trazabilidad técnica.",
        "Pedir autorización antes de ampliar trabajos o tomar fotografías.",
        "Acordar seguimiento de pendientes con responsable."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Elaborar un plan y un informe claros con alcance y pendientes.",
        "Explicar cuidados permitidos al usuario sin transferir tareas peligrosas."
      ],
      "requiresSupervision": [
        "Las tareas técnicas del plan se ejecutan por personal competente; el alumno puede redactar y analizar informes.",
        "La valoración de seguridad eléctrica y estructural no se reemplaza por una opinión comercial."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "No entregar como seguro un equipo con riesgo pendiente.",
        "El usuario no debe intervenir electricidad, refrigerante ni elementos en altura.",
        "No divulgar datos o fotografías de un cliente sin autorización."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Una revisión no realizada debe informarse como:",
      "options": [
        "Aprobada",
        "Pendiente con responsable",
        "Incluida por defecto",
        "Sin importancia"
      ],
      "correct": 1,
      "explanation": "Un informe distingue claramente qué se verificó y qué falta; no se atribuyen pruebas inexistentes."
    },
    {
      "id": "q2",
      "question": "¿Qué cuidado puede explicarse al usuario?",
      "options": [
        "Abrir bornes",
        "Agregar refrigerante",
        "Solo acciones autorizadas y seguras del manual",
        "Puenteo de alarmas"
      ],
      "correct": 2,
      "explanation": "Los cuidados del usuario no incluyen tareas eléctricas, frigoríficas ni acceso inseguro."
    },
    {
      "id": "q3",
      "question": "El plan se ajusta con:",
      "options": [
        "Manual, uso, ambiente e historial",
        "Un calendario único",
        "Promesas de ahorro",
        "La marca del control únicamente"
      ],
      "correct": 0,
      "explanation": "Las condiciones reales y la documentación definen un plan justificable."
    }
  ]
};
