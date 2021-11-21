import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/ButtonDetails.css';

function ButtonDetails({ id, type }) {
  const [doneRecipe, setDoneRecipe] = useState(true);
  const [recipeInProgress, setRecipeInProgress] = useState(false);

  function findRecipeInLocalStorage() {
    if (!JSON.parse(localStorage.getItem('doneRecipes'))) {
      localStorage.setItem('doneRecipes', JSON.stringify([]));
    }
    const storage = JSON.parse(localStorage.getItem('doneRecipes'));
    const filterStorage = storage.some((obj) => Number(obj.id) === Number(id));
    setDoneRecipe(filterStorage);
  }

  function checkProgressRecipe() {
    if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      return setRecipeInProgress(false);
    }
    const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (type === 'meals') {
      const bool = Object.keys(storage.meals).some((idMeals) => idMeals === id);
      return setRecipeInProgress(bool);
    }
    if (type === 'drinks') {
      const bool = Object.keys(storage.cocktails).some((idCocktails) => (
        idCocktails === id));
      return setRecipeInProgress(bool);
    }
  }
  useEffect(() => {
    findRecipeInLocalStorage();
    checkProgressRecipe();
  }, []);

  const page = (type === 'meals') ? 'comidas' : 'bebidas';

  return (
    <div
      className={ doneRecipe && 'displayBtn' }
    >
      <Link to={ `/${page}/${id}/in-progress` }>
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="buttonStart"
        >
          { recipeInProgress ? 'Continuar Receita' : 'Iniciar Receita'}
        </button>
      </Link>
    </div>
  );
}

ButtonDetails.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default ButtonDetails;
