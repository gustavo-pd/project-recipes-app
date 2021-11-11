import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { checkMeals, checkDrinks,
  isCheckedDrink, isCheckedMeal } from '../../services/saveInProgressRecipes';
import CheckBox from '../CheckBox';
import './css/Lista.css';

function Lista({ string, index, boolean = false, id, type }) {
  const [checked, setChecked] = useState(false);

  const inProgressRecipes = {
    cocktails: {},
    meals: {},
  };

  const saveStorage = (check) => {
    if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
    checkMeals(check, type, id, string);
    checkDrinks(check, type, id, string);
  };

  function isChecked() {
    if (type === 'drinks') {
      return isCheckedDrink(id, string);
    }
    if (type === 'meals') {
      return isCheckedMeal(id, string);
    }
  }

  return (
    <li
      className={ isChecked() && 'checkedItem' }
      data-testid={ boolean ? `${index}-ingredient-step`
        : `${index}-ingredient-name-and-measure` }
    >
      <CheckBox
        setChecked={ setChecked }
        checked={ checked }
        boolean={ boolean }
        string={ string }
        saveStorage={ saveStorage }
        isChecked={ isChecked }
      />
      {string}

    </li>

  );
}

Lista.propTypes = {
  boolean: PropTypes.bool.isRequired,
  string: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Lista;
