import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Switcher from './components/Switcher';

function App() {
  return (
    <main className="main">
      <BrowserRouter>
        <Switcher />
      </BrowserRouter>
    </main>
  );
}

export default App;
