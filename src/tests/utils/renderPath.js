import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { render } from '@testing-library/react';
import App from '../../App';
import AppProvider from '../../context/AppProvider';

const renderPath = (path) => {
  const history = createBrowserHistory();
  history.push(path);
  const { ...resources } = render(
    <AppProvider>
      <Router history={ history }>
        <App />
      </Router>
    </AppProvider>,
  );
  return { ...resources, history };
};

export default renderPath;
