import { useState } from "react";
import { ChevronLeft, ChevronRight, Focus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ComponentInspector({ parts }: { parts: { name: string; description: string }[] }) {
  const [selected, setSelected] = useState(0);
  return <div className="component-inspector mt-4">
    <div className="grid gap-2 sm:grid-cols-2">{parts.map((part, index) => <Button key={part.name} variant="outline" aria-pressed={selected === index} onClick={() => setSelected(index)} className="component-selector h-auto min-h-12 justify-start whitespace-normal text-left"><span className="component-dot shrink-0">{index + 1}</span>{part.name}</Button>)}</div>
    <div className="component-description mt-4" aria-live="polite"><Focus className="h-5 w-5 text-sky" /><h3 className="mt-2 font-bold">{parts[selected]?.name}</h3><p className="mt-2 text-sm">{parts[selected]?.description}</p></div>
  </div>;
}

/** A reading position, never an activity completion or authorization to intervene. */
export function ActivitySequence({ steps }: { steps: string[] }) {
  const [active, setActive] = useState(0);
  return <div className="activity-sequence mt-4">
    <div className="flex items-center justify-between gap-3 border-y py-3"><span className="text-sm text-sky">Paso {active + 1} de {steps.length}</span><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Paso anterior" disabled={active === 0} onClick={() => setActive(active - 1)}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label="Paso siguiente" disabled={active >= steps.length - 1} onClick={() => setActive(active + 1)}><ChevronRight /></Button></div></div>
    <ol className="mt-3 space-y-2">{steps.map((step, index) => <li key={step} className={`activity-step ${index === active ? "is-current" : ""}`} aria-current={index === active ? "step" : undefined}><span className="shrink-0 text-sky">{index + 1}.</span><p>{step}</p></li>)}</ol>
  </div>;
}