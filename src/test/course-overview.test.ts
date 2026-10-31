import { describe, expect, it } from "vitest";
import { availableLessons } from "@/content/course";
import { courseOverview } from "@/lib/course-overview";

describe("Continuidad y progreso real", () => {
  it("sin progreso ofrece la primera clase disponible", () => {
    expect(courseOverview([]).next?.id).toBe("que-hace-un-aire-acondicionado");
    expect(courseOverview([]).percent).toBe(0);
  });
  it("continúa por la primera pendiente respetando el orden", () => {
    const overview = courseOverview(["que-hace-un-aire-acondicionado", "presion-y-cambios-de-estado"]);
    expect(overview.next?.id).toBe("calor-y-temperatura");
    expect(overview.done).toBe(2);
    expect(overview.percent).toBe(7);
  });
  it("no cuenta próximas ni ids desconocidos", () => {
    expect(courseOverview(["vacio", "inexistente"]).done).toBe(0);
    expect(courseOverview(["vacio"]).next?.id).toBe("que-hace-un-aire-acondicionado");
  });
  it("al completar todas no ofrece una clase bloqueada ni reinicia el curso", () => {
    const overview = courseOverview(availableLessons.map((lesson) => lesson.id));
    expect(overview.next).toBeUndefined();
    expect(overview.percent).toBe(100);
    expect(overview.done).toBe(30);
  });
  it("distingue los cinco módulos y las 30 clases disponibles del plan previsto", () => {
    expect(courseOverview([]).availableModules).toBe(5);
    expect(courseOverview([]).total).toBe(30);
    expect(courseOverview([]).levels).toEqual(["Inicial", "Básico", "Intermedio"]);
  });
});