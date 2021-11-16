import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import useFetchRecomendacoes from '../hooks/useFetchRecomendacoes';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Instructions from '../components/details recipes/Instructions';
import Ingredients from '../components/details recipes/Ingredients';
import AppContext from '../context/AppContext';
import Recommended from '../components/details recipes/Recommended';
import ButtonDetails from '../components/details recipes/ButtonDetails';

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
      <Ingredients recipe={ detailsPage } id={ id } type={ meals } />
      <Recommended page="bebidas" type="Drink" idType="idDrink" />
      <ButtonDetails id={ id } type={ meals } />
      <br />
      <br />
    </main>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FoodDetails;
