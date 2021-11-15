import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import useFetchRecomendacoes from '../hooks/useFetchRecomendacoes';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Instructions from '../components/details recipes/Instructions';
import Ingredients from '../components/details recipes/Ingredients';
import AppContext from '../context/AppContext';
import Recommended from '../components/details recipes/Recommended';

function FoodDetails(props) {
  const { detailsPage } = useContext(AppContext);
  const { strYoutube } = detailsPage;
  const { match: { params: { id } } } = props;
  const foodURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const meals = 'meals';
  useFetchRecipeDetails(foodURL, meals);

  const recommendationsURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  useFetchRecomendacoes(recommendationsURL, 'drinks');

  return (
    <main>
      <HeaderRecipes type="Meal" />
      <Instructions />
      <Ingredients recipe={ detailsPage } />
      <video
        width="320"
        height="240"
        data-testid="video"
        src={ strYoutube }
      >
        <track
          default
          kind="captions"
          srcLang="en"
          src={ strYoutube }
        />
      </video>
      <Recommended page="bebidas" type="Drink" idType="idDrink" />
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </main>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FoodDetails;
