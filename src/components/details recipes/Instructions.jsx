import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Instructions() {
  const { detailsPage: { strInstructions } } = useContext(AppContext);
  return (
    <section data-testid="instructions">
      <h3>Instructions</h3>
      <p>{strInstructions}</p>
    </section>
  );
}

export default Instructions;
