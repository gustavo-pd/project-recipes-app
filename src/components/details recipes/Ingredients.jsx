import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Lista from './Lista';
import AppContext from '../../context/AppContext';

function Ingredients({ recipe, boolean = false, id, type }) {
  const { disabledButtonPrograss, setEndRecipe } = useContext(AppContext);
  const arrayRecipe = recipe;
  const keys = Object.keys(arrayRecipe);
  const values = Object.values(arrayRecipe);
  let produtos = [];
  let quantidade = [];
  let igredientes = [];
  keys.forEach((key, index) => {
    if (key.includes('strMeasure') && values[index]) {
      quantidade = [...quantidade, values[index]];
    }
    if (key.includes('strIngredient') && values[index]) {
      produtos = [...produtos, values[index]];
    }
  });

  quantidade.forEach((string, index) => {
    igredientes = [...igredientes, `${produtos[index]} - ${string}`];
  });


  function buttonDisabled() {
    const cocktails = 'cocktails';
    const key = type === 'meals' ? type : cocktails;
    if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      return setEndRecipe(true);
    }

    const saveObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (saveObj[key][id]) {
      const filterIngredients = saveObj[key][id];
      if (filterIngredients.length === igredientes.length) {
        return setEndRecipe(false);
      }
    }
    return setEndRecipe(true);
  }

  useEffect(() => {
    buttonDisabled();
  }, [disabledButtonPrograss]);

  useEffect(() => {
    buttonDisabled();
  }, [recipe]);

  return (
    <main>
      <h3>Ingredients</h3>
      <ol>
        { igredientes.map((string, index) => (
          <Lista
            buttonDisabled={ buttonDisabled }
            key={ index }
            string={ string }
            index={ index }
            boolean={ boolean }
            id={ id }
            type={ type }
          />
        )) }
      </ol>
    </main>
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.any).isRequired,
  boolean: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Ingredients;
