import React from 'react';
// import data from '../../services/data';

function HeaderRecipes({ strMealThumb, strMeal }) {
  return (
    <header>
      <img height="100px" src={ strMealThumb } alt={ strMeal } data-testid="recipe-photo" />
      <h2 data-testid="recipe-title">{strMeal}</h2>
      <button type="button" data-testid="share-btn">Search</button>
      <button type="button" data-testid="favorite-btn">Favorites</button>
    </header>
  );
}

export default HeaderRecipes;
