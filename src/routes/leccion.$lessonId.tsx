import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight, Clock, ExternalLink, Target, BookOpen, ListChecks, ShieldAlert, GraduationCap, Video, XCircle, Eye } from "lucide-react";
import { availableLessons, getLesson, isAvailable } from "@/content/course";
import type { Section, QuizQuestion } from "@/content/types";
import { useProgress } from "@/lib/progress";
import { AppShell, Card, LocalNotice } from "@/components/ui-kit";
import { Button } from "@/components/ui/button";
import { InverterLessonSection } from "@/components/inverter-lesson-section";
import { SplitReferenceImage, ZoomableImage, splitReferenceUrl } from "@/components/split-reference-image";
import placaComponentes from "@/assets/m4-placa-componentes.jpg.asset.json";
import placaSensores from "@/assets/m4-placa-sensores.jpg.asset.json";
import puestaTierra from "@/assets/m4-puesta-tierra.jpg.asset.json";

// Imágenes didácticas con etiquetas densas: se muestran completas y con ampliación para celulares.
const zoomableUrls = new Set([placaComponentes.url, placaSensores.url, puestaTierra.url]);
import { PhaseChangesDiagram, PressureCircuitDiagram, CompressorTypesDiagram, HeatExchangersDiagram, ExpansionDevicesDiagram, RefrigerantCompareDiagram, InverterCurveDiagram, ReversingValveDiagram } from "@/components/refrigerant-diagrams";

export const Route = createFileRoute("/leccion/$lessonId")({
  loader: ({ params }) => {
    const lesson = getLesson(params.lessonId);
    if (!lesson || !isAvailable(lesson)) throw notFound();
    return { id: lesson.id, title: lesson.title, summary: lesson.summary };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — ClimaPro` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — ClimaPro` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Clase no disponible — ClimaPro" }, { name: "robots", content: "noindex" }],
  }),
  component: LessonPage,
});

