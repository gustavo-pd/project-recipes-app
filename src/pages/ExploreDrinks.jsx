import React, { useEffect, useState } from 'react';
import { shape, func } from 'prop-types';
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

    if (btn === 'Por Ingredientes') {
      history.push('/explorar/bebidas/ingredientes');
    } else if (btn === 'Me Surpreenda!') {
      history.push(`/bebidas/${randomId}`);
    }
  };

  return (
    <main>
      <Header title="Explorar Bebidas" bool={ false } />
      <section>
        <button
          data-testid="explore-by-ingredient"
          type="button"
          className="by-ingredient-btn"
          onClick={ handleClick }
        >
          Por Ingredientes
        </button>
        <button
          data-testid="explore-surprise"
          type="button"
          onClick={ handleClick }
        >
          Me Surpreenda!
        </button>
      </section>
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
