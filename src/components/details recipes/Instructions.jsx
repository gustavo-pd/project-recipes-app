import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './css/Instructions.css';

function Instructions() {
  const { detailsPage: { strInstructions } } = useContext(AppContext);
  return (
    <div data-testid="instructions" className="instructions-main">
      <h3 className="title">Instructions</h3>
      <p className="instructions-str">{strInstructions}</p>
    </div>
  );
}

export default Instructions;
