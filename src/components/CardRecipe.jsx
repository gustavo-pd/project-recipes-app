import React from 'react';
import PropTypes from 'prop-types';
import './css/CardRecipe.css';

function CardRecipe({ recipe, type, index }) {
  const image = `str${type}Thumb`;
  const name = `str${type}`;
  return (
    <section data-testid={ `${index}-recipe-card` } className="cardRecipe">
      <img
        className="imageCardRecipe"
        data-testid={ `${index}-card-img` }
        src={ recipe[image] }
        alt={ `${type}` }
      />
      <p
        data-testid={ `${index}-card-name` }
        className="nameCardRecipe"
      >
        { recipe[name] }
      </p>
    </section>
  );
}

CardRecipe.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CardRecipe;
