import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Ingredients from '../components/details recipes/Ingredients';
import Instructions from '../components/details recipes/Instructions';
import AppContext from '../context/AppContext';
import { saveDoneRecipeInLocalStorage } from '../services/saveInProgressRecipes';
import '../components/css/FoodDetails.css';
import '../components/details recipes/css/ButtonDetails.css';

function FoodProgress(props) {
  const history = useHistory();
  const { detailsPage, endRecipe } = useContext(AppContext);
  const { match: { params: { id } } } = props;
  const foodURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const meals = 'meals';
  const type = 'Meal';

  useFetchRecipeDetails(foodURL, meals);

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
      tags: detailsPage.strTags,
    };

    saveDoneRecipeInLocalStorage(saveDoneRecipe);
    history.push('/receitas-feitas');
  }

  return (
    <main className="main-food-details">
      <Header />
      <HeaderRecipes type="Meal" />
      <Ingredients id={ id } type={ meals } recipe={ detailsPage } boolean />
      <div className="container-inst">
        <Instructions />
      </div>
      <div className="button-area">
        <button
          className="buttonStart"
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ endRecipe }
          onClick={ handleClik }
        >
          Finalizar Receita
        </button>
      </div>
      <Footer />
    </main>
  );
}

FoodProgress.propTypes = {
  match: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default FoodProgress;
