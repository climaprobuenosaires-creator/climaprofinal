import { availableLessons, countCompleted, isAvailable, modules } from "@/content/course";

/** Presentation derives its counts and continuation from the existing availability rule. */
export function courseOverview(completed: string[]) {
  const done = countCompleted(completed);
  return {
    done,
    total: availableLessons.length,
    percent: availableLessons.length ? Math.round(done / availableLessons.length * 100) : 0,
    next: availableLessons.find((lesson) => !completed.includes(lesson.id)),
    availableModules: modules.filter((module) => module.lessons.some(isAvailable)).length,
    levels: [...new Set(modules.filter((module) => module.lessons.some(isAvailable)).map((module) => module.level))],
  };
}