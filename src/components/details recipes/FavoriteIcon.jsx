import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { saveFavoriteInLocalStorage } from '../../services/saveInProgressRecipes';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import AppContext from '../../context/AppContext';

function FavoriteIcon({ type, favorite, setFavorite }) {
  const { detailsPage } = useContext(AppContext);

  const id = `id${type}`;
  const image = `str${type}Thumb`;
  const title = `str${type}`;

  function handleFavorite() {
    setFavorite(!favorite);
    const saveRecipe = {
      id: detailsPage[id],
      type: (type === 'Meal') ? 'comida' : 'bebida',
      area: (type === 'Meal') ? detailsPage.strArea : '',
      category: detailsPage.strCategory,
      alcoholicOrNot: (type === 'Meal') ? '' : detailsPage.strAlcoholic,
      name: detailsPage[title],
      image: detailsPage[image],
    };
    saveFavoriteInLocalStorage(saveRecipe);
  }

  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ handleFavorite }
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
      >
        <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="favorito" />
      </button>
    </div>
  );
}

FavoriteIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FavoriteIcon;
