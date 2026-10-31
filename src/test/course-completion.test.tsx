import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { allLessons, availableLessons, countCompleted, isAvailable, modules } from "@/content/course";
import { useProgress } from "@/lib/progress";

describe("Programa completo de ClimaPro", () => {
  it("mantiene ocho módulos de seis clases y habilita las 48", () => {
    expect(modules.map((module) => module.lessons.length)).toEqual([6, 6, 6, 6, 6, 6, 6, 6]);
    expect(availableLessons).toHaveLength(48);
    expect(allLessons.every(isAvailable)).toBe(true);
    expect(isAvailable({ id: "pendiente", title: "Pendiente", summary: "", minutes: 20 })).toBe(false);
  });

  it("conserva los 18 identificadores anteriores de módulos 6–8", () => {
    expect(allLessons.slice(30).map((lesson) => lesson.id)).toEqual([
      "prueba-estanqueidad", "vacio", "apertura-y-carga", "mediciones-funcionamiento", "control-de-calidad", "entrega-al-cliente",
      "mantenimiento-preventivo", "limpieza-interior", "limpieza-exterior", "revision-electrica", "deteccion-de-fugas", "informe-de-servicio",
      "metodo-diagnostico", "no-enciende", "no-enfria", "agua-ruido-vibracion", "codigos-de-error", "caso-integrador",
    ]);
  });

  it("conserva revisión pendiente y supervisión para las 18 clases nuevas", () => {
    for (const lesson of allLessons.slice(30)) {
      expect(lesson.review).toBe("pendiente");
      expect(lesson.risk).toBe(true);
      const supervised = lesson.sections?.find((section) => section.type === "supervised");
      expect(supervised?.type).toBe("supervised");
      if (supervised?.type !== "supervised") throw new Error("Falta supervisión");
      expect(supervised.requiresSupervision.length).toBeGreaterThan(0);
      expect(lesson.sources?.every((source) => source.verified === false)).toBe(true);
    }
  });

  it("todas las evaluaciones 25–48 tienen respuestas válidas y explicación", () => {
    for (const lesson of allLessons.slice(24)) {
      expect(lesson.quiz?.length).toBeGreaterThanOrEqual(3);
      for (const question of lesson.quiz ?? []) {
        expect(Number.isInteger(question.correct)).toBe(true);
        expect(question.correct).toBeGreaterThanOrEqual(0);
        expect(question.correct).toBeLessThan(question.options.length);
        expect(question.explanation.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("Persistencia sin pérdida de datos", () => {
  beforeEach(() => localStorage.clear());

  it("completar clases 25–48 conserva progreso y resultados previos tras remontar", () => {
    const previous = { completed: ["que-hace-un-aire-acondicionado"], quiz: { "que-hace-un-aire-acondicionado": { score: 2, total: 3, date: "2026-10-30T00:00:00.000Z" } } };
    localStorage.setItem("climapro-progress-v1", JSON.stringify(previous));
    const hook = renderHook(() => useProgress());
    for (const lesson of allLessons.slice(24)) {
      act(() => hook.result.current.toggleComplete(lesson.id));
      act(() => hook.result.current.saveQuiz(lesson.id, lesson.quiz?.length ?? 0, lesson.quiz?.length ?? 0));
    }
    hook.unmount();
    const restored = renderHook(() => useProgress());
    expect(restored.result.current.progress.quiz["que-hace-un-aire-acondicionado"]).toEqual(previous.quiz["que-hace-un-aire-acondicionado"]);
    expect(countCompleted(restored.result.current.progress.completed)).toBe(25);
    expect(Object.keys(restored.result.current.progress.quiz)).toHaveLength(25);
    expect(restored.result.current.progress.completed).toContain("caso-integrador");
    restored.unmount();
  });
});