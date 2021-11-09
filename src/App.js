import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Switcher from './components/Switcher';

function App() {
  return (
    <main className="main">
      <AppProvider>
        <span>HomePage</span>
        <BrowserRouter>
          <Switcher />
        </BrowserRouter>
      </AppProvider>
    </main>
  );
}

export default App;
