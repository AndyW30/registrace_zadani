import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Register } from './components/Registration';

const App = () => {
  return (
    <div className="container">
      <Register />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
