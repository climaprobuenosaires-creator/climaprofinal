import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Circle, Lock, PlayCircle, ShieldAlert, GraduationCap, BookOpen } from "lucide-react";
import { modules, isAvailable, PLANNED_LESSONS, countCompleted } from "@/content/course";
import { useProgress } from "@/lib/progress";
import { AppShell, Card, ProgressBar, CourseProgress } from "@/components/ui-kit";
import { courseOverview } from "@/lib/course-overview";

export const Route = createFileRoute("/academia")({
  head: () => ({
    meta: [
      { title: "Academia — ClimaPro" },
      { name: "description", content: "Módulos y clases del curso de climatización ClimaPro." },
      { property: "og:title", content: "Academia — ClimaPro" },
      { property: "og:description", content: "Explorá los módulos y clases del curso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Academia,
});

function Academia() {
  const { progress } = useProgress();
  const overview = courseOverview(progress.completed);
  return (
    <AppShell>
      <header className="academy-heading">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold text-primary"><GraduationCap className="h-5 w-5" />Formación técnica · {overview.levels.join(" y ")}</p>
        <h1 className="max-w-3xl text-3xl font-bold md:text-4xl">ClimaPro — Academia de climatización</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Instalación, mantenimiento y reparación de aires acondicionados desde cero.</p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm"><span><b>{overview.availableModules}</b> módulos disponibles</span><span><b>{overview.total}</b> clases disponibles</span><span className="text-muted-foreground">Plan completo: {modules.length} módulos · {PLANNED_LESSONS} clases previstas</span></div>
      </header>
      <CourseProgress />
      <h2 className="mb-5 mt-9 flex items-center gap-2 text-xl font-bold"><BookOpen className="h-5 w-5 text-primary" />Plan de estudios</h2>
      <div className="space-y-6">
        {modules.map((m, mi) => {
          const offset = modules.slice(0, mi).reduce((n, x) => n + x.lessons.length, 0);
          const avail = m.lessons.filter(isAvailable);
           const done = countCompleted(avail.filter((l) => progress.completed.includes(l.id)).map((l) => l.id));
          return (
            <Card key={m.id} className={`module-card ${avail.length ? "" : "module-upcoming"}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-sky">Nivel {m.level} · Módulo {m.number}</p>
              <h2 className="mt-1 text-xl font-bold">{m.title}</h2>
              <p className="text-sm text-muted-foreground">{m.description}</p>
              {avail.length > 0 ? <div className="mt-4 flex items-center gap-4"><ProgressBar value={(done / avail.length) * 100} /><span className="shrink-0 text-xs font-semibold text-muted-foreground">{done}/{avail.length} completadas</span></div> : <p className="mt-3 text-xs font-semibold text-muted-foreground">Próximamente</p>}
              <ul className="mt-4 divide-y">
                {m.lessons.map((l, i) => {
                  const ready = isAvailable(l);
                  const isDone = ready && progress.completed.includes(l.id);
                  const Icon = isDone ? CheckCircle2 : ready ? PlayCircle : Lock;
                  const content = (
                    <div className="lesson-row flex items-start gap-3 py-4 sm:items-center">
                      <Icon className={`h-5 w-5 shrink-0 ${isDone ? "text-success" : ready ? "text-sky" : "text-muted-foreground"}`} />
                      <div className="min-w-0 flex-1">
                        <p className={`font-semibold ${ready ? "" : "text-muted-foreground"}`}>{offset + i + 1}. {l.title}</p>
                        <p className="text-xs text-muted-foreground">{l.summary}</p>
                        {(l.risk || (ready && l.review !== "aprobada")) && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {l.risk && <span className="inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 text-[10px] font-bold text-warning"><ShieldAlert className="h-3 w-3" />Requiere supervisión profesional</span>}
                            {ready && l.review !== "aprobada" && <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground">Revisión técnica pendiente</span>}
                          </div>
                        )}
                      </div>
                      <span className={`lesson-state shrink-0 rounded-md px-2 py-1 text-[11px] font-bold ${isDone ? "bg-success-soft text-success" : ready ? "bg-sky-soft text-primary" : "bg-muted text-muted-foreground"}`}>
                        {isDone ? "Completada" : ready ? "Disponible" : "Próximamente"}
                      </span>
                    </div>
                  );
                  return <li key={l.id}>{ready ? <Link to="/leccion/$lessonId" params={{ lessonId: l.id }}>{content}</Link> : content}</li>;
                })}
              </ul>
            </Card>
          );
        })}
      </div>
      <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><Circle className="h-3 w-3" />Nuevas clases se agregarán progresivamente.</p>
    </AppShell>
  );
}
