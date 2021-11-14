import React from 'react';
import PropTypes from 'prop-types';

function FilterButton({ name, id, onClick }) {
  return (
    <button
      name={ name }
      type="button"
      data-testid={ id }
      onClick={ onClick }
    >
      {name}

    </button>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterButton;
