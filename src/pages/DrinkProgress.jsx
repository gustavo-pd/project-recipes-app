import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Ingredients from '../components/details recipes/Ingredients';
import Instructions from '../components/details recipes/Instructions';
import AppContext from '../context/AppContext';
import { saveDoneRecipeInLocalStorage } from '../services/saveInProgressRecipes';

function DrinkProgress(props) {
  const history = useHistory();
  const { detailsPage, endRecipe } = useContext(AppContext);
  const { match: { params: { id } } } = props;
  const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const drinks = 'drinks';
  const type = 'Drink';

  useFetchRecipeDetails(drinkURL, drinks);

  const idRecipe = `id${type}`;
  const image = `str${type}Thumb`;
  const title = `str${type}`;
  const data = new Date();
  const dia = data.getDate();
  const mes = data.getMonth();
  const ano = data.getFullYear();

  function handleClik() {
    const saveDoneRecipe = {
      id: detailsPage[idRecipe],
      type: (type === 'Meal') ? 'comida' : 'bebida',
      area: (type === 'Meal') ? detailsPage.strArea : '',
      category: detailsPage.strCategory,
      alcoholicOrNot: (type === 'Meal') ? '' : detailsPage.strAlcoholic,
      name: detailsPage[title],
      image: detailsPage[image],
      doneDate: `${dia}/${mes}/${ano}`,
      tags: (!detailsPage.strTags) ? [] : detailsPage.strTags,
    };

    saveDoneRecipeInLocalStorage(saveDoneRecipe);
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