function LessonPage() {
  const { id } = Route.useLoaderData();
  const lesson = getLesson(id);
  const { progress, toggleComplete } = useProgress();
  if (!lesson || !isAvailable(lesson)) throw notFound();
  const done = progress.completed.includes(id);
  const pilot = id === "inverter-vs-convencional";
  const position = availableLessons.findIndex((item) => item.id === id);
  const previous = availableLessons[position - 1];
  const next = availableLessons[position + 1];
  return (
    <AppShell>
      <article className={`lesson-article ${pilot ? "inverter-pilot" : ""} ${lesson.moduleId === "electricidad" ? "electrical-lesson-images" : ""}`}>
      <Link to="/academia" className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground"><ChevronLeft className="h-4 w-4" />Academia</Link>
      <p className="mt-3 text-xs font-bold uppercase tracking-widest text-sky">{lesson.moduleTitle}</p>
      <h1 className="mt-1 text-2xl font-bold md:text-3xl">{lesson.title}</h1>
      <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><Clock className="h-4 w-4" />{lesson.minutes} min</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {lesson.review === "aprobada"
          ? <span className="rounded-full bg-success-soft px-3 py-1 text-xs font-bold text-success">Revisada por instructor</span>
          : <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">Revisión técnica pendiente: contenido aún no validado por un instructor cualificado</span>}
        {lesson.risk && <span className="inline-flex items-center gap-1 rounded-full bg-warning-soft px-3 py-1 text-xs font-bold text-warning"><ShieldAlert className="h-3 w-3" />Tema de riesgo: requiere supervisión profesional</span>}
      </div>

      <div className={pilot ? "lesson-preparation pilot-preparation" : "lesson-preparation"}>
      {lesson.prerequisites && (
        <Card className="mt-5">
          <h2 className="flex items-center gap-2 text-lg font-bold"><ListChecks className="h-5 w-5 text-sky" />Conocimientos previos</h2>
          <ul className="mt-2 list-disc pl-5 text-sm">{lesson.prerequisites.map((x) => <li key={x}>{x}</li>)}</ul>
        </Card>
      )}

      {lesson.objectives && (
        <Card className="mt-5">
          <h2 className="flex items-center gap-2 text-lg font-bold"><Target className="h-5 w-5 text-sky" />Objetivos de aprendizaje</h2>
          <ul className="mt-3 space-y-2 text-sm">{lesson.objectives.map((o) => <li key={o} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky" />{o}</li>)}</ul>
        </Card>
      )}
      </div>

      <div className={pilot ? "lesson-sections pilot-sections" : "lesson-sections"}>{lesson.sections?.map((s, i) => pilot && ["text", "diagram", "list", "activity"].includes(s.type)
        ? <InverterLessonSection key={i} section={s} />
        : <SectionView key={i} s={s} />)}</div>

      {lesson.sources && (
        <Card className="mt-4">
          <h2 className="flex items-center gap-2 text-lg font-bold"><BookOpen className="h-5 w-5 text-sky" />Fuentes y referencias</h2>
          <ul className="mt-3 space-y-2">
            {lesson.sources.map((src) => (
              <li key={src.title} className="rounded-xl border p-3 text-sm">
                <p className="font-semibold">{src.title}</p>
                {src.verified && src.url
                  ? <a href={src.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-primary">Ver fuente <ExternalLink className="h-3 w-3" /></a>
                  : <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground">Pendiente de verificar</span>}
                {src.note && <p className="mt-1 text-xs text-muted-foreground">{src.note}</p>}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {lesson.quiz && <Quiz key={id} lessonId={id} questions={lesson.quiz} />}

      <Card className="mt-4 text-center">
        <Button variant={done ? "secondary" : "default"} onClick={() => toggleComplete(id)} className={`lesson-completion h-auto min-h-12 w-full whitespace-normal rounded-lg px-5 py-3 font-bold md:w-auto ${done ? "bg-success-soft text-success" : "bg-accent text-accent-foreground"}`}>
          {done ? "✓ Clase completada (desmarcar)" : "Marcar clase como completada"}
        </Button>
        <div className="mt-2"><LocalNotice /></div>
      </Card>
      <nav aria-label="Navegación entre clases" className="mt-5 grid gap-3 sm:grid-cols-2">
        {previous ? <Button asChild variant="outline" className="h-auto min-h-12 justify-start whitespace-normal text-left"><Link to="/leccion/$lessonId" params={{ lessonId: previous.id }}><ChevronLeft className="shrink-0" /><span>Clase anterior: {previous.title}</span></Link></Button> : <span />}
        {next ? <Button asChild variant="outline" className="h-auto min-h-12 justify-between whitespace-normal text-left"><Link to="/leccion/$lessonId" params={{ lessonId: next.id }}><span>Clase siguiente: {next.title}</span><ChevronRight className="shrink-0" /></Link></Button> : <Button asChild variant="outline"><Link to="/progreso">Ver mi progreso</Link></Button>}
      </nav>
      </article>
    </AppShell>
  );
}

function SectionView({ s }: { s: Section }) {
  switch (s.type) {
    case "text":
      return <Card>{s.title && <h2 className="text-lg font-bold">{s.title}</h2>}{s.paragraphs.map((p) => <p key={p} className="mt-2 leading-relaxed">{p}</p>)}</Card>;
    case "list":
      return <Card><h2 className="text-lg font-bold">{s.title}</h2><ul className="mt-2 list-disc pl-5">{s.items.map((x) => <li key={x}>{x}</li>)}</ul></Card>;
    case "parts":
      return (
        <Card>
          <h2 className="text-lg font-bold">{s.title}</h2>
          {s.image && (s.image === splitReferenceUrl ? <SplitReferenceImage /> : <div className="diagram-image-viewport"><img src={s.image} alt={s.title} loading="lazy" className="mt-3 w-full rounded-xl" /></div>)}
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {s.parts.map((p, i) => (
              <div key={p.name} className="rounded-xl bg-secondary p-3">
                <p className="font-bold text-primary"><span className="mr-2 inline-grid h-6 w-6 place-items-center rounded-full bg-sky text-xs text-accent-foreground">{i + 1}</span>{p.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </Card>
      );
    case "cycle":
      return <Card><h2 className="text-lg font-bold">{s.title}</h2><p className="mt-2">{s.intro}</p><CycleDiagram /></Card>;
    case "diagram": {
      const diagrams = {
        "phase-changes": <PhaseChangesDiagram />,
        "pressure-circuit": <PressureCircuitDiagram />,
        "compressor-types": <CompressorTypesDiagram />,
        "heat-exchangers": <HeatExchangersDiagram />,
        "expansion-devices": <ExpansionDevicesDiagram />,
        "refrigerant-compare": <RefrigerantCompareDiagram />,
        "inverter-curve": <InverterCurveDiagram />,
        "reversing-valve": <ReversingValveDiagram />,
      } as const;
      return <section className="rounded-lg border bg-card p-4 shadow-card md:p-5"><h2 className="text-lg font-bold">{s.title}</h2>{diagrams[s.kind]}</section>;
    }
    case "gallery":
      return (
        <Card>
          <h2 className="text-lg font-bold">{s.title}</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {s.images.map((img) => (
              img.src === splitReferenceUrl ? <SplitReferenceImage key={img.caption} /> : zoomableUrls.has(img.src) ? <ZoomableImage key={img.caption} src={img.src} title={s.title} note={img.caption} /> : <figure key={img.caption}><img src={img.src} alt={img.caption} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" /><figcaption className="mt-1 text-xs text-muted-foreground">{img.caption}</figcaption></figure>
            ))}
          </div>
        </Card>
      );
    case "videos":
      return (
        <Card>
          <h2 className="flex items-center gap-2 text-lg font-bold"><Video className="h-5 w-5 text-sky" />{s.title}</h2>
          <p className="mt-1 text-xs text-muted-foreground">Recursos externos recomendados. No forman parte del contenido propio de ClimaPro.</p>
          <ul className="mt-3 space-y-2">
            {s.videos.map((v) => (
              <li key={v.title} className="rounded-xl border p-3">
                <p className="font-semibold">{v.title}</p>
                {v.author && <p className="mt-1 text-sm text-muted-foreground">{v.author}</p>}
                {v.learning && <p className="mt-2 text-sm leading-relaxed">{v.learning}</p>}
                {v.url ? <a href={v.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-primary">Ver video externo <ExternalLink className="h-3 w-3" /></a> : <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground">Pendiente de incorporar</span>}
                {v.verification && <p className="mt-2 border-l-2 border-warning pl-3 text-xs leading-relaxed text-muted-foreground">{v.verification}</p>}
                <p className="mt-1 text-xs text-muted-foreground">{v.note}</p>
              </li>
            ))}
          </ul>
        </Card>
      );
    case "activity":
      return (
        <Card>
          <h2 className="flex items-center gap-2 text-lg font-bold"><Eye className="h-5 w-5 text-sky" />{s.title}</h2>
          <p className="mt-2">{s.intro}</p>
          <ol className="mt-3 space-y-2">{s.steps.map((st, i) => <li key={st} className="flex gap-3 text-sm"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-primary">{i + 1}</span>{st}</li>)}</ol>
        </Card>
      );
    case "supervised":
      return (
        <Card>
          <h2 className="text-lg font-bold">{s.title}</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-secondary p-4">
              <p className="flex items-center gap-2 font-bold text-primary"><GraduationCap className="h-4 w-4" />Teoría: podés estudiarlo</p>
              <ul className="mt-2 space-y-1 text-sm">{s.theory.map((x) => <li key={x}>• {x}</li>)}</ul>
            </div>
            <div className="rounded-xl border border-warning/30 bg-warning-soft p-4">
              <p className="flex items-center gap-2 font-bold text-warning"><ShieldAlert className="h-4 w-4" />Solo con capacitación, herramientas adecuadas y supervisión</p>
              <ul className="mt-2 space-y-1 text-sm">{s.requiresSupervision.map((x) => <li key={x}>• {x}</li>)}</ul>
            </div>
          </div>
        </Card>
      );
    case "warning":
      return (
        <div className="rounded-2xl border border-warning/30 bg-warning-soft p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-warning"><AlertTriangle className="h-5 w-5" />{s.title}</h2>
          <ul className="mt-2 space-y-2 text-sm">{s.items.map((x) => <li key={x}>• {x}</li>)}</ul>
        </div>
      );
  }
}

function CycleDiagram() {
  const steps = [
    { n: "1", name: "Compresor", text: "Comprime el gas refrigerante: sube su presión y temperatura.", where: "Unidad exterior" },
    { n: "2", name: "Condensador", text: "El gas caliente libera calor al aire de afuera y se vuelve líquido.", where: "Unidad exterior" },
    { n: "3", name: "Dispositivo de expansión", text: "Baja bruscamente la presión del líquido, que se enfría mucho.", where: "Entre unidades" },
    { n: "4", name: "Evaporador", text: "El refrigerante frío absorbe calor del ambiente y se evapora.", where: "Unidad interior" },
  ];
  return (
    <div className="mt-4">
      <svg viewBox="0 0 320 220" className="mx-auto w-full max-w-md" role="img" aria-label="Esquema del ciclo frigorífico">
        <rect x="10" y="10" width="300" height="200" rx="20" fill="none" stroke="var(--sky)" strokeWidth="3" strokeDasharray="6 5" />
        {[
          { x: 160, y: 10, n: "1", label: "Compresor", c: "var(--destructive)" },
          { x: 310, y: 110, n: "2", label: "Condensador", c: "var(--destructive)" },
          { x: 160, y: 210, n: "3", label: "Expansión", c: "var(--sky)" },
          { x: 10, y: 110, n: "4", label: "Evaporador", c: "var(--sky)" },
        ].map((p) => (
          <g key={p.n}>
            <circle cx={p.x} cy={p.y} r="16" fill={p.c} />
            <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--primary-foreground)">{p.n}</text>
            <text x={p.x === 10 ? 34 : p.x === 310 ? 286 : p.x} y={p.y === 10 ? 44 : p.y === 210 ? 192 : p.y + 5} textAnchor={p.x === 10 ? "start" : p.x === 310 ? "end" : "middle"} fontSize="12" fontWeight="700" fill="var(--foreground)">{p.label}</text>
          </g>
        ))}
        <text x="160" y="105" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Circuito cerrado</text>
        <text x="160" y="122" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">1 → 2 → 3 → 4 → 1</text>
      </svg>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {steps.map((s) => (
          <div key={s.n} className="rounded-xl bg-secondary p-3 text-sm">
            <p className="font-bold text-primary">{s.n}. {s.name} <span className="font-normal text-muted-foreground">· {s.where}</span></p>
            <p className="mt-1">{s.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Rojo: zona caliente (alta presión). Celeste: zona fría (baja presión).</p>
    </div>
  );
}

function Quiz({ lessonId, questions }: { lessonId: string; questions: QuizQuestion[] }) {
  const { saveQuiz, progress } = useProgress();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);
  const score = questions.filter((q) => answers[q.id] === q.correct).length;
  const prev = progress.quiz[lessonId];
  return (
    <Card className="mt-4">
      <h2 className="text-lg font-bold">Cuestionario</h2>
      {prev && <p className="text-xs text-muted-foreground">Último resultado: {prev.score}/{prev.total}</p>}
      <div className="mt-3 space-y-5">
        {questions.map((q, qi) => (
          <fieldset key={q.id}>
            <legend className="font-semibold">{qi + 1}. {q.question}</legend>
            <div className="mt-2 space-y-2">
              {q.options.map((o, oi) => {
                const sel = answers[q.id] === oi;
                const state = checked ? (oi === q.correct ? "border-success bg-success-soft" : sel ? "border-destructive bg-destructive-soft" : "") : sel ? "border-sky bg-sky-soft" : "";
                return (
                  <Button variant="outline" aria-pressed={sel} key={o} disabled={checked} onClick={() => setAnswers({ ...answers, [q.id]: oi })} className={`quiz-option h-auto min-h-12 w-full justify-start whitespace-normal rounded-lg border p-3 text-left text-sm font-normal ${state}`}>
                    {checked && oi === q.correct ? <CheckCircle2 className="h-4 w-4 shrink-0 text-success" /> : checked && sel ? <XCircle className="h-4 w-4 shrink-0 text-destructive" /> : <span className={`h-4 w-4 shrink-0 rounded-full border-2 ${sel ? "border-sky bg-sky" : ""}`} />}
                    {o}
                  </Button>
                );
              })}
            </div>
            {checked && <p className="mt-2 rounded-lg bg-secondary p-2 text-sm"><b>{answers[q.id] === q.correct ? "¡Correcto! " : "Incorrecto. "}</b>{q.explanation}</p>}
          </fieldset>
        ))}
      </div>
      {!checked ? (
        <Button disabled={Object.keys(answers).length < questions.length} onClick={() => { setChecked(true); saveQuiz(lessonId, score, questions.length); }} className="mt-4 h-auto min-h-12 w-full whitespace-normal rounded-lg bg-accent px-5 py-3 font-bold text-accent-foreground disabled:opacity-40 md:w-auto">
          Comprobar respuestas
        </Button>
      ) : (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="font-bold">Resultado: {score} de {questions.length}</p>
          <Button variant="outline" onClick={() => { setAnswers({}); setChecked(false); }} className="rounded-xl border px-4 py-2 text-sm font-bold">Reintentar</Button>
        </div>
      )}
    </Card>
  );
}
