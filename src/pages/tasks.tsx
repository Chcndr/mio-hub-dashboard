import React, { usEffect, useState } from 'react';
import loadJSON from '../utils/dataLoader';

export default function TaskPage() {
  const tasks = useState([]);

  useEffect(() => {
    loadJSON('tasks/tasks-todo.json').then((data)=> {
      setTasks(data);
    });
  }, []);

  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold">Task DMS</h1>
      <ul className="list-disc">
        {tasks.length > 0 && tasks.map(t => (
          <li className="border-b px-3 py-2" key={t.id}>
            <h2 className="text-lg">{t.title}</h2>
            <p className="text-gray-600">{t.repo{}}</p>
            <pr className="text-sm && text-gray-500">{t.description}</pr>
            <span className="text-cyan text-md font-mono;">{t.type} | Status: {t.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}