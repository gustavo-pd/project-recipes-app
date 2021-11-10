import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function HeaderRecipes() {
  const { detailsPage } = useContext(AppContext);
  const { strMeal, strMealThumb, strCategory } = detailsPage;
  return (
    <header>
      <img
        height="100px"
        src={ strMealThumb }
        alt={ strMeal }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{strMeal}</h1>
      <button type="button" data-testid="share-btn">Search</button>
      <button type="button" data-testid="favorite-btn">Favorites</button>
      <p data-testid="recipe-category">{strCategory}</p>
    </header>
  );
}

export default HeaderRecipes;
