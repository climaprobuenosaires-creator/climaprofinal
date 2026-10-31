import { useId } from "react";

function ArrowDefinitions({ id }: { id: string }) {
  return <defs><marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke" /></marker></defs>;
}

function PhasePanel({ evaporation }: { evaporation: boolean }) {
  const id = useId();
  const title = evaporation ? "Evaporación" : "Condensación";
  const states = evaporation ? ["Líquido", "Vapor"] : ["Vapor", "Líquido"];
  return <figure className="min-w-0">
    <h3 className="font-bold text-primary">{title}</h3>
    <p className="mt-1 text-sm text-muted-foreground">{evaporation ? "En el evaporador · baja presión" : "En el condensador · alta presión"}</p>
    <svg viewBox="0 0 320 200" className={`mt-3 w-full ${evaporation ? "text-sky" : "text-destructive"}`} role="img" aria-label={`${title}: ${states[0]} a ${states[1]}; ${evaporation ? "absorbe" : "libera"} calor.`}>
      <ArrowDefinitions id={id} />
      {[30, 222].map((x, i) => <g key={x}>
        <rect x={x} y="20" width="68" height="88" rx="6" fill="var(--secondary)" stroke="currentColor" strokeWidth="2" />
        {states[i] === "Líquido" && <path d={`M ${x + 3} 66 Q ${x + 18} 60 ${x + 33} 66 T ${x + 65} 66 V 104 H ${x + 3} Z`} fill="currentColor" opacity="0.25" />}
        {(states[i] === "Líquido" ? [[14, 61], [31, 61], [49, 61], [14, 76], [31, 76], [49, 76]] as const : [[14, 18], [49, 30], [28, 46], [14, 70], [51, 73], [45, 54]] as const).map(([dx, dy], n) => <circle key={n} cx={x + dx} cy={20 + dy} r="4" fill="currentColor" />)}
        <text x={x + 34} y="133" textAnchor="middle" fill="var(--foreground)" fontSize="16" fontWeight="700">{states[i]}</text>
      </g>)}
      <path d="M 111 63 H 207" fill="none" stroke="currentColor" strokeWidth="3" markerEnd={`url(#${id})`} />
      <path d={evaporation ? "M 160 150 V 91" : "M 160 91 V 150"} fill="none" stroke="currentColor" strokeWidth="2" markerEnd={`url(#${id})`} />
      <text x="160" y="180" textAnchor="middle" fill="var(--foreground)" fontSize="14" fontWeight="600">{evaporation ? "Absorbe calor" : "Libera calor"}</text>
    </svg>
    <figcaption className="text-sm leading-relaxed">{evaporation ? "El refrigerante pasa de líquido a vapor al recibir calor del ambiente interior." : "El refrigerante pasa de vapor a líquido al ceder calor al aire exterior."}</figcaption>
  </figure>;
}

export function PhaseChangesDiagram() {
  return <div>
    <div className="mt-4 grid gap-6 md:grid-cols-2"><PhasePanel evaporation /><PhasePanel evaporation={false} /></div>
    <p className="mt-4 border-t pt-3 text-xs leading-relaxed text-muted-foreground">Esquemas cualitativos: los puntos representan partículas, no cantidades ni tamaños reales. La temperatura de cambio de estado depende de la presión y del refrigerante; para valores concretos se consulta su tabla presión-temperatura.</p>
  </div>;
}

