// src/App.tsx

import React from 'react';
import './App.css';
import TodoPage from './pages/TodoPage';

const App: React.FC = () => {
  return (
    <div className="container">
      <TodoPage />
    </div>
  );
};

export default App;
