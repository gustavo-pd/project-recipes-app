import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function CheckBox({ boolean = false, setChecked, checked, saveStorage, isChecked }) {
  const { setDisabledButtonPrograss, disabledButtonPrograss } = useContext(AppContext);

  function handleChange({ target }) {
    setChecked(!checked);
    saveStorage(target.checked);
    setDisabledButtonPrograss(!disabledButtonPrograss);
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
  setChecked: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  saveStorage: PropTypes.func.isRequired,
  isChecked: PropTypes.func.isRequired,
};

export default CheckBox;
