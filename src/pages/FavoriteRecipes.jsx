import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
        return localStorage.setItem('favoriteRecipes', JSON.stringify(''));
      }
      const storage = await JSON.parse(localStorage.getItem('favoriteRecipes'));
      await setFavoriteRecipes([...storage]);
    })();
  }, []);
  return (
    <>
      <main>
        <Header title="Receitas Favoritas" bool={ false } />
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </main>
      <section>
        {console.log(favoriteRecipes)}
        {favoriteRecipes.map(
          (recipe, index) => (
            <FavoriteRecipeCard key={ recipe.name } recipe={ recipe } index={ index } />
          ),
        )}
      </section>
    </>
  );
}
export default FavoriteRecipes;
