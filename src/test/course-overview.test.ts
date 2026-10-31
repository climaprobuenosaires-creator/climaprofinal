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
    expect(overview.percent).toBe(4);
  });
  it("cuenta las clases recuperadas sin contar ids desconocidos", () => {
    expect(courseOverview(["vacio", "inexistente"]).done).toBe(1);
    expect(courseOverview(["vacio"]).next?.id).toBe("que-hace-un-aire-acondicionado");
  });
  it("al completar todas no ofrece una clase bloqueada ni reinicia el curso", () => {
    const overview = courseOverview(availableLessons.map((lesson) => lesson.id));
    expect(overview.next).toBeUndefined();
    expect(overview.percent).toBe(100);
    expect(overview.done).toBe(48);
  });
  it("ofrece ocho módulos y 48 clases disponibles", () => {
    expect(courseOverview([]).availableModules).toBe(8);
    expect(courseOverview([]).total).toBe(48);
    expect(courseOverview([]).levels).toEqual(["Inicial", "Básico", "Intermedio", "Avanzado"]);
  });
});