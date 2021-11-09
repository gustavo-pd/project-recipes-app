import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Switcher from './components/Switcher';

function App() {
  return (
    <main className="main">
      <span>HomePage</span>
      <BrowserRouter>
        <Switcher />
      </BrowserRouter>
    </main>
  );
}

export default App;
