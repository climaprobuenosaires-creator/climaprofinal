import type { Lesson } from "./types";

// Contenido didáctico pendiente de revisión docente. Sin parámetros universales ni prácticas autónomas de riesgo.

export const lesson31: Lesson = {
  "id": "prueba-estanqueidad",
  "title": "Inspección previa a la puesta en marcha",
  "summary": "Decidir si una instalación está lista para iniciar su puesta en marcha.",
  "minutes": 35,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 30: seguridad, herramientas y fundamentos del split.",
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
    "Decidir si una instalación está lista para iniciar su puesta en marcha.",
    "Ordenar controles documentales, mecánicos, eléctricos y frigoríficos.",
    "Distinguir un control pendiente de una condición aprobada."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "La puesta en marcha no empieza al pulsar el control remoto. Primero se verifica que la instalación corresponde al equipo y que los trabajos previos tienen evidencia: modelo de ambas unidades, refrigerante, recorrido de cañerías, desagüe y conexiones. Un equipo puede encender aun con una instalación insegura; encender no demuestra conformidad.",
        "La inspección se realiza con el equipo aislado de la alimentación, por personal capacitado cuando hay que acceder a partes internas. Se comparan identificación y manual: compatibilidad de unidades, tensión, tipo de refrigerante, diámetros, longitud y desnivel admitidos. No se reemplaza una comprobación por la memoria de otro modelo.",
        "El control mecánico busca soportes firmes, accesos seguros, entrada y salida de aire libres, caños protegidos sin aplastamientos y aislación continua. El control de drenaje considera descarga adecuada y ensayo conforme al fabricante. La revisión eléctrica abarca protecciones, conductor de protección, correspondencia de bornes y sujeción; la seguridad del inmueble la confirma un profesional habilitado.",
        "Antes de liberar refrigerante o energizar se deben completar las etapas frigoríficas que correspondan: estanqueidad, evacuación y aceptación del vacío. Una inspección inicial no sustituye estas pruebas. En una instalación que estuvo en servicio se identifica el estado del circuito y se aplica el procedimiento de servicio, no el de un equipo nuevo.",
        "La lista de control debe distinguir conforme, no conforme y pendiente. Cada registro incluye quién verificó, con qué documento y qué evidencia quedó. Un dato faltante bloquea la decisión relacionada: no se presume aprobada una prueba que no fue realizada."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Identificación",
          "description": "Modelo de ambas unidades, refrigerante y manual aplicable antes de cualquier ensayo."
        },
        {
          "name": "Instalación física",
          "description": "Soportes, accesos, ventilación, cañerías, aislación y drenaje se cotejan con lo proyectado."
        },
        {
          "name": "Seguridad eléctrica",
          "description": "El profesional verifica alimentación, protecciones, puesta a tierra y conexiones sin tensión."
        },
        {
          "name": "Puerta de decisión",
          "description": "No conformidad → detener y corregir; pendiente → verificar; conforme → continuar con la etapa siguiente."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "En un split recién montado, las unidades coinciden y las cañerías están terminadas, pero no hay constancia de la revisión de puesta a tierra. La respuesta no es probar unos minutos: se deja la energización pendiente hasta la verificación profesional.",
        "Si además falta la prueba de estanqueidad, se programa antes de evacuación y liberación de refrigerante. El informe separa dos pendientes distintos y asigna responsable a cada uno."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Armá una lista con documentación, montaje, drenaje, electricidad y pruebas frigoríficas.",
        "Clasificá el caso como conforme, no conforme o pendiente en cada área.",
        "Escribí qué evidencia habilitaría avanzar y quién debe obtenerla.",
        "Explicá al cliente por qué la primera energización se pospone."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Usar el encendido como prueba de seguridad.",
        "Dar por hecha una prueba porque las conexiones se ven prolijas.",
        "Revisar bornes con alimentación presente."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Registrar modelo y versión del manual en la hoja de puesta en marcha.",
        "Cerrar cada pendiente con evidencia, no con una suposición.",
        "Separar inspección inicial de aceptación final del funcionamiento."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Decidir si una instalación está lista para iniciar su puesta en marcha.",
        "Ordenar controles documentales, mecánicos, eléctricos y frigoríficos."
      ],
      "requiresSupervision": [
        "Acceso a bornes, pruebas eléctricas y primera energización por personal capacitado.",
        "Pruebas frigoríficas y maniobras de válvulas con supervisión e instrumentos compatibles."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "No energizar con protecciones, tierra o conexiones sin verificar.",
        "No abrir válvulas ni conexiones de un circuito sin conocer su estado y procedimiento.",
        "En altura, no acceder sin medios y capacitación adecuados."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Falta comprobar la puesta a tierra. ¿Qué corresponde?",
      "options": [
        "Encender brevemente",
        "Posponer energización y pedir verificación profesional",
        "Unir neutro y carcasa",
        "Ignorarla si el equipo es nuevo"
      ],
      "correct": 1,
      "explanation": "La seguridad eléctrica es una condición previa; no se demuestra encendiendo el equipo."
    },
    {
      "id": "q2",
      "question": "Una prueba sin registro ni evidencia debe figurar como:",
      "options": [
        "Aprobada",
        "Innecesaria",
        "Pendiente",
        "Equivalente a una inspección visual"
      ],
      "correct": 2,
      "explanation": "Sin evidencia no se puede afirmar que la prueba se realizó ni que fue aceptable."
    },
    {
      "id": "q3",
      "question": "¿Qué documento define los límites de instalación?",
      "options": [
        "El manual del modelo",
        "La experiencia con cualquier split",
        "El precio del equipo",
        "Una tabla sin identificar"
      ],
      "correct": 0,
      "explanation": "Los límites dependen del modelo; la identificación y el manual son el punto de partida."
    }
  ]
};

