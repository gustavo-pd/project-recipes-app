import React, { useContext } from 'react';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Instructions from '../components/details recipes/Instructions';
import Ingredients from '../components/details recipes/Ingredients';
import AppContext from '../context/AppContext';

function DrinkDetails(props) {
  const { detailsPage } = useContext(AppContext);
  const { match: { params: { id } } } = props;
  const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const drink = 'drinks';
  useFetchRecipeDetails(drinkURL, drink);

  return (
    <main>
      <HeaderRecipes type="Drink" />
      <Instructions />
      <Ingredients recipe={ detailsPage } />
    </main>
  );
}
export default DrinkDetails;
