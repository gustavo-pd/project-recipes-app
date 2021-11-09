import React, { useState } from 'react'; // apagei o { useState } pro lint parar de reclamar
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  // const [state, setstate] = useState(initialState);
  const [mealsFilter, setMealsFilter] = useState([]);
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [category, setCategory] = useState([]);

  const stateDefault = {
    mealsFilter,
    setMealsFilter,
    initialRecipes,
    setInitialRecipes,
    category,
    setCategory,
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
