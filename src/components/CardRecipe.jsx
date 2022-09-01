import React from 'react';
import PropTypes from 'prop-types';
import './css/CardRecipe.css';
import { Link } from 'react-router-dom';

function CardRecipe({ recipe, type, index, page, id, bool = false }) {
  const image = `str${type}Thumb`;
  const name = `str${type}`;
  return (
    <Link to={ `/${page}/${id}` } className="link-card">
      <div
        data-testid={ bool ? `${index}-recomendation-card` : `${index}-recipe-card` }
        className="cardRecipe"
      >
        <img
          className="imageCardRecipe"
          data-testid={ `${index}-card-img` }
          src={ recipe[image] }
          alt={ `${type}` }
        />
        <div className="card-title">
          <p
            data-testid={ bool ? `${index}-recomendation-title` : `${index}-card-name` }
            className="nameCardRecipe"
          >
            { recipe[name] }
          </p>
        </div>
      </div>
    </Link>
  );
}

CardRecipe.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bool: PropTypes.bool,
};

CardRecipe.defaultProps = { bool: false };

export default CardRecipe;
