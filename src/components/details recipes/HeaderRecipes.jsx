import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import FavoriteIcon from './FavoriteIcon';
import ShareIcon from './ShareIcon';

// const copy = require('clipboard-copy');

function HeaderRecipes({ type }) {
  const [favorite, setFavorite] = useState(false);
  const { detailsPage, setFavoriteRecipes } = useContext(AppContext);
  const { strCategory } = detailsPage;

  // const page = (type === 'Meal') ? 'comidas' : 'bebidas';
  const image = `str${type}Thumb`;
  const title = `str${type}`;
  const id = `id${type}`;

  // function handleShare() {
  //   const url = `http://localhost:3000/${page}/${detailsPage[id]}`;
  //   copy(url);
  //   setLinlCopy(true);
  //   setTimeout(() => {
  //     setLinlCopy(false);
  //   }, TRES_SEGUNDOS);
  // }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const isFavorite = storage.some((obj) => obj.id === detailsPage[id]);
    setFavorite(isFavorite);
    setFavoriteRecipes(storage);
  }, [detailsPage]);

  return (
    <header>
      <img
        height="100px"
        src={ detailsPage[image] }
        alt={ detailsPage[title] }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{detailsPage[title]}</h1>
      <ShareIcon type={ type } />
      <FavoriteIcon type={ type } favorite={ favorite } setFavorite={ setFavorite } />
      <p data-testid="recipe-category">{strCategory}</p>
    </header>
  );
}

HeaderRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};

export default HeaderRecipes;
