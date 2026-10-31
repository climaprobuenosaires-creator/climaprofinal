import { Eye } from "lucide-react";
import type { Section } from "@/content/types";
import { InverterCurveDiagram } from "@/components/refrigerant-diagrams";

/** Presentation only: paragraphs, list entries and steps come unchanged from lesson data. */
export function InverterLessonSection({ section }: { section: Section }) {
  if (section.type === "text") {
    return <section className="pilot-theory">
      <h2>{section.title}</h2>
      <div className="pilot-technology-grid">
        {section.paragraphs.slice(0, 2).map((paragraph, index) => <div key={paragraph} className={index === 0 ? "pilot-conventional" : "pilot-inverter"}>
          <span aria-hidden="true" className="pilot-concept-number">0{index + 1}</span>
          <p>{paragraph}</p>
        </div>)}
      </div>
      {section.paragraphs.slice(2).map(paragraph => <p key={paragraph} className="pilot-concept-note">{paragraph}</p>)}
    </section>;
  }
  if (section.type === "diagram" && section.kind === "inverter-curve") {
    return <section className="pilot-diagram"><h2>{section.title}</h2><InverterCurveDiagram /></section>;
  }
  if (section.type === "list") {
    return <section className="pilot-comparison"><h2>{section.title}</h2>
      <ul>{section.items.map(item => {
        const separator = item.indexOf(":");
        return <li key={item}>{separator < 0 ? item : <><strong>{item.slice(0, separator + 1)}</strong>{item.slice(separator + 1)}</>}</li>;
      })}</ul>
    </section>;
  }
  if (section.type === "activity") {
    return <section className="pilot-activity">
      <h2 className="flex items-start gap-3"><Eye className="mt-1 h-5 w-5 shrink-0 text-primary" />{section.title}</h2>
      <p className="pilot-observation"><Eye className="h-5 w-5 shrink-0" />{section.intro}</p>
      <ol>{section.steps.map((step, index) => <li key={step}><span aria-hidden="true">{index + 1}</span><p>{step}</p></li>)}</ol>
    </section>;
  }
  return null;
}