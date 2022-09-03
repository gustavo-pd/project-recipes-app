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
    <main className="main-explore">
      <Header title="Explore" bool={ false } />
      <div className="explore-page">
        <div className="container-buttons">
          <button
            data-testid="explore-food"
            type="button"
            className="explore-btn"
            onClick={ redirectExploreFood }
          >
            Explore Meals
          </button>
          <button
            data-testid="explore-drinks"
            type="button"
            className="explore-btn"
            onClick={ redirectExploreDrinks }
          >
            Explore Drinks
          </button>
        </div>
      </div>
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
