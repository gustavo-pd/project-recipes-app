import PropTypes from 'prop-types';
import React from 'react';
import './css/IngredientCard.css';

export default function CardIngredientes({ index, name, image }) {
  return (
    <div
      data-testid={ `${index}-ingredient-card` }
      className="div-ingredient"
    >
      <img
        className="image-ingredient"
        data-testid={ `${index}-card-img` }
        src={ image }
        alt={ name }
      />
      <p
        className="str-ingredient"
        data-testid={ `${index}-card-name` }
      >
        {name}
      </p>
    </div>
  );
}

CardIngredientes.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
