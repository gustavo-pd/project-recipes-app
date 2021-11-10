import React from 'react';
import { shape, func } from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks({ history }) {
  const searchByIngredient = () => {
    history.push('/explorar/bebidas/ingredientes');
  };

  return (
    <main>
      <Header title="Explorar Bebidas" bool={ false } />
      <section>
        <button
          data-testid="explore-by-ingredient"
          type="button"
          className="by-ingredient-btn"
          onClick={ searchByIngredient }
        >
          Por Ingredientes
        </button>
        <button
          data-testid="explore-surprise"
          type="button"
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
