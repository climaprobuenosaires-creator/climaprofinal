import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Circle } from "lucide-react";
import { availableLessons, countCompleted, PLANNED_LESSONS } from "@/content/course";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";
import { AppShell, Card, ProgressBar, LocalNotice } from "@/components/ui-kit";

export const Route = createFileRoute("/progreso")({
  head: () => ({
    meta: [
      { title: "Mi progreso — ClimaPro" },
      { name: "description", content: "Clases completadas y resultados de evaluaciones." },
      { property: "og:title", content: "Mi progreso — ClimaPro" },
      { property: "og:description", content: "Seguí tu avance en el curso de climatización." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Progreso,
});

function Progreso() {
  const { progress, reset } = useProgress();
  const done = countCompleted(progress.completed);
  return (
    <AppShell>
      <h1 className="text-2xl font-bold">Mi progreso</h1>
      <Card className="mt-4">
        <p className="text-4xl font-bold text-primary">{done}<span className="text-lg text-muted-foreground"> / {availableLessons.length}</span></p>
        <p className="text-sm text-muted-foreground">clases disponibles completadas ({PLANNED_LESSONS} planificadas en total)</p>
        <div className="mt-3"><ProgressBar value={(done / availableLessons.length) * 100} /></div>
        <div className="mt-3"><LocalNotice /></div>
      </Card>
      <Card className="mt-4">
        <h2 className="text-lg font-bold">Clases y evaluaciones</h2>
        <ul className="mt-2 divide-y">
          {availableLessons.map((l) => {
            const isDone = progress.completed.includes(l.id);
            const r = progress.quiz[l.id];
            return (
              <li key={l.id} className="flex items-center gap-3 py-3">
                {isDone ? <CheckCircle2 className="h-5 w-5 text-success" /> : <Circle className="h-5 w-5 text-muted-foreground" />}
                <Link to="/leccion/$lessonId" params={{ lessonId: l.id }} className="flex-1 font-semibold">{l.title}</Link>
                <span className="text-sm text-muted-foreground">{r ? `Cuestionario: ${r.score}/${r.total}` : "Sin evaluar"}</span>
              </li>
            );
          })}
        </ul>
      </Card>
      <Button variant="link" onClick={() => confirm("¿Borrar todo tu progreso guardado en este navegador?") && reset()} className="mt-4 text-sm font-semibold text-destructive">Reiniciar progreso</Button>
    </AppShell>
  );
}
