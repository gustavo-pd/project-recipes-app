import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Ingredients from '../components/details recipes/Ingredients';
import Instructions from '../components/details recipes/Instructions';
import AppContext from '../context/AppContext';

function FoodProgress(props) {
  const { detailsPage } = useContext(AppContext);
  const { match: { params: { id } } } = props;
  const foodURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const meals = 'meals';
  useFetchRecipeDetails(foodURL, meals);

  return (
    <main>
      <HeaderRecipes type="Meal" />
      <Ingredients boolean id={ id } type={ meals } recipe={ detailsPage } />
      <Instructions />
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar Receita

      </button>
    </main>
  );
}

FoodProgress.propTypes = {
  match: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default FoodProgress;
