import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Box } from "lucide-react";
import { library } from "@/content/course";
import { AppShell } from "@/components/ui-kit";

export const Route = createFileRoute("/biblioteca")({
  head: () => ({
    meta: [
      { title: "Biblioteca técnica — ClimaPro" },
      { name: "description", content: "Buscador de componentes y conceptos de climatización." },
      { property: "og:title", content: "Biblioteca técnica — ClimaPro" },
      { property: "og:description", content: "Componentes, conceptos y seguridad en climatización." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Biblioteca,
});

const cats = ["Todos", "Componente", "Concepto", "Herramienta", "Seguridad"] as const;

function Biblioteca() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof cats)[number]>("Todos");
  const items = library.filter((i) => (cat === "Todos" || i.category === cat) && (i.name + i.description).toLowerCase().includes(q.toLowerCase()));
  return (
    <AppShell>
      <h1 className="text-2xl font-bold">Biblioteca técnica</h1>
      <div className="relative mt-4">
        <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar componente o concepto…" className="w-full rounded-xl border bg-card py-3 pl-9 pr-3 outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {cats.map((c) => <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold ${cat === c ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"}`}>{c}</button>)}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.id} className="overflow-hidden rounded-2xl border bg-card shadow-card">
            {i.image ? <img src={i.image} alt={i.name} loading="lazy" className="aspect-[16/9] w-full object-cover" /> : <div className="grid aspect-[16/9] place-items-center bg-sky-soft"><Box className="h-10 w-10 text-sky" /></div>}
            <div className="p-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-sky">{i.category}</span>
              <h2 className="font-bold">{i.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{i.description}</p>
              {i.lessonId && <Link to="/leccion/$lessonId" params={{ lessonId: i.lessonId }} className="mt-2 inline-block text-sm font-bold text-primary">Ver en la clase →</Link>}
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && <p className="mt-6 text-center text-muted-foreground">No hay resultados para tu búsqueda.</p>}
    </AppShell>
  );
}
