import React from 'react';
import { shape, func } from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFood({ history }) {
  const searchByIngredient = () => {
    history.push('/explorar/comidas/ingredientes');
  };

  const searchByArea = () => {
    history.push('/explorar/comidas/area');
  };

  return (
    <main>
      <Header title="Explorar Comidas" bool={ false } />
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
          data-testid="explore-by-area"
          type="button"
          className="by-area-btn"
          onClick={ searchByArea }
        >
          Por Local de Origem
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

ExploreFood.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
};

export default ExploreFood;