export const lesson32: Lesson = {
  "id": "vacio",
  "title": "Pruebas de estanqueidad",
  "summary": "Explicar cómo se verifica que el circuito no tenga fugas antes de evacuarlo.",
  "minutes": 40,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 31: seguridad, herramientas y fundamentos del split.",
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
    "Explicar cómo se verifica que el circuito no tenga fugas antes de evacuarlo.",
    "Interpretar un ensayo considerando temperatura, instrumentos y alcance.",
    "Reconocer prácticas prohibidas de presurización."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "Estanqueidad significa que el circuito contiene el fluido sin pérdidas. Se comprueba antes de la evacuación y de liberar la carga en una instalación nueva, según el procedimiento del fabricante. El ensayo permite encontrar defectos de unión; no demuestra por sí solo que el circuito esté seco ni limpio.",
        "El medio habitual de ensayo es nitrógeno seco libre de oxígeno, cuando el fabricante lo prescribe. El gas pasa por un regulador apto y por un conjunto de instrumentos y mangueras compatible con la presión y el equipo. La botella nunca se conecta directamente al circuito. Presión, etapas de incremento, duración y criterio de aceptación se obtienen del manual: no existe un valor válido para todos los splits.",
        "El instructor identifica qué sector se ensaya y qué componentes quedan aislados conforme al manual. No se fuerza una válvula ni se expone un componente a una presión fuera de su límite. Si el equipo contiene refrigerante, se evalúa previamente su recuperación y el procedimiento de servicio; no se mezcla una intervención en uso con un montaje nuevo.",
        "Una lectura que cambia no implica automáticamente una fuga: la presión del gas también cambia con la temperatura. Se anotan condiciones iniciales y finales y se considera la estabilización térmica. Aun con una lectura aparentemente estable, el método de localización de fugas prescrito se aplica a las uniones; una lectura aislada no certifica el conjunto.",
        "Si se detecta una fuga, se detiene el proceso. La despresurización controlada y la reparación las realiza personal capacitado, sin aflojar una unión presurizada. Después se repite el ensayo completo afectado y se documenta el resultado. No se oculta una pérdida agregando refrigerante."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Preparar",
          "description": "Identificar refrigerante, límites y sector a ensayar; inspeccionar regulador, instrumentos y conexiones."
        },
        {
          "name": "Ensayar",
          "description": "Personal capacitado aplica el procedimiento del fabricante y registra presión, tiempo y temperatura."
        },
        {
          "name": "Localizar",
          "description": "Inspeccionar uniones con método y producto compatible indicado, sin contaminar el circuito."
        },
        {
          "name": "Aceptar o repetir",
          "description": "Resultado aceptable documentado → siguiente etapa; fuga o duda → corregir y repetir antes del vacío."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Un ensayo empieza con las cañerías al sol y termina a la sombra con menor presión. El técnico no concluye inmediatamente que hay fuga: compara temperatura, estabiliza según procedimiento y revisa uniones.",
        "Una unión muestra indicio de pérdida. No se ajusta bajo presión. Se organiza la despresurización segura, reparación y nuevo ensayo; la instalación no se declara aprobada."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Dibujá botella → regulador → instrumentos → sector autorizado del circuito.",
        "Marcá en el manual dónde buscar presión, duración y criterio de aceptación.",
        "Compará los dos escenarios del ejemplo y anotá la evidencia que falta.",
        "Redactá el registro de una no conformidad sin inventar mediciones."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Usar oxígeno, aire comprimido o gas combustible como sustituto.",
        "Conectar la botella sin regulador.",
        "Aceptar el ensayo sin considerar cambios de temperatura."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Comprobar compatibilidad y estado de todo el conjunto, no solo del manómetro.",
        "Documentar también la localización de fugas y las reparaciones.",
        "Repetir la prueba tras reparar; no saltar al vacío."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Explicar cómo se verifica que el circuito no tenga fugas antes de evacuarlo.",
        "Interpretar un ensayo considerando temperatura, instrumentos y alcance."
      ],
      "requiresSupervision": [
        "Presurizar y despresurizar con nitrógeno por personal formado y supervisión.",
        "Intervenir un circuito con refrigerante exige procedimiento de recuperación y herramientas apropiadas."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "El oxígeno en contacto con aceites y presión puede causar incendio o explosión: nunca utilizarlo para este ensayo.",
        "Asegurar la botella y ventilar: el nitrógeno puede desplazar el oxígeno del ambiente.",
        "No superar límites ni aflojar conexiones presurizadas; usar protección indicada para gas y presión."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "¿Qué elemento es indispensable entre botella y circuito?",
      "options": [
        "Un adaptador cualquiera",
        "Un regulador apto",
        "Un filtro doméstico",
        "Ninguno"
      ],
      "correct": 1,
      "explanation": "El regulador controla la presión; conectar directamente la botella expone el circuito a una condición peligrosa."
    },
    {
      "id": "q2",
      "question": "La presión bajó mientras bajaba la temperatura. ¿Qué concluís?",
      "options": [
        "Hay fuga segura",
        "No hay fuga segura",
        "Se necesita analizar temperatura y seguir el procedimiento de verificación",
        "Hay que cargar refrigerante"
      ],
      "correct": 2,
      "explanation": "La temperatura influye en la presión del gas. El diagnóstico necesita condiciones y método, no una sola lectura."
    },
    {
      "id": "q3",
      "question": "Si se localiza una fuga, antes del vacío corresponde:",
      "options": [
        "Reparar de forma segura y repetir el ensayo",
        "Apretar la unión presurizada",
        "Ignorarla",
        "Compensar con carga"
      ],
      "correct": 0,
      "explanation": "La estanqueidad debe quedar aceptada tras la reparación antes de evacuar y liberar refrigerante."
    }
  ]
};

