import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import CardRecipe from '../CardRecipe';
import './css/Recommended.css';

function Recommended({ page, type, idType }) {
  const { recomendacoes } = useContext(AppContext);

  const maxLength = 5;
  const filterRecommended = recomendacoes.filter((obj, index) => index <= maxLength);
  return (
    <section className="recommended-card">
      {filterRecommended.map((drinkOrMeals, index) => (
        <CardRecipe
          page={ page }
          id={ drinkOrMeals[idType] }
          key={ drinkOrMeals[idType] }
          type={ type }
          recipe={ drinkOrMeals }
          index={ index }
          bool
        />
      ))}
    </section>
  );
}

Recommended.propTypes = {
  page: PropTypes.string,
  type: PropTypes.string,
  idType: PropTypes.string,
}.isRequired;

export default Recommended;
