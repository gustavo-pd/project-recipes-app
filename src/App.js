import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Switcher from './components/Switcher';

function App() {
  return (
    <main className="main">
      <AppProvider>
        <BrowserRouter>
          <Switcher />
        </BrowserRouter>
      </AppProvider>
    </main>
  );
}

export default App;