export const lesson33: Lesson = {
  "id": "apertura-y-carga",
  "title": "Vacío del sistema",
  "summary": "Diferenciar evacuación, estanqueidad y carga de refrigerante.",
  "minutes": 40,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 32: seguridad, herramientas y fundamentos del split.",
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
    "Diferenciar evacuación, estanqueidad y carga de refrigerante.",
    "Explicar la función de bomba, vacuómetro y prueba de estabilidad.",
    "Interpretar una recuperación de presión sin diagnosticar por intuición."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "Evacuar consiste en retirar aire y reducir la humedad del sector autorizado del circuito antes de ponerlo en servicio. El aire es un gas no condensable en las condiciones normales del equipo y altera el intercambio; la humedad puede reaccionar con el aceite y el refrigerante o generar obstrucciones. La evacuación no elimina virutas ni reemplaza un montaje limpio.",
        "La bomba de vacío extrae gases; el vacuómetro mide presión absoluta baja. La indicación de un manómetro de servicio común no tiene la resolución necesaria para certificar una evacuación profunda. El montaje, la ubicación del vacuómetro y los accesorios se eligen según manual e instrumentos para medir el circuito, no solo la aspiración de la bomba.",
        "Primero debe aceptarse la estanqueidad. El personal capacitado confirma que no se evacúa indebidamente un sector cargado, que las herramientas son compatibles y que la bomba está en condiciones. Estado del aceite, mangueras, juntas y restricciones afectan el resultado. Una bomba encendida no garantiza que todo el circuito haya alcanzado la condición requerida.",
        "El objetivo de presión absoluta y el criterio de estabilidad al aislar la bomba son los que indique el fabricante. No se valida por un tiempo universal de bombeo ni por el ruido de la herramienta. Se registra valor, unidad, ubicación del sensor y evolución tras el aislamiento conforme al procedimiento.",
        "Si la presión vuelve a subir, pueden intervenir fugas del circuito o del conjunto de medición, humedad que sigue evaporándose u otras condiciones. Se verifica el método y se distingue la respuesta; no se diagnostica exclusivamente por una curva. Si no se cumple el criterio, no se libera refrigerante: se corrige la causa y se repite el proceso requerido.",
        "La liberación de la carga de fábrica o una carga de servicio son etapas posteriores y diferentes. Nunca se usa refrigerante para barrer aire a la atmósfera. Si el manual establece un procedimiento de carga o arranque particular, se sigue sin extrapolarlo a otra máquina."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Circuito preparado",
          "description": "Montaje limpio y ensayo de estanqueidad aceptado, con estado de válvulas según manual."
        },
        {
          "name": "Extracción",
          "description": "Bomba y accesorios compatibles retiran gases del sector previsto."
        },
        {
          "name": "Medición",
          "description": "Vacuómetro apto mide presión absoluta del circuito; registrar unidades y ubicación."
        },
        {
          "name": "Estabilidad",
          "description": "Aislar según procedimiento y observar recuperación; aceptar solo con criterios del fabricante."
        }
      ]
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Un ayudante dice que el vacío terminó porque la bomba trabajó mucho tiempo. El instructor pide el registro del vacuómetro y el ensayo de estabilidad. Sin esos datos, la etapa queda pendiente.",
        "La lectura sube al aislar: primero se revisan montaje de medición y criterios del manual. No se abre la carga para comprobar si enfría; una condición de evacuación no aceptada debe resolverse antes."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Compará en una tabla qué verifica estanqueidad, qué logra evacuación y qué aporta la carga.",
        "Dibujá dónde medirías el circuito según un esquema del manual, sin conectar nada.",
        "Armá una hoja con objetivo pendiente de manual, lectura, unidad y evolución.",
        "Proponé qué revisar antes de atribuir una subida a humedad o fuga."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Certificar vacío por minutos transcurridos.",
        "Leer solo el manómetro común.",
        "Evacuar un circuito con fuga conocida.",
        "Purgar con refrigerante al ambiente."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Registrar unidad de presión absoluta para evitar confusiones.",
        "Cuidar aceite y conexiones de la bomba según su documentación.",
        "No avanzar hasta cumplir extracción y estabilidad requeridas."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Diferenciar evacuación, estanqueidad y carga de refrigerante.",
        "Explicar la función de bomba, vacuómetro y prueba de estabilidad."
      ],
      "requiresSupervision": [
        "Conectar bomba y vacuómetro, aislar sectores y operar válvulas bajo supervisión.",
        "La recuperación y liberación de refrigerante no son actividades autónomas para principiantes."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Bomba, electricidad y posible refrigerante requieren capacitación y ventilación adecuada.",
        "No evacuar refrigerante con una bomba de vacío: usar recuperación específica cuando corresponda.",
        "Para refrigerantes inflamables, usar herramientas y medidas compatibles con su ficha de seguridad."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "¿Qué instrumento permite evaluar la evacuación profunda?",
      "options": [
        "Solo el reloj",
        "Un vacuómetro adecuado",
        "Un termómetro de ambiente",
        "El control remoto"
      ],
      "correct": 1,
      "explanation": "El vacuómetro mide la baja presión absoluta con resolución apropiada; el tiempo no demuestra el resultado."
    },
    {
      "id": "q2",
      "question": "La evacuación sustituye la prueba de estanqueidad:",
      "options": [
        "Siempre",
        "Solo con bomba nueva",
        "No",
        "Si el equipo es pequeño"
      ],
      "correct": 2,
      "explanation": "Son etapas distintas: verificar fugas precede a extraer aire y humedad."
    },
    {
      "id": "q3",
      "question": "Si no cumple la estabilidad requerida corresponde:",
      "options": [
        "Liberar carga igual",
        "Corregir y repetir antes de avanzar",
        "Purgar refrigerante",
        "Aceptar por tiempo"
      ],
      "correct": 1,
      "explanation": "La estabilidad es parte de la aceptación; liberar refrigerante no soluciona un vacío no conforme."
    }
  ]
};

