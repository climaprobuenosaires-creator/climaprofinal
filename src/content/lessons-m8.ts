import type { Lesson } from "./types";

// Contenido didáctico pendiente de revisión docente. Sin parámetros universales ni prácticas autónomas de riesgo.

export const lesson43: Lesson = {
  "id": "metodo-diagnostico",
  "title": "Cómo identificar una falla",
  "summary": "Transformar una queja del usuario en un síntoma verificable.",
  "minutes": 35,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 42: seguridad, herramientas y fundamentos del split.",
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
    "Transformar una queja del usuario en un síntoma verificable.",
    "Diferenciar síntoma, causa probable y causa comprobada.",
    "Elegir el primer control seguro antes de intervenir."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "Identificar una falla significa precisar qué se aparta del comportamiento esperado. “No anda” puede significar que no responde al mando, no impulsa aire, no alcanza consigna, gotea o muestra una alarma. El primer paso es describir el síntoma sin asignarle todavía una causa.",
        "La entrevista recoge cuándo empezó, si es permanente o intermitente, en qué modo ocurre, qué cambió y qué intervenciones previas hubo. Se identifican modelo y manual antes de interpretar códigos o secuencias. Un código de error orienta una investigación del fabricante, no certifica automáticamente que la pieza nombrada esté dañada.",
        "La observación inicial no invasiva revisa ajustes, modo, consigna, obstrucciones visibles y señales de riesgo. Se compara lo que el usuario espera con la función del modo seleccionado. Una pausa de protección, modulación o descongelamiento puede ser normal si coincide con la secuencia y condiciones del modelo.",
        "Se distingue síntoma de causa: poco aire es un síntoma, filtro obstruido una hipótesis, y un control que muestra restricción y recuperación tras limpieza autorizada una evidencia. Aun así se verifica si quedan otros factores; puede haber más de una causa.",
        "Antes de probar se evalúa seguridad. Olor a quemado, cable dañado, agua hacia electricidad, soporte inseguro o pérdida sospechada de refrigerante justifican detener y coordinar intervención competente. No se fuerza el arranque ni se puentea una protección para reproducir una falla.",
        "Cada hipótesis debe llevar una comprobación capaz de confirmarla o descartarla. Se empieza por controles de bajo riesgo y mínima intervención, y se escala según manual y competencia. La conclusión explica evidencia, corrección y prueba final, o deja la incertidumbre documentada."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Queja",
          "description": "Registrar palabras del cliente, momento, modo y cambios recientes."
        },
        {
          "name": "Síntoma",
          "description": "Definir lo observable y las condiciones en que se reproduce."
        },
        {
          "name": "Hipótesis",
          "description": "Proponer causas compatibles, sin confundir código con diagnóstico."
        },
        {
          "name": "Comprobación",
          "description": "Elegir control seguro según manual; evidencia → corrección → verificación."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "El cliente dice que el equipo “no enfría”. Se encuentra en ventilación. La primera acción es revisar configuración y comportamiento permitido, no conectar manómetros.",
        "Después de seleccionar un modo de frío válido, persiste bajo rendimiento. La queja ahora tiene condiciones definidas y se investigan caudal, demanda y demás causas; no se concluye falta de gas solo por persistencia."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Convertí “no anda” en tres síntomas diferentes con condiciones.",
        "Para el ejemplo escribí observación, hipótesis y comprobación.",
        "Clasificá controles no invasivos y pruebas que requieren instructor.",
        "Redactá un criterio de detención y un pendiente sin inventar lecturas."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Cambiar piezas por el nombre de un código.",
        "Asumir que toda falta de frío es falta de gas.",
        "Reproducir una falla con protección anulada."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Guardar condiciones y secuencia de la falla intermitente.",
        "Hacer preguntas abiertas y contrastar con observaciones.",
        "Registrar evidencia antes de modificar ajustes o piezas."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Transformar una queja del usuario en un síntoma verificable.",
        "Diferenciar síntoma, causa probable y causa comprobada."
      ],
      "requiresSupervision": [
        "Mediciones internas, diagnóstico energizado y pruebas frigoríficas por personal formado.",
        "El alumno practica entrevista y razonamiento en documentación, no anulación de protecciones."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "No forzar arranque ante riesgo eléctrico, mecánico o frigorífico.",
        "No abrir tapas, válvulas o conexiones como primera acción del alumno.",
        "Las pruebas internas se realizan con capacitación, herramientas compatibles y supervisión."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Un código de error demuestra siempre una pieza dañada:",
      "options": [
        "Sí",
        "No, orienta comprobaciones del manual",
        "Si se repite",
        "Solo en inverter"
      ],
      "correct": 1,
      "explanation": "El código puede involucrar sensor, conexión, condición o control; se sigue el diagnóstico del fabricante."
    },
    {
      "id": "q2",
      "question": "Antes de medir refrigerante ante “no enfría”, primero:",
      "options": [
        "Se recarga",
        "Se cambia placa",
        "Se define síntoma, modo y condiciones con controles seguros",
        "Se puentea protección"
      ],
      "correct": 2,
      "explanation": "La configuración y observación pueden explicar la queja sin intervención invasiva."
    },
    {
      "id": "q3",
      "question": "Una hipótesis se convierte en conclusión con:",
      "options": [
        "Evidencia de comprobaciones y verificación",
        "Costumbre",
        "Una opinión",
        "La marca"
      ],
      "correct": 0,
      "explanation": "La conclusión debe sustentarse en controles que confirmen o descarten causas."
    }
  ]
};

