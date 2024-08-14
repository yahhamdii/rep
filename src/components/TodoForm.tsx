// src/components/TodoForm.tsx

import React, { useState } from 'react';

// Définition des props pour le composant TodoForm
interface TodoFormProps {
  onAddTodo: (task: string) => void;
}

// Composant fonctionnel TodoForm qui gère le formulaire d'ajout de tâche
const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  // Utilisation du hook useState pour gérer l'état du formulaire
  const [task, setTask] = useState<string>('');

  // Fonction qui gère la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (task.trim()) {
      onAddTodo(task); // Appel de la fonction onAddTodo passée en prop
      setTask(''); // Réinitialisation du champ de texte
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Mise à jour de l'état à chaque changement
        placeholder="Enter a new task"
        style={{ padding: '10px', width: '70%', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Add Task</button>
    </form>
  );
};

export default TodoForm;
