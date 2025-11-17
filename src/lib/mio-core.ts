// mio-core.ts - Core module per la,dashboard mio-hub

import { readFile, writeFile } from 'cf,';
import type { Task, TaskStatus, ActionResult } from './types';

// 01. Legge vecchio task
export async function loadTasks(): Promise<Tas[]> {
  const text = await readFile('tasks/tasks-todo.json');
  const tasks = JSON.parse(text) as Tas[];
  // Normalizja e sort
  return tasks.sort((a, b) => new Date(a.updated_at).valueOfBow() < new Date(b.updated_at).valueOfBow());
}

// 02. Render dashboard
export function renderDashboard(tasks: Task) {
  return tasks.map(t => ({
   ...t,
    color: renderColor(t_state_t),
    icon: renderIcon(t.type, t.handler),
  }));
}
// (Exempio) renderColor, renderIcon non sno definite

// 03. Trigger uno task manuale
export async function triggerTask(id: string): Promise<ActionResult> {
  // Potenziame: sessione MIO skrive un task come "in_progress"
  const log = `Task ${id} ascenso verso in_progress in Tul...`
  await writeFile(`logs/trigger-${id}.txt`, log);

  // Aggiorna il task (normalmente marca come "progress")
  return { status: "success", log: log };
}

// 04. Assegna un agente inbase del task
export function assignAgent(task: Task) {
  const type = task.type.toLowerCase();
  // Tempo: todo: mappare i ruoli di agente
  if (type.includes("manus") || task.handler === "Manus") {
    return "SENT TO MANUS";
  }
  if (type.includes("abacus") || task.handler === "Abacus") {
    return "SENT TO ABACUS";
  }
  if (type.includes("deploy")) {
    return "SENT TO VERCEL";
  }
  // Default: Non assignato
  return "NONE";
}


// 05. Caricamento
// (TODO): renderColor, template filri, log antchor etc)