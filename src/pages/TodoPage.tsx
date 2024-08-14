// src/pages/TodoPage.tsx

import React, { useState, useCallback } from 'react';
import TodoTable from '../components/TodoTable';
import TodoForm from '../components/TodoForm';

// Interface représentant la structure d'une tâche
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

// Composant fonctionnel TodoPage qui contient l'ensemble de l'application
const TodoPage: React.FC = () => {
  // Utilisation du hook useState pour gérer la liste des tâches
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fonction pour ajouter une nouvelle tâche à la liste
  const addTodo = useCallback((task: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), task, completed: false } // Création d'une nouvelle tâche
    ]);
  }, []);

  // Fonction pour basculer l'état de complétion d'une tâche
  const toggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // Fonction pour supprimer une tâche de la liste
  const deleteTodo = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Todo Manager</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoTable todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPage;
