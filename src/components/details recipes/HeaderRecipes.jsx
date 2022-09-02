import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import FavoriteIcon from './FavoriteIcon';
import ShareIcon from './ShareIcon';
import './css/HeaderRecipes.css';

// const copy = require('clipboard-copy');

function HeaderRecipes({ type, bool = false }) {
  const [favorite, setFavorite] = useState(false);
  const { detailsPage, setFavoriteRecipes } = useContext(AppContext);
  const { strCategory, strAlcoholic } = detailsPage;

  // const page = (type === 'Meal') ? 'comidas' : 'bebidas';
  const image = `str${type}Thumb`;
  const title = `str${type}`;
  const id = `id${type}`;

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
    <header className="main-header-details">
      <div className="card">
        <img
          className="image-details"
          src={ detailsPage[image] }
          alt={ detailsPage[title] }
          data-testid="recipe-photo"
        />
        <h2 data-testid="recipe-title">{detailsPage[title]}</h2>
      </div>
      <div className="icons">
        <ShareIcon type={ type } />
        <FavoriteIcon type={ type } favorite={ favorite } setFavorite={ setFavorite } />
      </div>
    </header>
  );
}

HeaderRecipes.propTypes = {
  type: PropTypes.string.isRequired,
  bool: PropTypes.bool,
};

HeaderRecipes.defaultProps = { bool: false };

export default HeaderRecipes;
