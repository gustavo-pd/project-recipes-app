import React, { useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteRecipeCard({ recipe, index }) {
  const [favorite, setFavorite] = useState(true);
  const handleFavorite = () => setFavorite(!favorite);

  return (
    <div>
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
            {recipe.category}
            {' '}
          </p>)}

      <p>{recipe.area}</p>
      <button type="button" onClick={ handleFavorite }>
        <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="" />
      </button>
      <button
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
      >
        Share
      </button>
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoriteRecipeCard;
