import { Link, useRouterState } from "@tanstack/react-router";
import { Home, GraduationCap, BookOpen, BarChart3, Snowflake, ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { courseOverview } from "@/lib/course-overview";
import { useProgress } from "@/lib/progress";

const nav = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/academia", label: "Academia", icon: GraduationCap },
  { to: "/biblioteca", label: "Biblioteca", icon: BookOpen },
  { to: "/progreso", label: "Mi progreso", icon: BarChart3 },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const active = (to: string) => (to === "/" ? path === "/" : path.startsWith(to) || (to === "/academia" && path.startsWith("/leccion")));
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <header className="sticky top-0 z-30 border-b bg-primary text-primary-foreground backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-primary-foreground">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground"><Snowflake className="h-4 w-4" /></span>
            <span>ClimaPro<span className="block text-[10px] font-medium text-primary-foreground/80">ACADEMIA DE CLIMATIZACIÓN</span></span>
          </Link>
          <nav className="hidden gap-1 md:flex">
            {nav.map((n) => (
                <Link key={n.to} to={n.to} aria-current={active(n.to) ? "page" : undefined} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${active(n.to) ? "bg-primary-foreground/10 text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"}`}>
                  <n.icon className={`h-4 w-4 ${active(n.to) ? "text-accent" : ""}`} />{n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="app-content mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">{children}</main>
      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t bg-card md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className={`flex flex-col items-center gap-1 py-2 text-[11px] font-semibold ${active(n.to) ? "text-primary" : "text-muted-foreground"}`}>
            <n.icon className={`h-5 w-5 ${active(n.to) ? "text-accent" : ""}`} />
            {n.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary" role="progressbar" aria-label="Clases completadas" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${value}%` }} />
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`course-card rounded-lg border bg-card p-5 shadow-card ${className}`}>{children}</div>;
}

export function LocalNotice() {
  return <p className="text-xs text-muted-foreground">Tu progreso se guarda solo en este navegador y todavía no se sincroniza entre dispositivos.</p>;
}

export function CourseProgress() {
  const { progress } = useProgress();
  const { done, total, percent, next } = courseOverview(progress.completed);
  return (
    <section className="course-progress mt-7 border-y py-6" aria-label="Tu progreso">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <div className="mb-3 flex items-baseline justify-between gap-3"><h2 className="text-lg font-bold">Tu progreso</h2><span className="font-display text-2xl font-bold text-primary">{percent}%</span></div>
          <ProgressBar value={percent} />
          <p className="mt-3 text-sm text-muted-foreground">{done} de {total} clases disponibles completadas</p>
        </div>
        <div className="md:max-w-xs">
          {next ? <><Button asChild size="lg" className="h-auto min-h-11 w-full whitespace-normal px-5"><Link to="/leccion/$lessonId" params={{ lessonId: next.id }}>{done ? "Continuar donde lo dejé" : "Empezar el curso"}<ArrowRight /></Link></Button><p className="mt-2 text-sm text-muted-foreground">{next.title}</p></>
            : <><p className="mb-3 flex items-center gap-2 font-semibold text-success"><CheckCircle2 className="h-5 w-5" />Completaste las clases disponibles</p><Button asChild variant="outline"><Link to="/progreso">Ver mi progreso<ArrowRight /></Link></Button></>}
        </div>
      </div>
      <div className="mt-4"><LocalNotice /></div>
    </section>
  );
}
