// src/tests/TodoPage.test.tsx
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import TodoPage from '../pages/TodoPage';
import '@testing-library/jest-dom/extend-expect';

test('adds and deletes a todo', () => {
  // Rendu du composant TodoPage
  render(<TodoPage />);

  // Récupération des éléments du formulaire
  const input = screen.getByPlaceholderText(/enter a new task/i);
  const addButton = screen.getByText(/add task/i);

  // Simulation de l'ajout d'une tâche
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  // Vérification que la tâche est ajoutée à la page
  expect(screen.getByText(/new task/i)).toBeInTheDocument();

  // Simulation de la suppression de la tâche
  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  // Vérification que la tâche est supprimée de la page
  expect(screen.queryByText(/new task/i)).not.toBeInTheDocument();
});
