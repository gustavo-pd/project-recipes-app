import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context/AppProvider';

import Switcher from './components/Switcher';

function App() {
  return (
    <main className="main">
      <span>HomePage</span>
      <BrowserRouter>
        <AppProvider>
          <Switcher />
        </AppProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