export const lesson44: Lesson = {
  "id": "no-enciende",
  "title": "Problemas de refrigeración y rendimiento",
  "summary": "Ordenar causas de bajo rendimiento entre aire, demanda, control y circuito frigorífico.",
  "minutes": 45,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 43: seguridad, herramientas y fundamentos del split.",
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
    "Ordenar causas de bajo rendimiento entre aire, demanda, control y circuito frigorífico.",
    "Diferenciar falta de capacidad y falla del equipo.",
    "Interpretar hielo y temperatura sin atribuirlos automáticamente a carga."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "Bajo rendimiento es la diferencia entre la respuesta requerida y la observada bajo condiciones definidas. Puede originarse en demanda mayor que la capacidad, aire insuficiente, recirculación exterior, configuración, sensores o circuito frigorífico. El síntoma no selecciona una causa por sí solo.",
        "Primero se verifica modo, consigna, puertas y ventanas, ocupación, cargas internas y condiciones exteriores. Un equipo correctamente funcionando puede no cubrir un ambiente integrado que antes era menor. Se revisa el relevamiento y el cálculo de carga sin prometer que una recarga resolverá una capacidad insuficiente.",
        "Luego se inspecciona circulación de aire: filtros, serpentinas, turbina, ventiladores y obstáculos. En el exterior, aire que vuelve caliente puede limitar rechazo de calor. Temperaturas de retorno e impulsión deben interpretarse junto con caudal y humedad. Poco aire puede producir sensaciones engañosas de frío y favorecer hielo.",
        "El hielo no demuestra automáticamente falta de refrigerante. Puede relacionarse con caudal reducido, condiciones de operación, sensores, control o defectos frigoríficos. Se detiene según el procedimiento seguro para evaluar y descongelar; no se rompe hielo con herramientas ni se fuerza la operación para “ver qué pasa”.",
        "Si las comprobaciones anteriores no explican el caso, personal capacitado aplica el diagnóstico frigorífico del modelo, con mediciones pertinentes, refrigerante correcto y condiciones estabilizadas. Una fuga, restricción o compresor con problema requieren evidencias distintas. Agregar gas sin distinguirlas puede empeorar la situación.",
        "La solución debe atacar la causa y terminar con prueba comparable: condiciones registradas, circulación restablecida, ausencia de indicios peligrosos y respuesta acorde al manual. Si hay más de una causa, se documenta cada una y los pendientes que limitan la aceptación."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Demanda y uso",
          "description": "Revisar ambiente, infiltración, cargas internas, modo y consigna."
        },
        {
          "name": "Aire",
          "description": "Interior y exterior: caudal, suciedad, obstáculos y recirculación."
        },
        {
          "name": "Control",
          "description": "Sensores, secuencia, modulación y condiciones admitidas según modelo."
        },
        {
          "name": "Frigorífico",
          "description": "Solo después de controles pertinentes: pruebas profesionales para fuga, restricción o compresión."
        }
      ]
    },
    {
      "type": "diagram",
      "title": "Aire e intercambio: ambos lados importan",
      "kind": "heat-exchangers"
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Un local amplió superficie y abre la puerta de forma continua. El equipo puede operar correctamente y aun así no alcanzar demanda: corresponde revisar carga del ambiente y uso.",
        "Un dormitorio presenta hielo y filtros obstruidos. Se restablece circulación con procedimiento autorizado y se verifica; si persiste, se continúa diagnóstico, sin recargar por la sola presencia de hielo."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Clasificá causas de ambos casos en demanda, aire, control y circuito.",
        "Elegí qué observaciones permiten avanzar sin abrir el equipo.",
        "Anotá condiciones necesarias para comparar antes y después.",
        "Escribí cómo explicarías por qué no corresponde vender carga sin diagnóstico."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Concluir falta de gas por hielo o poco frío.",
        "Ignorar cambios del ambiente atendido.",
        "Romper hielo con objetos.",
        "Comparar temperaturas sin revisar caudal."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Resolver restricciones de aire y condiciones de ensayo antes de interpretar circuito.",
        "Usar procedimiento diagnóstico específico, no tablas universales de presión.",
        "Documentar causas múltiples y pendientes de capacidad o ubicación."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Ordenar causas de bajo rendimiento entre aire, demanda, control y circuito frigorífico.",
        "Diferenciar falta de capacidad y falla del equipo."
      ],
      "requiresSupervision": [
        "Mediciones frigoríficas y eléctricas, diagnóstico de compresor y control con supervisión.",
        "El cálculo definitivo de demanda compleja se deriva a profesional competente."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "No operar fuera de los límites del fabricante ni con hielo persistente.",
        "No acercar herramientas al intercambiador para romper hielo.",
        "Refrigerante, instrumentos de presión y componentes energizados requieren capacitación."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Hielo en el evaporador significa necesariamente:",
      "options": [
        "Falta de gas",
        "No demuestra una causa única; hay que revisar aire y condiciones",
        "Compresor nuevo",
        "Carga excesiva siempre"
      ],
      "correct": 1,
      "explanation": "Hielo puede tener varias causas; el caudal y las condiciones son controles iniciales importantes."
    },
    {
      "id": "q2",
      "question": "El ambiente se amplió y aumenta ocupación. Primero revisás:",
      "options": [
        "Color del equipo",
        "La botella de gas",
        "Demanda y capacidad del sistema",
        "Solo drenaje"
      ],
      "correct": 2,
      "explanation": "Una nueva carga térmica puede superar la capacidad aunque el equipo funcione correctamente."
    },
    {
      "id": "q3",
      "question": "Recargar sin diagnóstico puede:",
      "options": [
        "Ocultar una fuga o agravar una condición incorrecta",
        "Resolver toda falla",
        "Aumentar siempre capacidad",
        "Reemplazar limpieza"
      ],
      "correct": 0,
      "explanation": "Agregar masa sin procedimiento puede generar una carga inadecuada y dejar la causa sin resolver."
    }
  ]
};

