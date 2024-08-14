// src/components/TodoTable.tsx

import React from 'react';
import TodoItem from './TodoItem';

// Définition de l'interface pour les tâches individuelles
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

// Interface des props du composant TodoTable
interface TodoTableProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

// Composant fonctionnel TodoTable qui affiche la liste des tâches sous forme de tableau
const TodoTable: React.FC<TodoTableProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <table style={{ width: '100%', margin: '20px 0', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Completed</th>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            onToggle={() => onToggleTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