export function PressureCircuitDiagram() {
  const id = useId();
  const nodes = [
    { y: 30, name: "1. Compresor", state: "Vapor → vapor", detail: "Aumenta la presión", color: "var(--destructive)", fill: "var(--destructive-soft)" },
    { y: 160, name: "2. Condensador", state: "Vapor → líquido", detail: "Libera calor al exterior →", color: "var(--destructive)", fill: "var(--destructive-soft)" },
    { y: 290, name: "3. Dispositivo de expansión", state: "Líquido → mezcla líquido-vapor", detail: "Disminuye la presión", color: "var(--sky)", fill: "var(--sky-soft)" },
    { y: 420, name: "4. Evaporador", state: "Mezcla líquido-vapor → vapor", detail: "← Absorbe calor del interior", color: "var(--sky)", fill: "var(--sky-soft)" },
  ];
  return <figure className="mt-4">
    <div className="grid items-center gap-6 md:grid-cols-[minmax(0,360px)_1fr]">
      <svg viewBox="0 0 320 560" className="mx-auto w-full max-w-[360px]" role="img" aria-label="Circuito frigorífico en modo frío: compresor, condensador, expansión y evaporador. Las flechas indican el recorrido y el intercambio de calor.">
        <ArrowDefinitions id={id} />
        <path d="M 170 510 V 539 H 18 V 13 H 170 V 29" fill="none" stroke="var(--sky)" strokeWidth="3" markerEnd={`url(#${id})`} />
        <path d="M 18 325 V 242" fill="none" stroke="var(--sky)" strokeWidth="3" markerEnd={`url(#${id})`} />
        {nodes.map((n, i) => <g key={n.name}>
          <rect x="43" y={n.y} width="263" height="90" rx="6" fill={n.fill} stroke={n.color} strokeWidth="1.5" />
          <text x="57" y={n.y + 25} fill="var(--foreground)" fontSize="15" fontWeight="700">{n.name}</text>
          <text x="57" y={n.y + 48} fill="var(--foreground)" fontSize="14">{n.state}</text>
          <text x="57" y={n.y + 72} fill="var(--foreground)" fontSize="14" fontWeight="600">{n.detail}</text>
          {i < 3 && <path d={`M 170 ${n.y + 91} V ${n.y + 124}`} fill="none" stroke={i < 2 ? "var(--destructive)" : "var(--sky)"} strokeWidth="3" markerEnd={`url(#${id})`} />}
        </g>)}
      </svg>
      <div className="space-y-5 text-sm leading-relaxed">
        <div className="border-l-4 border-destructive pl-4"><h3 className="font-bold">Alta presión</h3><p className="mt-1">Desde la salida del compresor hasta la entrada del dispositivo de expansión, pasando por el condensador.</p></div>
        <div className="border-l-4 border-sky pl-4"><h3 className="font-bold">Baja presión</h3><p className="mt-1">Desde la salida del dispositivo de expansión hasta la entrada del compresor, pasando por el evaporador.</p></div>
        <div className="border-t pt-4"><h3 className="font-bold">Dos intercambios de calor</h3><p className="mt-1">El evaporador recibe calor del interior. El condensador entrega calor al exterior: el extraído del ambiente más la energía aportada por el compresor.</p></div>
        <p className="text-muted-foreground">En la expansión baja la presión y parte del líquido se evapora; por eso al evaporador llega una mezcla de líquido y vapor, no solamente líquido.</p>
      </div>
    </div>
    <figcaption className="mt-4 border-t pt-3 text-xs leading-relaxed text-muted-foreground">Ciclo simplificado de compresión de vapor en modo frío. Las flechas entre componentes indican el recorrido del refrigerante; las flechas junto a «calor» indican transferencia de energía, no entrada o salida de refrigerante. Esquema conceptual, no de instalación; sin valores de operación.</figcaption>
  </figure>;
}

function DiagramCard({ title, note, children }: { title: string; note: string; children: React.ReactNode }) {
  return <figure className="min-w-0 rounded-xl border p-4">
    <h3 className="font-bold text-primary">{title}</h3>
    {children}
    <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</figcaption>
  </figure>;
}

