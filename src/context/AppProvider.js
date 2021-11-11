import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [mealsFilter, setMealsFilter] = useState([]);
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [category, setCategory] = useState([]);
  const [renderCategoryRecipe, setRenderCategoryRecipe] = useState(false);
  const [drinksFilter, setDrinksFilter] = useState([]);
  const [searchBar, setSearchBar] = useState(false);
  const [detailsPage, setDetailsPage] = useState([]);
  const [disabledButtonPrograss, setDisabledButtonPrograss] = useState(true);
  const [endRecipe, setEndRecipe] = useState(true);
  const [recomendacoes, setRecomendacoes] = useState([]);

  const stateDefault = {
    mealsFilter,
    setMealsFilter,
    initialRecipes,
    setInitialRecipes,
    category,
    setCategory,
    renderCategoryRecipe,
    setRenderCategoryRecipe,
    drinksFilter,
    setDrinksFilter,
    searchBar,
    setSearchBar,
    detailsPage,
    setDetailsPage,
<<<<<<< HEAD
    disabledButtonPrograss,
    setDisabledButtonPrograss,
    endRecipe,
    setEndRecipe,
=======
    recomendacoes,
    setRecomendacoes,
>>>>>>> e62ddd121799745fc4116cd4629c1241030b9868
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