export const lesson45: Lesson = {
  "id": "no-enfria",
  "title": "Fallas eléctricas frecuentes",
  "summary": "Clasificar ausencia de respuesta, disparos y fallas de comunicación sin reemplazos por tanteo.",
  "minutes": 45,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 44: seguridad, herramientas y fundamentos del split.",
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
    "Clasificar ausencia de respuesta, disparos y fallas de comunicación sin reemplazos por tanteo.",
    "Usar diagrama y código del fabricante para elegir comprobaciones.",
    "Reconocer cuándo la seguridad obliga a detener."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "Una falla eléctrica puede presentarse como ausencia de respuesta, protección disparada, arranque interrumpido, ventilador detenido o alarma de comunicación. Los síntomas se interpretan con alimentación, circuito, control y condiciones. No se reduce todo a capacitor o placa.",
        "Ante falta de respuesta se hacen controles externos seguros: configuración del mando, estado visible del suministro y mensajes. No se pide al usuario abrir el tablero o bornes. Un profesional verifica alimentación y circuito si corresponde. La ausencia de respuesta también puede ser una función de bloqueo o retardo documentada, no necesariamente daño.",
        "Una protección que dispara indica una condición que debe investigarse. No se rearma repetidamente ni se coloca una protección mayor para evitar disparos. La coordinación entre conductor, equipo y protecciones la evalúa un electricista habilitado. Humedad, aislamiento, sobrecorriente y defectos del circuito requieren comprobaciones distintas.",
        "Una conexión floja puede producir calor y caída de tensión; marcas térmicas son indicios que requieren análisis de terminal, conductor y carga. Un capacitor o motor se prueba con el procedimiento correspondiente y condición segura. El reemplazo debe cumplir especificaciones, no solo tener tamaño físico semejante.",
        "En splits con comunicación, el código puede involucrar correspondencia de bornes, conductor, alimentación, señal o electrónica. No se asigna tensión universal a un borne de comunicación ni se trata como cable inofensivo. Se consulta diagrama y diagnóstico del modelo; medir o aplicar una señal incorrecta puede dañar placas.",
        "En inverter hay circuitos electrónicos de potencia con energía residual y señales que demandan instrumentos y competencia específica. No se prueban placas por puentes improvisados ni se anulan sensores o protecciones. El diagnóstico documenta condiciones y evidencia; tras la reparación se rearman guardas y PE y se verifica seguridad y funcionamiento."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "No responde",
          "description": "Configuración y suministro externo → controles profesionales de alimentación y mando según manual."
        },
        {
          "name": "Protección dispara",
          "description": "Detener y diagnosticar circuito/equipo; no aumentar calibre por conveniencia."
        },
        {
          "name": "Motor o capacitor",
          "description": "Identificar tecnología y componente; prueba segura y reemplazo solo según especificación."
        },
        {
          "name": "Comunicación",
          "description": "Diagrama, bornes, alimentación y procedimiento del código; no cambiar placa por el nombre de alarma."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "El diferencial dispara después de una entrada de agua. No se insiste en el arranque: se mantiene seguro y se deriva a evaluación de humedad, aislamiento y circuito por personal competente.",
        "Después de una instalación aparece alarma de comunicación. Se revisa documentación y correspondencia de conexiones sin tensión antes de atribuir daño a placa. El diagnóstico energizado, si lo exige el manual, es exclusivo del profesional."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Para cada caso separá síntoma, riesgo e hipótesis.",
        "En el diagrama del manual marcá qué datos deben confirmarse antes de medir.",
        "Escribí por qué no se cambia protección o placa por tanteo.",
        "Prepará un informe de derivación con pruebas pendientes y sin mediciones inventadas."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Rearmar repetidamente una protección que dispara.",
        "Aumentar calibre sin revisar conductor y circuito.",
        "Asumir que comunicación siempre es baja tensión segura.",
        "Cambiar capacitor o placa sin identificación ni prueba."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Seguir diagnóstico y compatibilidad del modelo.",
        "Coordinar la evaluación del inmueble con electricista habilitado.",
        "Registrar causas y correcciones, no solo piezas reemplazadas."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Clasificar ausencia de respuesta, disparos y fallas de comunicación sin reemplazos por tanteo.",
        "Usar diagrama y código del fabricante para elegir comprobaciones."
      ],
      "requiresSupervision": [
        "Pruebas internas, energizadas y de componentes solo por personal capacitado.",
        "Diseño o corrección de protecciones y cableado del inmueble por profesional habilitado."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Riesgo de electrocución y energía residual incluso después de desconectar.",
        "Nunca puentear protecciones, tierra ni sensores para forzar funcionamiento.",
        "No medir resistencia con tensión ni aplicar instrumentos incompatibles a electrónica."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Una protección dispara repetidamente. Corresponde:",
      "options": [
        "Aumentar su calibre",
        "Detener e investigar con profesional competente",
        "Puentease",
        "Rearmar hasta que funcione"
      ],
      "correct": 1,
      "explanation": "El disparo advierte una condición; anular o sobredimensionar puede dejar el circuito sin protección adecuada."
    },
    {
      "id": "q2",
      "question": "Una alarma de comunicación implica siempre placa dañada:",
      "options": [
        "Sí",
        "Solo si es nueva",
        "No; seguir comprobaciones de conexiones, alimentación y control del manual",
        "Si el mando funciona"
      ],
      "correct": 2,
      "explanation": "El código no identifica por sí solo la pieza defectuosa; deben verificarse causas compatibles."
    },
    {
      "id": "q3",
      "question": "En un borne de comunicación se puede asumir tensión segura universal:",
      "options": [
        "No; consultar esquema y procedimiento del modelo",
        "Sí",
        "Siempre cero",
        "Por el color"
      ],
      "correct": 0,
      "explanation": "Las arquitecturas varían y pueden existir tensiones peligrosas; no se deduce seguridad por el nombre."
    }
  ]
};

