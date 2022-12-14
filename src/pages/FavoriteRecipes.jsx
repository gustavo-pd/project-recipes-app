import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import FilterButton from '../components/favorite recipes/FilterButton';
import useLocalStorageToUpdateRecipes from '../hooks/useLocalStorageToUpdateRecipes';
import '../components/css/Meals.css';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([...favoriteRecipes]);

  useEffect(() => {
    (async () => {
      if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
        return localStorage.setItem('favoriteRecipes', JSON.stringify(''));
      }
      const storage = await JSON.parse(localStorage.getItem('favoriteRecipes'));
      await setFilterRecipes([...storage]);
      await setFavoriteRecipes([...storage]);
    })();
  }, []);

  useLocalStorageToUpdateRecipes(setFilterRecipes, setFavoriteRecipes);

  const handleFilter = ({ target: { name } }) => {
    if (name === 'Food') {
      const filterByFood = favoriteRecipes.filter((recipe) => recipe.type === 'comida');
      setFilterRecipes(filterByFood);
    }
    if (name === 'Drinks') {
      const filterByDrinks = favoriteRecipes.filter((recipe) => recipe.type === 'bebida');
      setFilterRecipes(filterByDrinks);
    }
    if (name === 'All') {
      setFilterRecipes(favoriteRecipes);
    }
  };

  return (
    <div className="main-meal">
      <Header title="Favorite Recipes" bool={ false } />
      <div className="nav">
        <FilterButton name="All" id="filter-by-all-btn" onClick={ handleFilter } />
        <FilterButton name="Food" id="filter-by-food-btn" onClick={ handleFilter } />
        <FilterButton name="Drinks" id="filter-by-drink-btn" onClick={ handleFilter } />
      </div>
      <div className="container-cards">
        {filterRecipes.map(
          (recipe, index) => (
            <FavoriteRecipeCard key={ recipe.name } recipe={ recipe } index={ index } />
          ),
        )}
      </div>
    </div>
  );
}
export default FavoriteRecipes;
