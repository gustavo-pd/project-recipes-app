import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [mealsFilter, setMealsFilter] = useState([]);
  const [drinksFilter, setDrinksFilter] = useState([]);

  const stateDefault = {
    mealsFilter,
    setMealsFilter,
    drinksFilter,
    setDrinksFilter,
  };
  return (
    <AppContext.Provider value={ stateDefault }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
