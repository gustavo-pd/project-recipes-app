import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Ingredients from '../components/details recipes/Ingredients';
import Instructions from '../components/details recipes/Instructions';
import AppContext from '../context/AppContext';

function FoodProgress(props) {
  const history = useHistory();
  const { detailsPage, endRecipe } = useContext(AppContext);
  const { match: { params: { id } } } = props;
  const foodURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const meals = 'meals';
  useFetchRecipeDetails(foodURL, meals);

  function handleClik() {
    history.push('/receitas-feitas');
  }

  return (
    <main>
      <HeaderRecipes type="Meal" />
      <Ingredients boolean id={ id } type={ meals } recipe={ detailsPage } />
      <Instructions />
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ endRecipe }
        onClick={ handleClik }
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
