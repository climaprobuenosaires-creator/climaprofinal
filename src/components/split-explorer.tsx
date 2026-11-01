import { useState } from "react";
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
        <div className="split-equipment"><figure><img src={indoor} alt="Vista ilustrada de unidad interior" /><figcaption>Unidad interior · Absorbe calor</figcaption></figure><figure><img src={outdoor} alt="Vista ilustrada de unidad exterior" /><figcaption>Unidad exterior · Libera calor</figcaption></figure></div>
        <div className={`cycle-track ${playing ? "is-playing" : ""}`}>
          {nodes.map((item) => <Button key={item.id} variant="outline" aria-pressed={selected === item.id} onClick={() => setSelected(item.id)} className="cycle-node"><item.icon /><span>{library.find((entry) => entry.id === item.id)?.name}</span><span aria-hidden="true">→</span></Button>)}
        </div>
        <div className="split-explanation" aria-live="polite"><p className="text-xs font-bold text-sky">{node.phase}</p><h3 className="mt-2 text-xl font-bold">{part?.name}</h3><p className="mt-2 text-sm">{part?.description}</p><p className="mt-2 text-sm text-muted-foreground">{node.detail}</p></div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Esquema didáctico: no representa ubicación, escala ni velocidad real. El dispositivo de expansión y su ubicación varían según el equipo. No es una guía de intervención; revisión docente pendiente.</p>
    </section>
  );
}