import React, { useEffect, useState } from 'react';
import { shape, func } from 'prop-types';
import '../components/css/Explore.css';
import randomItemFetch from '../services/randomAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFood({ history }) {
  const [randomId, setRandomId] = useState();

  useEffect(() => {
    randomItemFetch('themealdb')
      .then((response) => setRandomId(response.meals[0].idMeal));
  }, []);

  const handleClick = ({ target }) => {
    const btn = target.innerHTML;

    if (btn === 'By Ingredients') {
      history.push('/explorar/comidas/ingredientes');
    } else if (btn === 'By Area Of Origin') {
      history.push('/explorar/comidas/area');
    } else if (btn === 'Surprise Me!') {
      history.push(`/comidas/${randomId}`);
    }
  };

  return (
    <main className="main-explore">
      <Header title="Explore Meals" bool={ false } />
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
            data-testid="explore-by-area"
            type="button"
            className="explore-btn"
            onClick={ handleClick }
          >
            By Area Of Origin
          </button>
          <button
            data-testid="explore-surprise"
            type="button"
            onClick={ handleClick }
            className="explore-btn"
          >
            Surprise Me!
          </button>
        </div>
      </div>
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