export const lesson34: Lesson = {
  "id": "mediciones-funcionamiento",
  "title": "Conceptos de carga de refrigerante",
  "summary": "Distinguir carga de fábrica, carga adicional y recarga después de una reparación.",
  "minutes": 40,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 33: seguridad, herramientas y fundamentos del split.",
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
    "Distinguir carga de fábrica, carga adicional y recarga después de una reparación.",
    "Explicar por qué la masa y la identificación del refrigerante importan.",
    "Rechazar la carga por presión aislada o por tanteo."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "La carga es la masa de refrigerante requerida por un sistema en una configuración concreta. No es sinónimo de presión: una misma masa puede producir distintas presiones según temperatura, demanda, velocidad del compresor y estado del equipo. La placa identifica refrigerante y datos de carga; el manual explica su aplicación.",
        "En un split nuevo puede haber una carga de fábrica reservada en la unidad exterior. El manual define qué longitud o configuración cubre y si exige correcciones. Abrir las válvulas para liberar esa carga, después de aceptar los controles previos, no equivale a agregar refrigerante desde una botella.",
        "La carga adicional se calcula exclusivamente con la regla del modelo y la longitud o condición que el fabricante considere. No se aplica una cantidad universal por metro ni se extrapola de otro refrigerante. La balanza permite medir masa; presiones y temperaturas sirven para evaluar funcionamiento conforme al procedimiento, no para sustituir la masa prescrita.",
        "En un equipo con pérdida, primero se localiza y repara la fuga, y luego se aplican las pruebas y la recarga que correspondan al servicio. Completar por tanteo sin reparar oculta el defecto y mantiene la pérdida ambiental. El estado de la carga restante y el comportamiento de una mezcla se resuelven con la documentación, no mezclando productos.",
        "Identificar el refrigerante incluye verificar etiqueta, botella, ficha de seguridad y compatibilidad de herramientas. No se mezclan refrigerantes ni se asume que una denominación comercial permite sustituir otro fluido. Para mezclas, la forma de extracción y carga depende de la documentación del producto y del equipo; improvisarla puede alterar composición o dañar el compresor.",
        "Una entrega responsable registra tipo de refrigerante, masa de fábrica indicada y cualquier cantidad añadida o recuperada por personal capacitado, con motivo y procedimiento. El refrigerante se recupera cuando corresponde y no se libera a la atmósfera."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Carga de fábrica",
          "description": "Cantidad prevista por el fabricante para condiciones declaradas del equipo nuevo."
        },
        {
          "name": "Carga adicional",
          "description": "Corrección permitida y cuantificada con la regla exacta del modelo, medida por masa."
        },
        {
          "name": "Recarga de servicio",
          "description": "Después de reparar y probar, seguir procedimiento de recuperación, evacuación y carga aplicable."
        },
        {
          "name": "Control final",
          "description": "Mediciones contextualizadas y registro de intervención; una presión sola no confirma carga correcta."
        }
      ]
    },
    {
      "type": "diagram",
      "title": "Propiedades y diferencias: no intercambiar refrigerantes",
      "kind": "refrigerant-compare"
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "El recorrido instalado difiere del cubierto por la carga de fábrica. El técnico consulta la longitud efectiva y la regla de ese modelo; si la página no está disponible, deja el ajuste pendiente, sin inventar gramos por metro.",
        "Otro cliente pide una recarga porque enfría poco. Antes se revisan demanda y circulación de aire, y si hay pérdida se repara. La venta de gas no sustituye el diagnóstico."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Separá los dos casos en carga adicional planificada y servicio por posible falla.",
        "Prepará un cálculo simbólico usando solo las variables que indique el manual, sin completar valores faltantes.",
        "Listá documentación e instrumentos necesarios para medir masa.",
        "Escribí por qué una presión aislada no determina cantidad de refrigerante."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Agregar refrigerante por tacto o presión sin contexto.",
        "No reparar la fuga antes de recargar.",
        "Mezclar refrigerantes o usar botella sin identificación."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Verificar regla y unidades del manual antes de calcular.",
        "Registrar toda masa manipulada y la causa del trabajo.",
        "Evaluar aire y demanda antes de atribuir bajo rendimiento a carga."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Distinguir carga de fábrica, carga adicional y recarga después de una reparación.",
        "Explicar por qué la masa y la identificación del refrigerante importan."
      ],
      "requiresSupervision": [
        "Recuperación, carga, conexiones a botellas y apertura de válvulas solo por personal formado.",
        "La práctica del alumno consiste en analizar documentos y cálculos; la manipulación requiere supervisión."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Riesgos de presión, quemadura por frío y desplazamiento de oxígeno: ventilación y protección apropiadas.",
        "Refrigerantes inflamables exigen control de fuentes de ignición y herramientas compatibles.",
        "No liberar gas al ambiente ni permitir entrada de líquido al compresor mediante una maniobra improvisada."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "¿Cómo se define la carga adicional?",
      "options": [
        "Con una cantidad universal",
        "Con la regla del fabricante para ese modelo",
        "Con el color del caño",
        "A ojo"
      ],
      "correct": 1,
      "explanation": "Longitud cubierta y corrección dependen del equipo; no hay gramos por metro universales."
    },
    {
      "id": "q2",
      "question": "Una presión aislada permite conocer la masa:",
      "options": [
        "No, depende también de condiciones y control",
        "Sí, siempre",
        "Solo en verano",
        "Si la botella es nueva"
      ],
      "correct": 0,
      "explanation": "Temperatura, demanda y velocidad cambian presiones; la masa se prescribe y mide con el procedimiento adecuado."
    },
    {
      "id": "q3",
      "question": "Ante una pérdida confirmada corresponde:",
      "options": [
        "Agregar gas regularmente",
        "Mezclar otro refrigerante",
        "Reparar, probar y cargar según procedimiento",
        "Ignorarla"
      ],
      "correct": 2,
      "explanation": "La reparación y pruebas son necesarias; la recarga sola deja activa la pérdida."
    }
  ]
};

