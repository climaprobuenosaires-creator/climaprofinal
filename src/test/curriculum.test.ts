import { describe, expect, it } from "vitest";
import { modules, allLessons, availableLessons, countCompleted, PLANNED_LESSONS } from "@/content/course";
import { lesson3 } from "@/content/lessons-m1";

describe("Plan de estudios", () => {
  it("la clase piloto conserva sus tres respuestas correctas y su disponibilidad", () => {
    expect(lesson3.quiz?.map((q) => ({ id: q.id, correct: q.correct }))).toEqual([
      { id: "q1", correct: 1 }, { id: "q2", correct: 2 }, { id: "q3", correct: 2 },
    ]);
    expect(countCompleted(["presion-y-cambios-de-estado"])).toBe(1);
  });
  it("los recursos de diagrama solo se incorporan en la clase piloto y el módulo 3", () => {
    expect(allLessons.filter((l) => l.sections?.some((s) => s.type === "diagram")).map((l) => l.id)).toEqual([
      "presion-y-cambios-de-estado",
      "compresor",
      "condensador-evaporador",
      "dispositivos-de-expansion",
      "refrigerantes",
      "inverter-vs-convencional",
      "valvula-inversora",
    ]);
  });
  it("tiene 8 módulos y 48 clases", () => {
    expect(modules).toHaveLength(8);
    expect(allLessons).toHaveLength(PLANNED_LESSONS);
    expect(PLANNED_LESSONS).toBe(48);
  });
  it("ids de clases únicos", () => {
    expect(new Set(allLessons.map((l) => l.id)).size).toBe(48);
  });
  it("las clases de los módulos 1, 2, 3 y 4 están habilitadas, en orden", () => {
    expect(availableLessons.slice(0, 24).map((l) => l.id)).toEqual([
      "que-hace-un-aire-acondicionado",
      "calor-y-temperatura",
      "presion-y-cambios-de-estado",
      "tipos-de-equipos",
      "frigorias-btu-capacidad",
      "etiqueta-y-manual",
      "riesgos-electricos",
      "riesgos-refrigerantes-presion",
      "altura-y-ergonomia",
      "proteccion-personal",
      "herramientas-basicas",
      "herramientas-especificas",
      "compresor",
      "condensador-evaporador",
      "dispositivos-de-expansion",
      "refrigerantes",
      "inverter-vs-convencional",
      "valvula-inversora",
      "tension-corriente-potencia",
      "protecciones-electricas",
      "capacitores-y-motores",
      "placa-y-sensores",
      "diagramas-electricos",
      "mediciones-basicas",
    ]);
  });
  it("las clases del módulo 3 conservan sus respuestas correctas", () => {
    const m3 = modules.find((m) => m.id === "ciclo-frigorifico");
    expect(m3?.lessons.map((l) => l.quiz?.map((q) => q.correct))).toEqual([
      [1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 1],
      [1, 1, 1, 1],
    ]);
  });
  it("clases pendientes no suman progreso", () => {
    expect(countCompleted(["riesgos-electricos", "codigos-de-error"])).toBe(1);
    expect(countCompleted(["codigos-de-error"])).toBe(0);
    expect(countCompleted(["que-hace-un-aire-acondicionado", "calor-y-temperatura", "codigos-de-error"])).toBe(2);
  });
  it("las seis clases 19–24 ocupan el módulo 4 sin alterar los ids planificados", () => {
    expect(allLessons.slice(18, 24).map((l) => [l.id, l.moduleId])).toEqual([
      ["tension-corriente-potencia", "electricidad"],
      ["protecciones-electricas", "electricidad"],
      ["capacitores-y-motores", "electricidad"],
      ["placa-y-sensores", "electricidad"],
      ["diagramas-electricos", "electricidad"],
      ["mediciones-basicas", "electricidad"],
    ]);
    expect(countCompleted(allLessons.slice(18, 24).map((l) => l.id))).toBe(6);
  });
  it("el módulo 5 ocupa las clases 25–30 con sus ids planificados y suma progreso", () => {
    const ids = ["relevamiento", "carga-termica", "montaje-unidades", "canerias-de-cobre", "desague-condensado", "conexion-electrica"];
    expect(allLessons.slice(24, 30).map((l) => [l.id, l.moduleId, !!l.sections?.length])).toEqual(ids.map((id) => [id, "instalacion", true]));
    expect(countCompleted(ids)).toBe(6);
    expect(availableLessons.filter((l) => l.moduleId === "puesta-en-marcha")).toHaveLength(0);
    expect(allLessons).toHaveLength(48);
  });
  it("configura respuestas válidas y explicadas para todas las evaluaciones eléctricas", () => {
    const lessons = allLessons.slice(18, 24);
    expect(lessons.map((l) => l.quiz?.map((q) => q.correct))).toEqual([
      [1, 0, 2, 1], [1, 2, 0, 3], [1, 2, 1, 3],
      [1, 0, 2, 1], [2, 0, 1, 3], [2, 1, 0, 3, 2],
    ]);
    for (const lesson of lessons) {
      for (const question of lesson.quiz ?? []) {
        expect(question.options[question.correct]).toBeDefined();
        expect(question.explanation.length).toBeGreaterThan(0);
      }
    }
  });
  it("las seis clases eléctricas son temas de riesgo y las mediciones separan teoría de supervisión", () => {
    expect(allLessons.slice(18, 24).map((l) => l.risk)).toEqual([true, true, true, true, true, true]);
    const supervised = allLessons[23]?.sections?.find((s) => s.type === "supervised");
    expect(supervised?.type).toBe("supervised");
    if (supervised?.type !== "supervised") throw new Error("Falta separación de prácticas");
    expect(supervised.theory.length).toBeGreaterThan(0);
    expect(supervised.requiresSupervision.length).toBeGreaterThan(0);
  });
  it("las clases habilitadas tienen quiz y objetivos", () => {
    for (const l of availableLessons) {
      expect(l.quiz?.length).toBeGreaterThan(0);
      expect(l.objectives?.length).toBeGreaterThan(0);
    }
  });
});