export function CompressorTypesDiagram() {
  const id = useId();
  return <div>
    <div className="mt-4 grid gap-4 md:grid-cols-3">
      <DiagramCard title="De pistón (alternativo)" note="Un pistón sube y baja dentro de un cilindro, como en un motor de auto. Robusto y económico; algo más ruidoso.">
        <svg viewBox="0 0 200 150" className="mt-3 w-full text-sky" role="img" aria-label="Compresor de pistón: cilindro con pistón y cigüeñal.">
          <ArrowDefinitions id={id} />
          <rect x="60" y="15" width="80" height="70" rx="6" fill="var(--secondary)" stroke="currentColor" strokeWidth="2" />
          <rect x="72" y="30" width="56" height="26" rx="3" fill="currentColor" opacity="0.3" stroke="currentColor" />
          <path d="M 100 56 V 96" stroke="currentColor" strokeWidth="3" />
          <circle cx="100" cy="112" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="112" r="4" fill="currentColor" />
          <path d="M 100 15 V 4" stroke="var(--destructive)" strokeWidth="3" markerEnd={`url(#${id})`} />
          <text x="100" y="12" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--destructive)">Sale comprimido</text>
          <text x="100" y="145" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">El motor hace girar el cigüeñal</text>
        </svg>
      </DiagramCard>
      <DiagramCard title="Rotativo" note="Un rodillo gira descentrado dentro de un cilindro y va empujando el gas. Compacto y silencioso: el más común en equipos hogareños.">
        <svg viewBox="0 0 200 150" className="mt-3 w-full text-sky" role="img" aria-label="Compresor rotativo: rodillo girando dentro de un cilindro.">
          <ArrowDefinitions id={id} />
          <circle cx="100" cy="70" r="52" fill="var(--secondary)" stroke="currentColor" strokeWidth="2" />
          <circle cx="112" cy="70" r="30" fill="currentColor" opacity="0.3" stroke="currentColor" />
          <circle cx="112" cy="70" r="5" fill="currentColor" />
          <path d="M 152 20 A 56 56 0 0 1 156 60" fill="none" stroke="currentColor" strokeWidth="2" markerEnd={`url(#${id})`} />
          <path d="M 100 18 V 6" stroke="var(--destructive)" strokeWidth="3" markerEnd={`url(#${id})`} />
          <text x="100" y="12" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--destructive)">Sale comprimido</text>
          <text x="100" y="145" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">El rodillo gira y comprime</text>
        </svg>
      </DiagramCard>
      <DiagramCard title="Scroll (espiral)" note="Dos espirales encajadas: una fija y una que se mueve en círculos sin girar. Muy silencioso y eficiente; común en equipos inverter y comerciales.">
        <svg viewBox="0 0 200 150" className="mt-3 w-full text-sky" role="img" aria-label="Compresor scroll: dos espirales encajadas.">
          <ArrowDefinitions id={id} />
          <circle cx="100" cy="70" r="52" fill="var(--secondary)" stroke="currentColor" strokeWidth="2" />
          <path d="M 100 70 m 0 -6 a 6 6 0 0 1 6 6 a 12 12 0 0 1 -12 12 a 20 20 0 0 1 -20 -20 a 30 30 0 0 1 30 -30 a 40 40 0 0 1 40 40" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M 100 18 V 6" stroke="var(--destructive)" strokeWidth="3" markerEnd={`url(#${id})`} />
          <text x="100" y="12" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--destructive)">Sale por el centro</text>
          <text x="100" y="145" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">El gas se comprime hacia el centro</text>
        </svg>
      </DiagramCard>
    </div>
    <p className="mt-4 border-t pt-3 text-xs leading-relaxed text-muted-foreground">Esquemas cualitativos del principio de compresión, no planos de fabricación. Los tres cumplen la misma función: aspirar el vapor frío del evaporador y entregarlo a alta presión y temperatura al condensador.</p>
  </div>;
}

