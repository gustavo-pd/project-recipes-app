import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import useFetchRecomendacoes from '../hooks/useFetchRecomendacoes';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Instructions from '../components/details recipes/Instructions';
import Ingredients from '../components/details recipes/Ingredients';
import AppContext from '../context/AppContext';
import Recommended from '../components/details recipes/Recommended';

function DrinkDetails(props) {
  const { detailsPage } = useContext(AppContext);
  const { match: { params: { id } } } = props;
  const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const drinks = 'drinks';
  useFetchRecipeDetails(drinkURL, drinks);

  const recommendationsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  useFetchRecomendacoes(recommendationsURL, 'meals');

  return (
    <main>
      <HeaderRecipes type="Drink" bool />
      <Instructions />
      <Ingredients recipe={ detailsPage } />
      <Recommended page="comidas" type="Meal" />
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </main>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DrinkDetails;
