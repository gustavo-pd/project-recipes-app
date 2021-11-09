import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './css/CardRecipe.css';
import useFetchCategoryRecipes from '../hooks/useFetchCategoryRecipes';
import AppContext from '../context/AppContext';

function CategoryButtons({ categoryName, type }) {
  const { setRenderCategoryRecipe } = useContext(AppContext);
  const url = 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

  useFetchCategoryRecipes(url, type);

  function handleClick() {
    setRenderCategoryRecipe(true);
  }

  return (
    <nav>
      <button
        type="button"
        onClick={ handleClick }
        data-testid={ `${categoryName}-category-filter` }
      >
        { categoryName }
      </button>
    </nav>
  );
}

CategoryButtons.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryButtons;
