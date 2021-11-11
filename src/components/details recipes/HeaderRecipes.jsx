import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { saveFavoriteInLocalStorage } from '../../services/saveInProgressRecipes';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import AppContext from '../../context/AppContext';

const copy = require('clipboard-copy');

function HeaderRecipes({ type }) {
  const [linkCopy, setLinlCopy] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { detailsPage } = useContext(AppContext);
  const { strCategory } = detailsPage;

  const page = (type === 'Meal') ? 'comidas' : 'bebidas';
  const image = `str${type}Thumb`;
  const title = `str${type}`;
  const id = `id${type}`;

  const TRES_SEGUNDOS = 3000;

  function handleShare() {
    const url = `http://localhost:3000/${page}/${detailsPage[id]}`;
    copy(url);
    setLinlCopy(true);
    setTimeout(() => {
      setLinlCopy(false);
    }, TRES_SEGUNDOS);
  }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const isFavorite = storage.some((obj) => obj.id === detailsPage[id]);
    setFavorite(isFavorite);
  }, [detailsPage]);

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
    <header>
      <img
        height="100px"
        src={ detailsPage[image] }
        alt={ detailsPage[title] }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{detailsPage[title]}</h1>
      { linkCopy && 'Link copiado!'}
      <button
        onClick={ handleShare }
        type="button"
        data-testid="share-btn"
      >
        share
      </button>

      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ handleFavorite }
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
      >
        <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="favorito" />
      </button>
      {/* { !favorite && (
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={ handleFavorite }
          src={ whiteHeartIcon }
        >
          <img src={ whiteHeartIcon } alt="favorito" />
        </button>)} */}
      <p data-testid="recipe-category">{strCategory}</p>
    </header>
  );
}

HeaderRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};

export default HeaderRecipes;
