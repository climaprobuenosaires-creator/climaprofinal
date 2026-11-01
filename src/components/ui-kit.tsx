import { Link, useRouterState } from "@tanstack/react-router";
import { Home, GraduationCap, BookOpen, BarChart3, Snowflake, ArrowRight, CheckCircle2, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState, type ReactNode } from "react";
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
  const [collapsed, setCollapsed] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const active = (to: string) => (to === "/" ? path === "/" : path.startsWith(to) || (to === "/academia" && path.startsWith("/leccion")));
  return (
    <div className={`academy-shell min-h-screen pb-20 md:pb-0 ${collapsed ? "nav-collapsed" : ""}`}>
      <header className="sticky top-0 z-30 border-b bg-card/90 text-foreground backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-primary-foreground">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-sky"><Snowflake className="h-4 w-4" /></span>
            <span>Clima<span className="text-sky">Pro</span><span className="block text-[10px] font-medium text-muted-foreground">ACADEMIA DE CLIMATIZACIÓN</span></span>
          </Link>
          <nav className="hidden gap-1 lg:flex">
            {nav.map((n) => (
                  <Link key={n.to} to={n.to} aria-current={active(n.to) ? "page" : undefined} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${active(n.to) ? "bg-secondary text-primary" : "text-muted-foreground hover:text-primary"}`}>
                  <n.icon className={`h-4 w-4 ${active(n.to) ? "text-accent" : ""}`} />{n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <aside className="academy-sidebar hidden md:flex" aria-label="Navegación lateral">
        <Button variant="ghost" size="icon" className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)} aria-label={collapsed ? "Expandir navegación" : "Contraer navegación"}>{collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}</Button>
        <p className="sidebar-caption text-xs font-bold text-muted-foreground">MI ACADEMIA</p>
        {nav.map((n) => <Link key={n.to} to={n.to} title={n.label} aria-current={active(n.to) ? "page" : undefined} className={`sidebar-link ${active(n.to) ? "is-active" : ""}`}><n.icon className="h-5 w-5 shrink-0" /><span>{n.label}</span></Link>)}
        <div className="sidebar-footer"><Snowflake className="h-7 w-7 text-sky" /><p className="sidebar-caption mt-3 text-xs text-muted-foreground">Aprendé. Practicá.<br />Seguí avanzando.</p></div>
      </aside>
      <div className="academy-main"><main key={path} className="app-content mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">{children}</main></div>
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
        <div className="flex min-w-0 items-center gap-5">
          <div className="progress-orbit shrink-0" style={{ "--progress": `${percent}%` } as React.CSSProperties}><span>{percent}<small>%</small></span></div>
          <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-baseline justify-between gap-3"><h2 className="text-lg font-bold">Tu progreso</h2><span className="font-display text-2xl font-bold text-primary">{percent}%</span></div>
          <ProgressBar value={percent} />
          <p className="mt-3 text-sm text-muted-foreground">{done} de {total} clases disponibles completadas</p>
          </div>
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
