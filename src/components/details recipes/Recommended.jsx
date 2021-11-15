import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import CardRecipe from '../CardRecipe';
import './css/Recommended.css';

function Recommended({ page, type }) {
  const { recomendacoes } = useContext(AppContext);
  const numberSix = 6;
  const filterRecommended = recomendacoes.splice(0, numberSix);
  return (
    <section className="recommended-card">
      {filterRecommended.map((drink, index) => (
        <CardRecipe
          page={ page }
          id={ drink.idDrink }
          key={ index }
          type={ type }
          recipe={ drink }
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
}.isRequired;

export default Recommended;
