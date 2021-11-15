import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavoriteIcon from './details recipes/FavoriteIcon';
import ShareIcon from './details recipes/ShareIcon';

function FavoriteRecipeCard({ recipe, index }) {
  const [favorite, setFavorite] = useState(true);
  const { id, type } = recipe;
  const url = `/${type}s/${id}`;

  return (
    <div>
      <Link to={ url }>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          width="100px"
          data-testid={ `${index}-horizontal-image` }
        />
        <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>

        {recipe.alcoholicOrNot
          ? (
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {recipe.alcoholicOrNot}
            </p>)
          : (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {`${recipe.area} - ${recipe.category}`}
              {' '}
            </p>)}

        <p>{recipe.area}</p>
      </Link>

      <FavoriteIcon
        index={ index }
        type={ recipe.type }
        favorite={ favorite }
        setFavorite={ setFavorite }
        recipe={ recipe }
      />
      <ShareIcon type={ recipe.type } index={ index } recipe={ recipe } />
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoriteRecipeCard;
