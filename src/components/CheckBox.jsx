import React from 'react';
import PropTypes from 'prop-types';

function CheckBox({ boolean = false, setChecked, checked, saveStorage, isChecked }) {
  function handleChange({ target }) {
    setChecked(!checked);
    saveStorage(target.checked);
  }

  return boolean && (
    <input
      type="checkbox"
      onChange={ handleChange }
      checked={ isChecked() }
    />
  );
}

CheckBox.propTypes = {
  boolean: PropTypes.bool.isRequired,
};

export default CheckBox;
