import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './css/CardRecipe.css';
import './css/CategoryButtons.css';
import AppContext from '../context/AppContext';
import fetchCategoryRecipes from '../services/categoryRecipes';

function CategoryButtons({ categoryName, type, initial }) {
  const { setInitialRecipes } = useContext(AppContext);
  const [initalParam, setInitialParam] = useState('');

  async function handleClick(param) {
    if (initalParam === param) {
      return setInitialRecipes(initial);
    }
    const urlMeal = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`;
    const urlDrink = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`;
    const url = (type === 'meals') ? urlMeal : urlDrink;
    const recipes = await fetchCategoryRecipes(url, type);
    const arrayOfRecipes = [...recipes];
    const maxOfCards = 12;
    arrayOfRecipes.splice(maxOfCards, arrayOfRecipes.length);
    setInitialRecipes(arrayOfRecipes);
    setInitialParam(param);
  }

  return (
    <div className="container">
      <button
        className="category-button"
        type="button"
        onClick={ () => handleClick(categoryName) }
        data-testid={ `${categoryName}-category-filter` }
      >
        { categoryName }
      </button>
    </div>
  );
}

CategoryButtons.propTypes = {
  categoryName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  initial: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CategoryButtons;
