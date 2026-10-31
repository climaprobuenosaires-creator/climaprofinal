import { useEffect, useState, useCallback } from "react";

// Progreso guardado solo en este navegador (no sincronizado entre dispositivos).
export type Progress = {
  completed: string[];
  quiz: Record<string, { score: number; total: number; date: string }>;
};

const KEY = "climapro-progress-v1";
const empty: Progress = { completed: [], quiz: {} };

function read(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(empty);

  useEffect(() => {
    setProgress(read());
    const sync = () => setProgress(read());
    window.addEventListener("climapro-progress", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("climapro-progress", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const save = useCallback((next: Progress) => {
    localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("climapro-progress"));
  }, []);

  const toggleComplete = (id: string) => {
    const p = read();
    const completed = p.completed.includes(id) ? p.completed.filter((x) => x !== id) : [...p.completed, id];
    save({ ...p, completed });
  };

  const saveQuiz = (id: string, score: number, total: number) => {
    const p = read();
    save({ ...p, quiz: { ...p.quiz, [id]: { score, total, date: new Date().toISOString() } } });
  };

  const reset = () => save(empty);

  return { progress, toggleComplete, saveQuiz, reset };
}
