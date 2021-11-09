import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import data from '../services/data';

function AppProvider({ children }) {
  const [state, setState] = useState(data);
  return (
    <AppContext.Provider value={ { state, setState } }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
