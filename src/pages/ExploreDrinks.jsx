import React, { useEffect, useState } from 'react';
import { shape, func } from 'prop-types';
import '../components/css/Explore.css';
import randomItemFetch from '../services/randomAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks({ history }) {
  const [randomId, setRandomId] = useState();

  useEffect(() => {
    randomItemFetch('thecocktaildb')
      .then((response) => setRandomId(response.drinks[0].idDrink));
  }, []);

  const handleClick = ({ target }) => {
    const btn = target.innerHTML;

    if (btn === 'By Ingredients') {
      history.push('/explorar/bebidas/ingredientes');
    } else if (btn === 'Surprise Me!') {
      history.push(`/bebidas/${randomId}`);
    }
  };

  return (
    <main className="main-explore">
      <Header title="Explore Drinks" bool={ false } />
      <div className="explore-page">
        <div className="container-buttons">
          <button
            data-testid="explore-by-ingredient"
            type="button"
            className="explore-btn"
            onClick={ handleClick }
          >
            By Ingredients
          </button>
          <button
            data-testid="explore-surprise"
            type="button"
            className="explore-btn"
            onClick={ handleClick }
          >
            Surprise Me!
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

ExploreDrinks.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
};

export default ExploreDrinks;