export const lesson35: Lesson = {
  "id": "control-de-calidad",
  "title": "Verificación de funcionamiento",
  "summary": "Evaluar si el split funciona de acuerdo con el modo y las condiciones del ensayo.",
  "minutes": 35,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 34: seguridad, herramientas y fundamentos del split.",
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
    "Evaluar si el split funciona de acuerdo con el modo y las condiciones del ensayo.",
    "Distinguir un comportamiento normal de una falla o prueba incompleta.",
    "Preparar una aceptación documentada antes de la entrega."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "La verificación de funcionamiento comienza después de aceptar montaje, electricidad, estanqueidad, evacuación y preparación de carga que indique el fabricante. Se realiza con protecciones instaladas y el equipo en condición segura. El primer arranque no es una excusa para trabajar con partes energizadas expuestas.",
        "El modo de prueba, la consigna, las condiciones admisibles y el tiempo de estabilización se toman del manual. Modo ventilación mueve aire sin producir necesariamente refrigeración; deshumidificación y modo automático responden a otras lógicas. Probar en un modo equivocado puede simular una falla.",
        "Se observa la respuesta al mando, ventilación interior y exterior, ausencia de ruidos anormales, comportamiento del drenaje y respuesta térmica. El cambio de temperatura debe interpretarse junto con caudal, humedad, carga del ambiente y condiciones exteriores. Sentir aire frío con la mano no certifica el rendimiento.",
        "Un inverter modula velocidad y potencia; un equipo convencional puede ciclar según consigna. Demoras de protección, descongelamiento en calefacción o pausas indicadas por el fabricante no se diagnostican como avería sin consultar la secuencia. Tampoco se exige que un inverter trabaje siempre al máximo.",
        "Si aparece un indicio de riesgo, como olor a quemado, agua hacia partes eléctricas o vibración severa, se detiene de forma segura y se deriva a revisión. Si los datos no permiten evaluar, el ensayo se registra como inconcluso con pendientes, no como aprobado. Se repite después de corregir y bajo condiciones válidas.",
        "La aceptación final reúne mediciones, condiciones, pruebas realizadas y explicación al usuario sobre uso y mantenimiento. Los controles de frío y calor se realizan cuando el modelo y las condiciones permiten el procedimiento; no se fuerzan modos fuera de los límites del fabricante."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Preparación",
          "description": "Etapas previas aceptadas, tapas y protecciones conforme al procedimiento, zona despejada."
        },
        {
          "name": "Modo y condiciones",
          "description": "Registrar consigna, modo, velocidades y ambiente; utilizar prueba del modelo si corresponde."
        },
        {
          "name": "Observación integral",
          "description": "Aire, respuesta térmica, drenaje, ruido y alarmas; ninguna señal aislada reemplaza el conjunto."
        },
        {
          "name": "Aceptación",
          "description": "Resultado sustentado → documentar; anomalía → detener o investigar; datos insuficientes → pendiente."
        }
      ]
    },
    {
      "type": "diagram",
      "title": "Modulación y ciclos de funcionamiento",
      "kind": "inverter-curve"
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Tras alcanzar la consigna, un inverter reduce su demanda y el aire sale menos frío. Sin alarmas y con ambiente mantenido, puede ser modulación normal; se contrasta con el control del modelo.",
        "Un equipo recién instalado gotea hacia el cableado. Aunque enfríe, no se acepta: se detiene de forma segura y se corrige el problema de agua antes de repetir la verificación."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Diseñá una hoja de prueba con modo, consigna, condiciones y observaciones.",
        "Compará la modulación del ejemplo con un funcionamiento convencional.",
        "Separá criterios de detención por riesgo de datos pendientes de interpretación.",
        "Redactá un cierre con conforme, no conforme o inconcluso sin inventar resultados."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Probar refrigeración en modo ventilación.",
        "Tomar aire frío al tacto como certificación.",
        "Ignorar drenaje o ruido porque la temperatura baja."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Aplicar el modo de ensayo documentado del fabricante.",
        "Registrar también condiciones que expliquen la respuesta del control.",
        "Repetir la aceptación después de cualquier corrección."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Evaluar si el split funciona de acuerdo con el modo y las condiciones del ensayo.",
        "Distinguir un comportamiento normal de una falla o prueba incompleta."
      ],
      "requiresSupervision": [
        "Primera puesta en marcha y medidas en funcionamiento con supervisión.",
        "Diagnóstico interno o ajustes frigoríficos por personal formado y con procedimiento del modelo."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Detener ante indicios de riesgo eléctrico, agua sobre componentes o daño mecánico.",
        "No tocar hélices, cañerías ni bornes durante la operación.",
        "Las mediciones sobre equipo energizado son exclusivas de personal capacitado."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "El equipo está en modo ventilación y no enfría. Primero revisás:",
      "options": [
        "La carga de gas",
        "El modo seleccionado y la prueba prescrita",
        "El compresor para cambiarlo",
        "El drenaje para taparlo"
      ],
      "correct": 1,
      "explanation": "El modo ventilación no exige refrigeración; se verifica la configuración antes de inferir una falla."
    },
    {
      "id": "q2",
      "question": "¿Un inverter debe funcionar siempre a máxima potencia?",
      "options": [
        "Sí",
        "Solo de noche",
        "No, modula según demanda y control",
        "Si los filtros están limpios"
      ],
      "correct": 2,
      "explanation": "La modulación es parte del funcionamiento; se evalúa con condiciones y secuencia del modelo."
    },
    {
      "id": "q3",
      "question": "Hay goteo hacia componentes eléctricos. ¿Se acepta porque enfría?",
      "options": [
        "No; detener de forma segura y corregir",
        "Sí",
        "Solo si enfría mucho",
        "Se espera sin intervenir"
      ],
      "correct": 0,
      "explanation": "La seguridad es parte de la aceptación. El rendimiento no compensa una condición peligrosa."
    }
  ]
};

