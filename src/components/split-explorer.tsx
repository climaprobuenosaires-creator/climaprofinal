import { useId, useState } from "react";
import { Fan, Wind, Gauge, Waves, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { library } from "@/content/course";
import indoor from "@/assets/indoor-unit.jpg";
import outdoor from "@/assets/outdoor-unit.jpg";

const nodes = [
  { id: "compresor", icon: Gauge, phase: "01 · Compresión", detail: "Vapor de baja presión → vapor de alta presión." },
  { id: "condensador", icon: Fan, phase: "02 · Condensación", detail: "El refrigerante cede calor al exterior y se condensa." },
  { id: "expansion", icon: Waves, phase: "03 · Expansión", detail: "La reducción de presión produce una mezcla de líquido y vapor." },
  { id: "evaporador", icon: Wind, phase: "04 · Evaporación", detail: "El refrigerante absorbe calor interior y se evapora." },
];

export function SplitExplorer() {
  const arrowId = useId();
  const [selected, setSelected] = useState("compresor");
  const [playing, setPlaying] = useState(true);
  const node = nodes.find((item) => item.id === selected) ?? nodes[0];
  const part = library.find((item) => item.id === selected);
  return (
    <section className="split-explorer mt-10" aria-label="Explorador del ciclo frigorífico">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="min-w-0"><p className="text-xs font-bold uppercase text-sky">Sistema split · Modo frío</p><h2 className="mt-2 text-2xl font-bold">Dentro del ciclo frigorífico</h2></div>
        <Button variant="outline" size="icon" aria-label={playing ? "Pausar recorrido" : "Animar recorrido"} onClick={() => setPlaying(!playing)}>{playing ? <Pause /> : <Play />}</Button>
      </div>
      <div className="split-stage mt-5">
        <div className="split-equipment"><figure><img src={indoor} loading="lazy" alt="Vista ilustrada de unidad interior" /><figcaption>Unidad interior · Absorbe calor</figcaption></figure><figure><img src={outdoor} loading="lazy" alt="Vista ilustrada de unidad exterior" /><figcaption>Unidad exterior · Libera calor</figcaption></figure></div>
        <svg viewBox="0 0 600 230" className={`refrigerant-loop ${playing ? "is-playing" : ""}`} role="img" aria-label="Recorrido en modo frío: compresor, condensador, expansión, evaporador y retorno al compresor">
          <defs><marker id={arrowId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="var(--sky)" /></marker></defs>
          <path d="M110 45 H490 V185 H110 Z" className="flow-line" fill="none" stroke="var(--sky)" strokeWidth="3" />
          <path d="M255 45 H305 M490 85 V120 M350 185 H300 M110 145 V110" fill="none" stroke="var(--sky)" strokeWidth="3" markerEnd={`url(#${arrowId})`} />
          {nodes.map((item, i) => { const x = i === 0 || i === 3 ? 110 : 490; const y = i < 2 ? 45 : 185; return <g key={item.id}><circle cx={x} cy={y} r="19" fill={selected === item.id ? "var(--accent)" : "var(--card)"} stroke="var(--sky)" strokeWidth="2" /><text x={x} y={y + 5} textAnchor="middle" fill={selected === item.id ? "var(--accent-foreground)" : "var(--foreground)"} fontSize="15" fontWeight="700">{i + 1}</text><text x={x} y={y + (i < 2 ? 37 : -30)} textAnchor="middle" fill="var(--foreground)" fontSize="13">{library.find((part) => part.id === item.id)?.name}</text></g>; })}
          <text x="300" y="111" textAnchor="middle" fontSize="15" fill="var(--foreground)">Refrigerante · Circuito cerrado</text><text x="300" y="136" textAnchor="middle" fontSize="12" fill="var(--muted-foreground)">Las flechas indican el sentido del recorrido</text>
        </svg>
        <div className={`cycle-track ${playing ? "is-playing" : ""}`}>
          {nodes.map((item) => <Button key={item.id} variant="outline" aria-pressed={selected === item.id} onClick={() => setSelected(item.id)} className="cycle-node"><item.icon /><span>{library.find((entry) => entry.id === item.id)?.name}</span><span aria-hidden="true">→</span></Button>)}
        </div>
        <div className="split-explanation" aria-live="polite"><p className="text-xs font-bold text-sky">{node?.phase}</p><h3 className="mt-2 text-xl font-bold">{part?.name}</h3><p className="mt-2 text-sm">{part?.description}</p><p className="mt-2 text-sm text-muted-foreground">{node?.detail}</p></div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Esquema didáctico: no representa ubicación, escala ni velocidad real. El dispositivo de expansión y su ubicación varían según el equipo. No es una guía de intervención; revisión docente pendiente.</p>
    </section>
  );
}