export function HeatExchangersDiagram() {
  const id = useId();
  const Coil = ({ hot }: { hot: boolean }) => {
    const c = hot ? "var(--destructive)" : "var(--sky)";
    return <svg viewBox="0 0 320 190" className="mt-3 w-full" role="img" aria-label={hot ? "Condensador: serpentina caliente que libera calor al aire exterior." : "Evaporador: serpentina fría que absorbe calor del aire interior."}>
      <ArrowDefinitions id={id} />
      <path d="M 30 40 H 290 M 30 70 H 290 M 30 100 H 290 M 30 130 H 290" stroke={c} strokeWidth="4" fill="none" />
      {[40, 70, 100, 130].map((y) => [70, 120, 170, 220].map((x) => <line key={`${x}-${y}`} x1={x} y1={y - 12} x2={x} y2={y + 12} stroke={c} strokeWidth="1.5" opacity="0.5" />))}
      <circle cx="160" cy="85" r="26" fill="none" stroke="var(--muted-foreground)" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M 160 85 m 0 -20 a 20 20 0 0 1 17 10 M 160 85 m -17 10 a 20 20 0 0 1 17 10 M 160 85 m -17 -10 a 20 20 0 0 0 0 20" fill="none" stroke="var(--muted-foreground)" strokeWidth="2" />
      {hot
        ? <><path d="M 160 30 V 12" stroke={c} strokeWidth="3" markerEnd={`url(#${id})`} /><text x="160" y="182" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--foreground)">El ventilador empuja aire y el calor sale → afuera</text><text x="172" y="22" fontSize="12" fontWeight="700" fill={c}>Calor al exterior</text></>
        : <><path d="M 160 12 V 30" stroke={c} strokeWidth="3" markerEnd={`url(#${id})`} /><text x="160" y="182" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--foreground)">El aire del ambiente entrega su calor y vuelve frío</text><text x="172" y="22" fontSize="12" fontWeight="700" fill={c}>Calor del interior</text></>}
    </svg>;
  };
  return <div>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <DiagramCard title="Condensador (unidad exterior)" note="Serpentina con aletas y ventilador. El refrigerante llega como vapor caliente a alta presión, libera calor al aire de afuera y sale como líquido.">
        <Coil hot />
      </DiagramCard>
      <DiagramCard title="Evaporador (unidad interior)" note="Serpentina con aletas y ventilador. El refrigerante llega frío a baja presión, absorbe el calor del aire del ambiente y se evapora.">
        <Coil hot={false} />
      </DiagramCard>
    </div>
    <p className="mt-4 border-t pt-3 text-xs leading-relaxed text-muted-foreground">Ambos son intercambiadores de calor: la misma pieza física (tubos con aletas y un ventilador) cumple un rol u otro según la presión y la temperatura del refrigerante que la recorre. Esquema conceptual, sin medidas ni valores reales.</p>
  </div>;
}

export function ExpansionDevicesDiagram() {
  const id = useId();
  return <div>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <DiagramCard title="Tubo capilar" note="Un caño de cobre muy fino y largo. El refrigerante pierde presión por rozamiento al atravesarlo. No tiene partes móviles ni regulación: es simple y económico. Típico de heladeras y equipos chicos.">
        <svg viewBox="0 0 320 150" className="mt-3 w-full text-sky" role="img" aria-label="Tubo capilar: caño fino en espiral entre el condensador y el evaporador.">
          <ArrowDefinitions id={id} />
          <path d="M 10 75 H 60" stroke="var(--destructive)" strokeWidth="5" />
          <path d="M 60 75 q 10 -30 25 0 q 10 -30 25 0 q 10 -30 25 0 q 10 -30 25 0 q 10 -30 25 0 q 10 -30 25 0 q 10 -30 25 0 q 10 -30 25 0" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 260 75 H 310" stroke="currentColor" strokeWidth="5" markerEnd={`url(#${id})`} />
          <text x="14" y="60" fontSize="11" fontWeight="700" fill="var(--destructive)">Alta presión</text>
          <text x="252" y="60" fontSize="11" fontWeight="700" fill="var(--sky)">Baja presión</text>
          <text x="160" y="135" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Caño fino: la presión cae por rozamiento</text>
        </svg>
      </DiagramCard>
      <DiagramCard title="Válvula de expansión termostática" note="Regula sola el paso de refrigerante: un bulbo con gas mide la temperatura a la salida del evaporador y abre o cierra la válvula. Más precisa; típica de equipos medianos y grandes.">
        <svg viewBox="0 0 320 150" className="mt-3 w-full text-sky" role="img" aria-label="Válvula de expansión termostática con bulbo sensor a la salida del evaporador.">
          <ArrowDefinitions id={id} />
          <path d="M 10 100 H 90" stroke="var(--destructive)" strokeWidth="5" />
          <rect x="90" y="80" width="50" height="40" rx="6" fill="var(--secondary)" stroke="currentColor" strokeWidth="2" />
          <path d="M 140 100 H 300" stroke="currentColor" strokeWidth="5" markerEnd={`url(#${id})`} />
          <circle cx="260" cy="40" r="16" fill="var(--sky-soft)" stroke="currentColor" strokeWidth="2" />
          <path d="M 252 52 Q 200 90 115 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="14" y="85" fontSize="11" fontWeight="700" fill="var(--destructive)">Alta presión</text>
          <text x="240" y="135" fontSize="11" fontWeight="700" fill="var(--sky)">Baja presión</text>
          <text x="260" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--foreground)">Bulbo</text>
        </svg>
      </DiagramCard>
    </div>
    <p className="mt-4 border-t pt-3 text-xs leading-relaxed text-muted-foreground">Los dos cumplen la misma doble misión: bajar bruscamente la presión del líquido y dosificar el refrigerante que entra al evaporador. Esquemas conceptuales, no de instalación.</p>
  </div>;
}

