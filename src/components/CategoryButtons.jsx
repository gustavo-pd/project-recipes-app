import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './css/CardRecipe.css';
import AppContext from '../context/AppContext';
import fetchCategoryRecipes from '../services/categoryRecipes';

function CategoryButtons({ categoryName, type }) {
  const { setInitialRecipes } = useContext(AppContext);

  async function handleClick(param) {
    console.log(param);
    const urlMeal = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`;
    const urlDrink = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`;
    console.log(urlDrink);
    const url = (type === 'meals') ? urlMeal : urlDrink;
    const recipes = await fetchCategoryRecipes(url, type);
    console.log(recipes);
    const arrayOfRecipes = [...recipes];
    const maxOfCards = 12;
    arrayOfRecipes.splice(maxOfCards, arrayOfRecipes.length);
    setInitialRecipes(arrayOfRecipes);
  }

  return (
    <nav>
      <button
        type="button"
        onClick={ () => handleClick(categoryName) }
        data-testid={ `${categoryName}-category-filter` }
      >
        { categoryName }
      </button>
    </nav>
  );
}

CategoryButtons.propTypes = {
  categoryName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CategoryButtons;
