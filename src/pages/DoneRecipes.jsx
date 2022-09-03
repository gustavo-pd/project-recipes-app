import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterButton from '../components/favorite recipes/FilterButton';
import CardDoneRecipe from '../components/CardDoneRecipe';
import '../components/css/Meals.css';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filterDoneRecipes, setFilterDoneRecipes] = useState([...doneRecipes]);

  useEffect(() => {
    (async () => {
      if (!JSON.parse(localStorage.getItem('doneRecipes'))) {
        return localStorage.setItem('doneRecipes', JSON.stringify(''));
      }
      const storage = await JSON.parse(localStorage.getItem('doneRecipes'));
      await setDoneRecipes([...storage]);
      await setFilterDoneRecipes([...storage]);
    })();
  }, []);

  const handleFilter = ({ target: { name } }) => {
    if (name === 'Food') {
      const filterByFood = doneRecipes.filter((recipe) => recipe.type === 'comida');
      setFilterDoneRecipes(filterByFood);
    }
    if (name === 'Drinks') {
      const filterByDrinks = doneRecipes.filter((recipe) => recipe.type === 'bebida');
      setFilterDoneRecipes(filterByDrinks);
    }
    if (name === 'All') {
      setFilterDoneRecipes(doneRecipes);
    }
  };

  return (
    <div className="main-meal">
      <Header title="Done Recipes" bool={ false } />
      <div className="nav">
        <FilterButton name="All" onClick={ handleFilter } />
        <FilterButton name="Food" onClick={ handleFilter } />
        <FilterButton name="Drinks" onClick={ handleFilter } />
      </div>
      <div className="container-cards">
        {filterDoneRecipes.map(
          (recipe, index) => (
            <CardDoneRecipe key={ recipe.name } recipe={ recipe } index={ index } />
          ),
        )}
      </div>
    </div>
  );
}
export default DoneRecipes;