export function RefrigerantCompareDiagram() {
  const rows = [
    { name: "R-22", gwp: 1810, pct: 87, note: "Daña la capa de ozono. En retiro: ya no se fabrican equipos nuevos con este gas.", color: "var(--muted-foreground)" },
    { name: "R-410A", gwp: 2090, pct: 100, note: "No daña el ozono, pero alto efecto invernadero. No inflamable (A1). Muy usado en splits.", color: "var(--destructive)" },
    { name: "R-32", gwp: 675, pct: 32, note: "Menor efecto invernadero. Levemente inflamable (A2L): exige precauciones extra.", color: "var(--sky)" },
  ];
  return <figure className="mt-4">
    <div className="space-y-4">
      {rows.map((r) => <div key={r.name} className="rounded-xl border p-3">
        <div className="flex items-baseline justify-between gap-2">
          <p className="font-bold text-primary">{r.name}</p>
          <p className="text-sm font-bold" style={{ color: r.color }}>GWP ≈ {r.gwp}</p>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-secondary"><div className="h-3 rounded-full" style={{ width: `${r.pct}%`, background: r.color }} /></div>
        <p className="mt-2 text-sm text-muted-foreground">{r.note}</p>
      </div>)}
    </div>
    <figcaption className="mt-4 border-t pt-3 text-xs leading-relaxed text-muted-foreground">GWP (potencial de calentamiento global): cuánto calienta el planeta un kilo de ese gas comparado con un kilo de CO₂. Valores aproximados de referencia; las cifras exactas dependen de la fuente oficial (IPCC) y deben verificarse antes de citarse.</figcaption>
  </figure>;
}

export function InverterCurveDiagram() {
  return <figure className="mt-4">
    <div className="pilot-chart-legend">
      <p><span className="pilot-line-conventional" />On/off: prende y para, la temperatura sube y baja</p>
      <p><span className="pilot-line-inverter" />Inverter: estable</p>
    </div>
    <svg viewBox="0 0 640 260" className="w-full" role="img" aria-label="Gráfico de temperatura en el tiempo: el equipo on/off oscila alrededor de la temperatura elegida; el inverter se mantiene estable.">
      <line x1="50" y1="20" x2="50" y2="220" stroke="var(--muted-foreground)" strokeWidth="1.5" />
      <line x1="50" y1="220" x2="620" y2="220" stroke="var(--muted-foreground)" strokeWidth="1.5" />
      <text x="22" y="135" textAnchor="middle" fontSize="18" fill="var(--foreground)" transform="rotate(-90 22 135)">Temperatura</text>
      <text x="600" y="250" textAnchor="end" fontSize="18" fill="var(--foreground)">Tiempo →</text>
      <line x1="50" y1="110" x2="620" y2="110" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="615" y="98" textAnchor="end" fontSize="18" fontWeight="700" fill="var(--foreground)">Temperatura elegida</text>
      <path d="M 50 40 L 110 110 L 170 180 L 230 110 L 290 40 L 350 110 L 410 180 L 470 110 L 530 40 L 590 110 L 620 140" fill="none" stroke="var(--destructive)" strokeWidth="3" strokeDasharray="9 5" />
      <path d="M 50 40 Q 140 108 220 110 H 620" fill="none" stroke="var(--success)" strokeWidth="4" />
    </svg>
    <figcaption className="mt-4 border-t pt-3 text-xs leading-relaxed text-muted-foreground">Gráfico conceptual, sin escala numérica. El equipo convencional trabaja a potencia fija: arranca al máximo y se detiene al llegar a la temperatura elegida. El inverter regula la velocidad del compresor y se mantiene cerca del valor elegido, con menos picos de consumo.</figcaption>
  </figure>;
}