export const lesson36: Lesson = {
  "id": "entrega-al-cliente",
  "title": "Mediciones y parámetros de operación",
  "summary": "Relacionar mediciones de temperatura, presión, corriente y aire con condiciones de ensayo.",
  "minutes": 45,
  "risk": true,
  "review": "pendiente",
  "prerequisites": [
    "Clases anteriores hasta la 35: seguridad, herramientas y fundamentos del split.",
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
    "Relacionar mediciones de temperatura, presión, corriente y aire con condiciones de ensayo.",
    "Distinguir sobrecalentamiento y subenfriamiento como conceptos, sin aplicar objetivos universales.",
    "Registrar datos con unidades e incertidumbre para un diagnóstico verificable."
  ],
  "sections": [
    {
      "type": "text",
      "title": "Fundamentos y criterio técnico",
      "paragraphs": [
        "Un parámetro solo tiene sentido si se sabe dónde, cómo y en qué condición se midió. El informe identifica modelo, refrigerante, modo, demanda, temperaturas de aire, humedad cuando corresponda, velocidad de ventiladores y estado de estabilización. Una lectura sin unidad o sin punto de medida no permite comparar.",
        "Las temperaturas de aire se toman en puntos representativos de retorno e impulsión según procedimiento, evitando mezclar aire exterior o medir solo una zona. Su diferencia no es por sí sola una medida de capacidad: depende del caudal, humedad y carga. Una gran diferencia con poco caudal puede convivir con mal rendimiento.",
        "La presión de servicio se relaciona con temperatura de saturación usando datos del refrigerante correcto. Hay que distinguir presión relativa y absoluta y usar unidades compatibles. En mezclas con deslizamiento de temperatura se elige referencia de rocío o burbuja según el cálculo y la documentación, no una tabla de otro fluido.",
        "El sobrecalentamiento expresa la diferencia entre temperatura del vapor y saturación correspondiente a su presión en el punto pertinente. El subenfriamiento compara saturación de líquido con temperatura de líquido. Son conceptos útiles, pero objetivos, puntos de medida y validez diagnóstica dependen de diseño, expansión y control. Un split inverter no se ajusta con una regla genérica de otro sistema.",
        "Corriente, tensión y potencia son magnitudes distintas. La pinza y el instrumento eléctrico deben ser aptos para la señal, categoría y procedimiento; medir corriente no autoriza estimar potencia sin considerar las características eléctricas. La comparación con placa y manual requiere conocer la condición de operación, especialmente en inverter.",
        "Conectar instrumentos abre riesgos y puede alterar el circuito. Se priorizan lecturas no invasivas y datos del control cuando el fabricante los permita; conectar manómetros no es una rutina obligatoria en cada visita. Si un valor es incoherente, se revisan sensor, ubicación, unidad y estado del ensayo antes de decidir una reparación."
      ]
    },
    {
      "type": "parts",
      "title": "Esquema de trabajo y puntos de control",
      "parts": [
        {
          "name": "Aire",
          "description": "Retorno e impulsión con ubicación y condiciones; considerar caudal y humedad."
        },
        {
          "name": "Refrigerante",
          "description": "Presión y temperatura del mismo punto interpretadas con el fluido correcto y el manual."
        },
        {
          "name": "Electricidad",
          "description": "Tensión, corriente y potencia no son intercambiables; instrumentos y personal adecuados."
        },
        {
          "name": "Registro",
          "description": "Valor + unidad + punto + instrumento + condición; anotar datos faltantes e incertidumbre."
        }
      ]
    },
    {
      "type": "diagram",
      "title": "Relación entre zonas del circuito y medición",
      "kind": "pressure-circuit"
    },
    {
      "type": "text",
      "title": "Ejemplo de trabajo: analizar antes de intervenir",
      "paragraphs": [
        "Dos equipos tienen la misma diferencia de temperatura de aire, pero uno entrega poco caudal por filtros obstruidos. No se concluye igualdad de capacidad: se comprueba circulación y condiciones.",
        "Una corriente menor que un dato de placa aparece con un inverter a baja demanda. Se revisa el significado del dato de referencia y la modulación antes de atribuir falta de refrigerante."
      ]
    },
    {
      "type": "activity",
      "title": "Actividad de aplicación segura",
      "intro": "Caso de estudio en papel o con documentación del equipo. No abras tapas, no conectes instrumentos ni intervengas un sistema real por tu cuenta. Si falta un dato, registralo como pendiente; no lo supongas.",
      "steps": [
        "Armá una tabla vacía con magnitud, unidad, punto, instrumento y condición.",
        "Escribí las relaciones conceptuales de sobrecalentamiento y subenfriamiento sin objetivos numéricos.",
        "Explicá qué datos faltan para comparar los dos equipos del ejemplo.",
        "Señalá qué mediciones podrías observar sin intervención y cuáles requieren un instructor."
      ]
    },
    {
      "type": "list",
      "title": "Errores frecuentes",
      "items": [
        "Comparar lecturas tomadas en modos o puntos distintos.",
        "Confundir presión relativa con absoluta.",
        "Ajustar carga por una regla universal de sobrecalentamiento.",
        "Igualar corriente con potencia."
      ]
    },
    {
      "type": "list",
      "title": "Recomendaciones profesionales",
      "items": [
        "Anotar condiciones junto a cada serie de lecturas.",
        "Usar tablas del refrigerante identificado y documentación del modelo.",
        "Verificar instrumentos antes de interpretar anomalías."
      ]
    },
    {
      "type": "supervised",
      "title": "Diferenciar estudio y práctica profesional",
      "theory": [
        "Relacionar mediciones de temperatura, presión, corriente y aire con condiciones de ensayo.",
        "Distinguir sobrecalentamiento y subenfriamiento como conceptos, sin aplicar objetivos universales."
      ],
      "requiresSupervision": [
        "Medir tensión, corriente o señales internas con equipo energizado requiere personal capacitado.",
        "Conectar instrumentos de presión y determinar parámetros frigoríficos en un equipo real con supervisión."
      ]
    },
    {
      "type": "warning",
      "title": "Seguridad y límites de la intervención",
      "items": [
        "Medición eléctrica energizada y conexión frigorífica no son prácticas autónomas de principiantes.",
        "No retirar protecciones ni aproximar manos a ventiladores en marcha.",
        "Evitar conexiones innecesarias que puedan liberar refrigerante o introducir contaminación."
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "Una diferencia de temperatura de aire alta prueba por sí sola buena capacidad:",
      "options": [
        "Sí",
        "Solo de noche",
        "No, también importan caudal, humedad y condiciones",
        "Siempre en inverter"
      ],
      "correct": 2,
      "explanation": "Con poco caudal puede existir gran diferencia de temperatura sin capacidad útil adecuada."
    },
    {
      "id": "q2",
      "question": "Para convertir presión a saturación utilizás:",
      "options": [
        "Datos del refrigerante correcto y unidades compatibles",
        "Cualquier tabla",
        "La corriente",
        "Solo temperatura ambiente"
      ],
      "correct": 0,
      "explanation": "La relación presión-temperatura depende del fluido; mezclas y referencia requieren atención específica."
    },
    {
      "id": "q3",
      "question": "¿Los objetivos de sobrecalentamiento son universales?",
      "options": [
        "Sí",
        "No, dependen del sistema y procedimiento del fabricante",
        "Solo por color de cañería",
        "Los fija el cliente"
      ],
      "correct": 1,
      "explanation": "Diseño, expansión y control determinan dónde y cómo se evalúa; no se aplica una meta genérica."
    }
  ]
};
