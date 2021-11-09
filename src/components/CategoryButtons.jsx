import React from 'react';
import PropTypes from 'prop-types';
import './css/CardRecipe.css';

function CategoryButtons({ categoryName }) {
  return (
    <nav>
      <button
        type="button"
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
