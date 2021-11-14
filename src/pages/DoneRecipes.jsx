import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterButton from '../components/favorite recipes/FilterButton';
import CardDoneRecipe from '../components/CardDoneRecipe';

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
    <>
      <main>
        <Header title="Receitas Feitas" bool={ false } />
        <FilterButton name="All" id="filter-by-all-btn" onClick={ handleFilter } />
        <FilterButton name="Food" id="filter-by-food-btn" onClick={ handleFilter } />
        <FilterButton name="Drinks" id="filter-by-drink-btn" onClick={ handleFilter } />
      </main>
      <section>
        {filterDoneRecipes.map(
          (recipe, index) => (
            <CardDoneRecipe key={ recipe.name } recipe={ recipe } index={ index } />
          ),
        )}
      </section>
    </>
  );
}
export default DoneRecipes;
