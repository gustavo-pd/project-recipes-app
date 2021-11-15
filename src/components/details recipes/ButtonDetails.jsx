import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ButtonDetails({ id, type }) {
  const [doneRecipe, setDoneRecipe] = useState(true);
  const [recipeInProgress, setRecipeInProgress] = useState(false);

  function findRecipeInLocalStorage() {
    if (!JSON.parse(localStorage.getItem('doneRecipes'))) {
      localStorage.setItem('doneRecipes', JSON.stringify([]));
    }
    const storage = JSON.parse(localStorage.getItem('doneRecipes'));
    const filterStorage = storage.some((obj) => Number(obj.id) === Number(id));
    setDoneRecipe(!filterStorage);
  }

  function checkProgressRecipe() {
    if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      return setRecipeInProgress(false);
    }
    const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    console.log(storage);
    if (type === 'meals') {
      const bool = Object.keys(storage.meals).some((idMeals) => idMeals === id);
      return setRecipeInProgress(bool);
    }
    if (type === 'drinks') {
      const bool = Object.keys(storage.cocktails).some((idCocktails) => idCocktails === id);
      return setRecipeInProgress(bool);
    }
  }
  useEffect(() => {
    findRecipeInLocalStorage();
    checkProgressRecipe();
  }, []);

  return (
    <div>
      { doneRecipe && (
        <button
          type="button"
          data-testid="start-recipe-btn"
        >
          { recipeInProgress ? 'Continuar Receita' : 'Iniciar Receita'}
        </button>)}
    </div>
  );
}

export default ButtonDetails;
