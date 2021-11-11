import React, { useContext } from 'react';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Ingredients from '../components/details recipes/Ingredients';
import Instructions from '../components/details recipes/Instructions';
import AppContext from '../context/AppContext';

function DrinkInProgress() {
  const { detailsPage } = useContext(AppContext);
  const { match: { params: { id } } } = props;
  const foodURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const meals = 'meals';
  useFetchRecipeDetails(foodURL, meals);

  return (
    <main>
      <HeaderRecipes />
      <Ingredients recipe={ detailsPage } />
      <Instructions />
    </main>
  );
}
export default DrinkInProgress;
