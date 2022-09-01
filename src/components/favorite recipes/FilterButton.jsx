import React from 'react';
import PropTypes from 'prop-types';
import '../css/CategoryButtons.css';

function FilterButton({ name, id, onClick }) {
  return (
    <div className="container">
      <button
        className="category-button"
        name={ name }
        type="button"
        data-testid={ id }
        onClick={ onClick }
      >
        {name}
      </button>
    </div>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterButton;
