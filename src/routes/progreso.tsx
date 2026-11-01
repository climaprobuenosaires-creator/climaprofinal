import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Circle } from "lucide-react";
import { availableLessons } from "@/content/course";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";
import { AppShell, Card, CourseProgress } from "@/components/ui-kit";

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
  return (
    <AppShell>
      <h1 className="text-2xl font-bold">Mi progreso</h1>
      <CourseProgress />
      <Card className="mt-4">
        <h2 className="text-lg font-bold">Clases y evaluaciones</h2>
        <ul className="mt-2 divide-y">
          {availableLessons.map((l) => {
            const isDone = progress.completed.includes(l.id);
            const r = progress.quiz[l.id];
            return (
              <li key={l.id} className="progress-lesson-row grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 py-3 sm:flex">
                {isDone ? <CheckCircle2 className="h-5 w-5 text-success" /> : <Circle className="h-5 w-5 text-muted-foreground" />}
                <Link to="/leccion/$lessonId" params={{ lessonId: l.id }} className="flex-1 font-semibold">{l.title}</Link>
                <span className="col-start-2 text-sm text-muted-foreground">{r ? `Cuestionario: ${r.score}/${r.total}` : "Sin evaluar"}</span>
              </li>
            );
          })}
        </ul>
      </Card>
      <Button variant="link" onClick={() => confirm("¿Borrar todo tu progreso guardado en este navegador?") && reset()} className="mt-4 text-sm font-semibold text-destructive">Reiniciar progreso</Button>
    </AppShell>
  );
}