export function ReversingValveDiagram() {
  const id = useId();
  const Mode = ({ heat }: { heat: boolean }) => {
    const hot = "var(--destructive)";
    const cold = "var(--sky)";
    const outColor = heat ? cold : hot;
    const inColor = heat ? hot : cold;
    return <svg viewBox="0 0 340 220" className="mt-3 w-full" role="img" aria-label={heat ? "Modo calor: la unidad interior recibe el gas caliente y calefacciona." : "Modo frío: la unidad exterior recibe el gas caliente y expulsa el calor."}>
      <ArrowDefinitions id={id} />
      <rect x="120" y="80" width="100" height="60" rx="8" fill="var(--secondary)" stroke="var(--foreground)" strokeWidth="2" />
      <text x="170" y="106" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--foreground)">Válvula</text>
      <text x="170" y="124" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--foreground)">inversora</text>
      <rect x="10" y="20" width="90" height="46" rx="8" fill="var(--secondary)" stroke="var(--foreground)" strokeWidth="2" />
      <text x="55" y="48" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--foreground)">Compresor</text>
      <rect x="240" y="20" width="90" height="46" rx="8" fill={heat ? "var(--sky-soft)" : "var(--destructive-soft)"} stroke={outColor} strokeWidth="2" />
      <text x="285" y="40" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--foreground)">Unidad</text>
      <text x="285" y="56" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--foreground)">exterior</text>
      <rect x="240" y="154" width="90" height="46" rx="8" fill={heat ? "var(--destructive-soft)" : "var(--sky-soft)"} stroke={inColor} strokeWidth="2" />
      <text x="285" y="176" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--foreground)">Unidad</text>
      <text x="285" y="192" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--foreground)">interior</text>
      <path d={heat ? "M 100 43 H 150 V 80" : "M 100 43 H 170 V 80"} fill="none" stroke={hot} strokeWidth="3" markerEnd={`url(#${id})`} />
      <path d={heat ? "M 220 110 H 285 V 154" : "M 220 110 H 285 V 66"} fill="none" stroke={heat ? hot : hot} strokeWidth="3" markerEnd={`url(#${id})`} />
      <path d={heat ? "M 240 177 H 170 V 140" : "M 285 154 V 110 H 220"} fill="none" stroke={cold} strokeWidth="3" markerEnd={`url(#${id})`} />
      <path d={heat ? "M 150 140 V 66 H 100" : "M 190 80 V 43 H 240"} fill="none" stroke={heat ? cold : hot} strokeWidth="0" />
      <path d={heat ? "M 120 110 H 55 V 66" : "M 120 110 H 55 V 66"} fill="none" stroke={cold} strokeWidth="3" markerEnd={`url(#${id})`} />
      <text x="170" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill={hot}>{heat ? "Gas caliente → adentro" : "Gas caliente → afuera"}</text>
      <text x="170" y="212" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">{heat ? "La unidad interior entrega calor" : "La unidad interior entrega frío"}</text>
    </svg>;
  };
  return <div>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <DiagramCard title="Modo frío" note="La válvula dirige el gas caliente del compresor hacia la unidad exterior, que expulsa el calor. La unidad interior enfría.">
        <Mode heat={false} />
      </DiagramCard>
      <DiagramCard title="Modo calor" note="La válvula invierte el recorrido: el gas caliente va a la unidad interior, que calefacciona. La unidad exterior absorbe calor del aire de afuera.">
        <Mode heat />
      </DiagramCard>
    </div>
    <p className="mt-4 border-t pt-3 text-xs leading-relaxed text-muted-foreground">Esquema conceptual simplificado: la válvula de cuatro vías cambia a qué unidad llega la descarga caliente del compresor. Los serpentines no cambian: lo que cambia es el rol que cumple cada uno.</p>
  </div>;
}