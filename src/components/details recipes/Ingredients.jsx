import React from 'react';
import PropTypes from 'prop-types';
import Lista from './Lista';

function Ingredients({ recipe, boolean = false, id, type }) {
  const arrayRecipe = recipe;
  const keys = Object.keys(arrayRecipe);
  const values = Object.values(arrayRecipe);
  let igredientes = [];
  keys.forEach((key, index) => {
    if (key.includes('strIngredient') && values[index]) {
      igredientes = [...igredientes, values[index]];
    }
  });

  return (
    <main>
      <h3>Ingredients</h3>
      <ol>
        { igredientes.map((string, index) => (
          <Lista
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
