import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Switcher from './components/Switcher';
import AppProvider from './context/AppProvider';

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
