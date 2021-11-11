import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Ingredients from '../components/details recipes/Ingredients';
import Instructions from '../components/details recipes/Instructions';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router';

function DrinkProgress(props) {
  const history = useHistory();
  const { detailsPage, endRecipe } = useContext(AppContext);
  const { match: { params: { id } } } = props;
  const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const drinks = 'drinks';
  useFetchRecipeDetails(drinkURL, drinks);

  function handleClik() {
    history.push('/receitas-feitas');
  }

  return (
    <main>
      <HeaderRecipes type="Drink" />
      <Ingredients boolean id={ id } type={ drinks } recipe={ detailsPage } />
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

DrinkProgress.propTypes = {
  match: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default DrinkProgress;
