import React from 'react';

function HeaderRecipes({ strMealThumb, strMeal }) {
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
    </header>
  );
}

export default HeaderRecipes;
