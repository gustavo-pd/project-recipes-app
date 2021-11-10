import React from 'react';
import { shape, func } from 'prop-types';
import '../components/css/Explore.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore({ history }) {
  const redirectExploreFood = () => {
    history.push('/explorar/comidas');
  };

  const redirectExploreDrinks = () => {
    history.push('/explorar/bebidas');
  };

  return (
    <main>
      <Header title="Explorar" bool={ false } />
      <section>
        <button
          data-testid="explore-food"
          type="button"
          className="explore-food-btn"
          onClick={ redirectExploreFood }
        >
          Explorar Comidas
        </button>
        <button
          data-testid="explore-drinks"
          type="button"
          className="explore-drinks-btn"
          onClick={ redirectExploreDrinks }
        >
          Explorar Bebidas
        </button>
      </section>
      <Footer />
    </main>
  );
}

Explore.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
};

export default Explore;
