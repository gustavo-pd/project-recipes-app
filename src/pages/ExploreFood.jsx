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

    if (btn === 'Por Ingredientes') {
      history.push('/explorar/comidas/ingredientes');
    } else if (btn === 'Por Local de Origem') {
      history.push('/explorar/comidas/area');
    } else if (btn === 'Me Surpreenda!') {
      history.push(`/comidas/${randomId}`);
    }
  };

  return (
    <main>
      <Header title="Explorar Comidas" bool={ false } />
      <section>
        <button
          data-testid="explore-by-ingredient"
          type="button"
          className="explore-btn"
          onClick={ handleClick }
        >
          Por Ingredientes
        </button>
        <button
          data-testid="explore-by-area"
          type="button"
          className="explore-btn"
          onClick={ handleClick }
        >
          Por Local de Origem
        </button>
        <button
          data-testid="explore-surprise"
          type="button"
          onClick={ handleClick }
          className="explore-btn"
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