export const lesson46: Lesson = {
  "id": "agua-ruido-vibracion",
  "title": "Problemas de drenaje, ruido y vibraciones",
  "summary": "Localizar origen y condiciones de agua, ruido y vibración.",
  "minutes": 40,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 45: seguridad, herramientas y fundamentos del split.",
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
    "Localizar origen y condiciones de agua, ruido y vibración.",
    "Distinguir comportamiento normal y falla mecánica según fabricante.",
    "Priorizar riesgos y evitar ajustes que oculten la causa."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "Agua, ruido y vibración se investigan con ubicación, momento, modo y evolución. Un sonido durante descongelamiento o expansión térmica puede estar previsto por el fabricante; un ruido metálico persistente, roce o movimiento del soporte exige otra evaluación. No se declara normal solo porque el equipo todavía enfría.",
        "Para el agua se distingue desborde de bandeja, obstrucción, recorrido inadecuado, bomba, condensación sobre aislación y agua de la exterior en calefacción. La inspección sigue el recorrido y no se limita al punto donde aparece la gota. Agua que llega a electricidad requiere detener de forma segura.",
        "El ruido puede proceder del flujo de aire, turbina sucia, pieza mal asentada, roce, motor, compresor o transmisión a la estructura. Se registra si cambia con velocidad o modo, sin acercarse a piezas en movimiento. Una grabación autorizada orienta, pero no reemplaza identificación y prueba segura.",
        "La vibración puede originarse en desequilibrio, soporte inadecuado, fijaciones, tuberías que tocan estructura o funcionamiento anormal. Un taco antivibratorio no corrige un anclaje débil. Antes de ajustes se verifica seguridad estructural y compatibilidad del montaje.",
        "No se aprietan piezas a ciegas ni se agregan cuñas improvisadas. La corrección respeta soporte, torques, separación y procedimiento del fabricante. Si requiere altura o inspección de motor y hélice, se planifica con personal capacitado y equipo aislado.",
        "La comprobación final reproduce de manera segura condiciones relevantes, tras rearmar y dejar el área protegida. Si desaparece el sonido pero queda un soporte inseguro, la reparación no se acepta. Se registra causa, corrección y evidencia de ausencia del síntoma bajo condiciones de prueba."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Agua",
          "description": "Origen → bandeja o aislación → recorrido → descarga; distinguir modos frío y calor."
        },
        {
          "name": "Ruido",
          "description": "Condiciones, variación con modo/velocidad y ubicación sin acercamiento peligroso."
        },
        {
          "name": "Vibración",
          "description": "Fuente mecánica y transmisión a soporte o tuberías; verificar integridad antes de amortiguar."
        },
        {
          "name": "Seguridad",
          "description": "Agua eléctrica, roce severo o soporte inseguro → detener y corregir con personal competente."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Una exterior vibra y el cliente pide cambiar tacos. La inspección muestra un anclaje deteriorado: se resuelve primero la seguridad del soporte, no se oculta con amortiguación.",
        "Una interior gotea después de un servicio y suena con cierta velocidad. Se registran dos síntomas y se investiga drenaje y turbina por separado; no se atribuye todo a una única causa sin evidencia."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Armá dos fichas de síntomas con ubicación, modo, momento y riesgo.",
        "Dibujá rutas posibles de transmisión de vibración a la pared.",
        "Separá ajustes permitidos del diagnóstico que exige desmontaje.",
        "Definí qué observación impediría devolver el equipo al servicio."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Amortiguar sin verificar anclajes.",
        "Considerar normal cualquier ruido si enfría.",
        "Tratar todos los goteos como obstrucción.",
        "Tocar o detener una hélice con la mano."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Registrar síntomas intermitentes con condiciones precisas.",
        "Revisar cambios de montaje o servicio reciente.",
        "Verificar corrección y seguridad, no solo disminución de sonido."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Localizar origen y condiciones de agua, ruido y vibración.",
        "Distinguir comportamiento normal y falla mecánica según fabricante."
      ],
      "requiresSupervision": [
        "Desmontar turbina, revisar motores y ajustar soportes con capacitación y supervisión.",
        "La evaluación estructural y acceso en altura se derivan cuando exceden la competencia del técnico."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Soportes inseguros y trabajo en altura requieren medios adecuados y personal competente.",
        "Agua hacia electricidad obliga a aislamiento seguro y revisión.",
        "No operar con roce severo o guardas retiradas ni introducir objetos en ventiladores."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Un taco antivibratorio corrige un anclaje deteriorado:",
      "options": [
        "Sí",
        "No; primero se resuelve integridad del soporte",
        "Si es grueso",
        "Siempre en exterior"
      ],
      "correct": 1,
      "explanation": "Amortiguar no asegura un anclaje: la condición estructural debe corregirse antes."
    },
    {
      "id": "q2",
      "question": "Ruido normal o falla se distingue con:",
      "options": [
        "La impresión del cliente solamente",
        "El precio",
        "Condiciones, ubicación y secuencia del fabricante",
        "Carga adicional"
      ],
      "correct": 2,
      "explanation": "Los sonidos se interpretan con modo y procedimiento; no se normalizan sin contexto."
    },
    {
      "id": "q3",
      "question": "Agua próxima a electricidad requiere:",
      "options": [
        "Detener de forma segura y revisar",
        "Seguir probando",
        "Aumentar velocidad",
        "Tapar la gota"
      ],
      "correct": 0,
      "explanation": "La seguridad prevalece; continuar puede causar descarga o daño."
    }
  ]
};

