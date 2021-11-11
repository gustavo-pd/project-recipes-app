import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function HeaderRecipes({ type }) {
  const { detailsPage } = useContext(AppContext);
  const { strCategory } = detailsPage;
  const image = `str${type}Thumb`;
  const title = `str${type}`;
  return (
    <header>
      <img
        height="100px"
        src={ detailsPage[image] }
        alt={ detailsPage[title] }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{detailsPage[title]}</h1>
      <button type="button" data-testid="share-btn">Search</button>
      <button type="button" data-testid="favorite-btn">Favorites</button>
      <p data-testid="recipe-category">{strCategory}</p>
    </header>
  );
}

HeaderRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};

export default HeaderRecipes;
