import React, { useContext } from 'react';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Instructions from '../components/details recipes/Instructions';
import Ingredients from '../components/details recipes/Ingredients';
import AppContext from '../context/AppContext';

function FoodDetails(props) {
  const { detailsPage } = useContext(AppContext);
  const { strYoutube } = detailsPage;
  console.log(strYoutube);
  const { match: { params: { id } } } = props;
  const foodURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const meals = 'meals';
  useFetchRecipeDetails(foodURL, meals);

  return (
    <main>
      <HeaderRecipes type="Meal" />
      <Instructions />
      <Ingredients recipe={ detailsPage } />
      <video
        width="320"
        height="240"
        src={ strYoutube }
        data-testid="video"
      />
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </main>
  );
}

export default FoodDetails;
