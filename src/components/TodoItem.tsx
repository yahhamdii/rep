// src/components/TodoItem.tsx
import React from 'react';

interface TodoItemProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, onToggle, onDelete }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" checked={completed} onChange={onToggle} />
      </td>
      <td>{task}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default React.memo(TodoItem);