export const lesson47: Lesson = {
  "id": "codigos-de-error",
  "title": "Diagnóstico sistemático de averías",
  "summary": "Construir una secuencia de diagnóstico con hipótesis y evidencias.",
  "minutes": 45,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 46: seguridad, herramientas y fundamentos del split.",
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
    "Construir una secuencia de diagnóstico con hipótesis y evidencias.",
    "Usar códigos y mediciones sin confundir correlación con causa.",
    "Verificar una reparación y documentar incertidumbres."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "El diagnóstico sistemático reduce cambios de piezas y maniobras innecesarias. Su secuencia es identificar equipo y síntoma, evaluar seguridad, fijar condiciones, formular hipótesis, elegir comprobaciones, corregir causa y verificar. Cada paso tiene una decisión de continuar, detener o dejar pendiente.",
        "Las hipótesis se ordenan por compatibilidad con síntoma, evidencia, riesgo y facilidad de comprobación, no solo por frecuencia. Primero se verifican controles externos de configuración y aire cuando correspondan. No se salta a pruebas frigoríficas porque una falla parecida de otro cliente necesitó gas.",
        "Un árbol de diagnóstico útil contiene preguntas verificables y ramas: si hay una condición insegura, detener; si el modo no solicita la función, corregir configuración; si el aire está restringido, comprobar su causa; si lo anterior es conforme, aplicar comprobaciones específicas del modelo. No es una lista rígida que ignore diferencias entre equipos.",
        "Los códigos se leen en la documentación exacta del modelo y versión cuando corresponda. Una misma apariencia o marca no garantiza la misma tabla. Se conserva el mensaje y condiciones antes de borrar memoria o reiniciar. Repetir reinicios puede eliminar indicios y no repara una causa.",
        "Las mediciones se interpretan con unidad, punto, instrumento y condiciones. Para confirmar una causa se necesita evidencia que distinga hipótesis rivales: una lectura compatible no siempre es exclusiva. Cambiar una sola condición por vez, cuando el método lo permite, mejora trazabilidad y evita atribuir mejoras a la intervención equivocada.",
        "La reparación se acepta con seguridad restablecida y prueba bajo condiciones pertinentes. Un arranque único no demuestra solución de una falla intermitente. Si no se pudo reproducir, se registra el límite y se define seguimiento, no se afirma reparación confirmada. El informe conserva hipótesis descartadas, pruebas realizadas y pendientes."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Definir",
          "description": "Equipo, síntoma, condiciones e historial; detener ante riesgo."
        },
        {
          "name": "Discriminar",
          "description": "Hipótesis → control capaz de distinguirlas → resultado documentado."
        },
        {
          "name": "Corregir",
          "description": "Solo causa sustentada; cambios trazables y autorización del cliente."
        },
        {
          "name": "Verificar",
          "description": "Prueba válida y seguridad → aceptación; falla intermitente no reproducida → seguimiento pendiente."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Una alarma aparece solo algunos días húmedos. Se conserva código y circunstancias, se consulta manual y se planifican pruebas pertinentes; un reinicio sin seguimiento no se declara solución.",
        "Tras una limpieza el equipo mejora, pero también se cambiaron modo y puertas del ambiente. No se atribuye todo a limpieza: la comparación cambió varias condiciones y requiere un ensayo controlado."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Construí un árbol en papel con seguridad, configuración, aire y diagnóstico específico.",
        "Proponé dos hipótesis del caso intermitente y qué evidencia las distinguiría.",
        "Señalá por qué el segundo caso no demuestra una única causa.",
        "Redactá un cierre con causa comprobada o pendiente y plan de seguimiento."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Usar la tabla de códigos de otro modelo.",
        "Borrar alarmas antes de registrarlas.",
        "Cambiar varias piezas sin comprobar.",
        "Declarar resuelta una falla no reproducida."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Anotar evidencia también de hipótesis descartadas.",
        "Priorizar controles seguros y no invasivos antes de escalar.",
        "Mantener trazabilidad de ajustes, reparación y verificación."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Construir una secuencia de diagnóstico con hipótesis y evidencias.",
        "Usar códigos y mediciones sin confundir correlación con causa."
      ],
      "requiresSupervision": [
        "El alumno desarrolla árboles y analiza registros; las pruebas de campo internas requieren instructor.",
        "Ensayos eléctricos, frigoríficos y de control se realizan por profesionales competentes según manual."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Nunca anular protecciones para seguir una rama del diagnóstico.",
        "No improvisar mediciones en circuitos energizados o presurizados.",
        "Detener y derivar si la prueba excede capacitación, herramientas o condiciones seguras."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Una avería intermitente no se reprodujo tras reiniciar. Se informa:",
      "options": [
        "Reparación confirmada",
        "Limitación de verificación y seguimiento pendiente",
        "Equipo sin fallas",
        "Cambio obligatorio de placa"
      ],
      "correct": 1,
      "explanation": "No reproducir no demuestra reparación; se registran circunstancias y plan de seguimiento."
    },
    {
      "id": "q2",
      "question": "Una tabla de códigos de otro modelo es:",
      "options": [
        "Siempre equivalente",
        "Suficiente si es misma marca",
        "No sustituto del manual exacto",
        "Mejor que el fabricante"
      ],
      "correct": 2,
      "explanation": "Códigos y procedimientos pueden variar con modelo y control."
    },
    {
      "id": "q3",
      "question": "Una comprobación útil debe:",
      "options": [
        "Distinguir hipótesis con evidencia",
        "Solo producir una lectura",
        "Confirmar lo que ya creemos",
        "Evitar todo registro"
      ],
      "correct": 0,
      "explanation": "El objetivo es discriminar causas compatibles, no acumular lecturas sin criterio."
    }
  ]
};

