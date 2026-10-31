import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldAlert, GraduationCap } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { modules, PLANNED_LESSONS } from "@/content/course";
import { useProgress } from "@/lib/progress";
import { courseOverview } from "@/lib/course-overview";
import { Button } from "@/components/ui/button";
import { AppShell, CourseProgress } from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClimaPro — Academia de climatización" },
      { name: "description", content: "Aprendé instalación, mantenimiento y reparación de aires acondicionados desde cero." },
      { property: "og:title", content: "ClimaPro — Academia de climatización" },
      { property: "og:description", content: "Curso en español para aprender climatización desde cero." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { progress } = useProgress();
  const { next, availableModules, total } = courseOverview(progress.completed);
  return (
    <AppShell>
      <section className="home-course relative overflow-hidden bg-hero text-primary-foreground">
        <img src={hero} alt="Estudiante observando un equipo de aire acondicionado" width={1536} height={864} className="absolute inset-0 h-full w-full object-cover" />
        <div className="home-course-copy relative px-6 py-10 md:px-10 md:py-14">
          <p className="flex items-center gap-2 text-sm font-semibold"><GraduationCap className="h-5 w-5" />Academia de climatización</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">ClimaPro</h1>
          <p className="mt-4 max-w-lg text-lg">Aprendé instalación, mantenimiento y reparación de aires acondicionados desde cero.</p>
          <Button asChild variant="secondary" className="mt-6 h-11"><Link to="/academia">Explorar el curso<ArrowRight /></Link></Button>
        </div>
      </section>
      <CourseProgress />
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">{next ? "Siguiente clase" : "Tu recorrido"}</h2>
          <p className="mt-3 font-semibold text-primary">{next?.title ?? "Todas las clases disponibles completadas"}</p>
          {next && <p className="mt-1 text-sm text-muted-foreground">{next.moduleTitle} · {next.minutes} min</p>}
        </div>
        <div>
          <h2 className="text-xl font-bold">Plan del curso</h2>
          <p className="mt-3 text-sm text-muted-foreground"><b className="text-foreground">{availableModules} módulos y {total} clases disponibles.</b> El plan completo contempla {modules.length} módulos y {PLANNED_LESSONS} clases.</p>
          <Link to="/academia" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary">Ver plan de estudios<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <div className="mt-4 flex gap-3 rounded-2xl border border-warning/30 bg-warning-soft p-4 text-sm">
        <ShieldAlert className="h-5 w-5 shrink-0 text-warning" />
        <p>ClimaPro es un recurso educativo. No es una certificación oficial ni reemplaza la capacitación práctica supervisada.</p>
      </div>
    </AppShell>
  );
}
