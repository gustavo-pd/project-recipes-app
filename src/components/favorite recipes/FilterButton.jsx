import React from 'react';

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

export default FilterButton;