export const lesson48: Lesson = {
  "id": "caso-integrador",
  "title": "Casos prácticos integradores",
  "summary": "Integrar seguridad, instalación, puesta en marcha, mantenimiento y diagnóstico.",
  "minutes": 50,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 47: seguridad, herramientas y fundamentos del split.",
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
    "Integrar seguridad, instalación, puesta en marcha, mantenimiento y diagnóstico.",
    "Resolver casos con decisiones justificadas sin inventar mediciones.",
    "Documentar aceptación o pendientes y comunicar al cliente."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "La integración profesional no consiste en memorizar una presión ni en seguir siempre la misma receta. Consiste en reconocer el estado del equipo, la demanda del cliente, el procedimiento pertinente y el límite de la propia competencia. Una instalación nueva, un mantenimiento y una reparación requieren evidencia y secuencias diferentes.",
        "Caso A: split nuevo con unidades identificadas y cañerías montadas; faltan registro eléctrico y resultados de estanqueidad y evacuación. El cliente pide encender para ver si funciona. La decisión correcta es posponer energización y liberación de refrigerante, completar controles con personal capacitado y documentar aceptación de cada etapa antes del ensayo de funcionamiento.",
        "Caso B: split que enfría menos y gotea después de una limpieza parcial. Se observa filtro obstruido y un tramo ascendente de desagüe; no se aportan mediciones frigoríficas. Se registran dos problemas posibles, se corrigen las condiciones de aire y drenaje con método autorizado y se verifica bajo condiciones válidas. No hay evidencia suficiente para indicar carga.",
        "Caso C: equipo inverter con alarma intermitente después de humedad exterior y una protección que ha disparado. El usuario lo reinició varias veces. La prioridad es seguridad: no insistir ni puentear. Se preservan códigos y condiciones, se consulta diagnóstico del modelo y se deriva a evaluación eléctrica competente, considerando agua y energía residual.",
        "En cada caso se elabora una hoja con hechos, hipótesis, riesgos, pruebas necesarias, responsables y criterios tomados del fabricante. Si falta manual o medición, el dato queda pendiente. La evaluación valora la calidad de decisiones y no exige que el alumno ejecute presurización, carga o pruebas energizadas sin supervisión.",
        "El cierre separa trabajo realizado de trabajo propuesto. Una aceptación necesita evidencia de seguridad y resultado funcional en condiciones pertinentes. Las actividades en papel y el cuestionario completan el recorrido teórico; no constituyen habilitación profesional ni sustituyen prácticas evaluadas por instructor."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Caso A: instalación",
          "description": "Controles previos y puesta en marcha secuenciada; no encender con pendientes esenciales."
        },
        {
          "name": "Caso B: mantenimiento",
          "description": "Aire y drenaje se investigan por separado antes de concluir una falla frigorífica."
        },
        {
          "name": "Caso C: diagnóstico",
          "description": "Seguridad, registro de alarma y procedimiento eléctrico del modelo antes de nuevos arranques."
        },
        {
          "name": "Informe integrador",
          "description": "Hechos → hipótesis → pruebas y responsable → corrección → verificación o pendiente."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "En el caso A, una lista con casillas vacías no es evidencia de aprobación. Se nombra al profesional que confirmará la seguridad eléctrica y al técnico que realizará ensayos frigoríficos.",
        "En el caso B, mejorar caudal no demuestra que el goteo desapareció: se exige verificar ambas condiciones. En el C, un arranque posterior no demuestra que la causa intermitente fue reparada."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Prepará un informe separado de A, B y C con solo hechos aportados.",
        "Para cada caso anotá riesgos, hipótesis y primer control seguro.",
        "Definí qué prácticas requieren supervisor y qué documentación falta.",
        "Escribí una secuencia de avance con decisiones de detener o continuar.",
        "Redactá un mensaje al cliente sin prometer una reparación no comprobada.",
        "Compará tus decisiones con las explicaciones del cuestionario y registrá dudas para el instructor."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Usar el mismo procedimiento para equipo nuevo y averiado.",
        "Inventar mediciones para cerrar un caso.",
        "Confundir actividad teórica con competencia de campo.",
        "Declarar aceptación con pendientes de seguridad."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Justificar cada decisión con evidencia y procedimiento.",
        "Resolver causas múltiples y verificar cada síntoma.",
        "Solicitar revisión docente y práctica supervisada antes de intervenir por cuenta propia."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Integrar seguridad, instalación, puesta en marcha, mantenimiento y diagnóstico.",
        "Resolver casos con decisiones justificadas sin inventar mediciones."
      ],
      "requiresSupervision": [
        "Todas las maniobras frigoríficas, pruebas internas y primeras energizaciones de los casos.",
        "La práctica profesional debe ser observada y evaluada por un instructor cualificado; el curso teórico no otorga habilitación."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "No ejecutar los casos sobre equipos reales sin capacitación y supervisión.",
        "Presión, refrigerante, electricidad, energía residual y altura requieren medidas específicas.",
        "No energizar, liberar refrigerante ni insistir en arranques ante condiciones no verificadas o peligrosas."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "En el caso A falta revisión eléctrica. La decisión es:",
      "options": [
        "Encender para confirmar",
        "Completar verificación profesional antes de energizar",
        "Abrir válvulas igual",
        "Ignorar si es nuevo"
      ],
      "correct": 1,
      "explanation": "La seguridad y controles previos son condiciones de avance, no pruebas que se sustituyen con encendido."
    },
    {
      "id": "q2",
      "question": "En el caso B hay filtro obstruido y drenaje ascendente. ¿Qué se concluye?",
      "options": [
        "Falta gas confirmada",
        "Solo hay una causa",
        "Hay problemas de aire y drenaje a verificar; no evidencia de carga incorrecta",
        "La placa está dañada"
      ],
      "correct": 2,
      "explanation": "Los hechos apuntan a condiciones distintas; no permiten justificar refrigerante sin diagnóstico."
    },
    {
      "id": "q3",
      "question": "En el caso C hay disparos y humedad. Primero:",
      "options": [
        "Detener de forma segura y coordinar evaluación competente",
        "Reiniciar repetidamente",
        "Puenteo de protección",
        "Cambiar gas"
      ],
      "correct": 0,
      "explanation": "Los indicios eléctricos y de humedad hacen prioritaria la seguridad antes de nuevas pruebas."
    },
    {
      "id": "q4",
      "question": "Completar teoría y cuestionarios equivale a habilitación profesional:",
      "options": [
        "Sí",
        "No; requiere formación práctica y requisitos aplicables",
        "Solo en split",
        "Si se obtiene puntaje máximo"
      ],
      "correct": 1,
      "explanation": "El recorrido teórico no reemplaza práctica supervisada, evaluación profesional ni requisitos de la jurisdicción."
    }
  ]
};
