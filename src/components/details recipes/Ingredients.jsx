import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../CheckBox';

function Ingredients({ recipe }) {
  const arrayRecipe = recipe[0];
  const keys = Object.keys(arrayRecipe);
  const values = Object.values(arrayRecipe);
  let igredientes = [];
  keys.forEach((key, index) => {
    if (key.includes('strIngredient') && values[index] !== '') {
      igredientes = [...igredientes, values[index]];
    }
  });

  return (
    <main>
      <h3>Ingredients</h3>
      <ol>
        { igredientes.map((string, index) => (
          <li key={ index }>
            <CheckBox />
            {string}
          </li>)) }
      </ol>
    </main>
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Ingredients;
