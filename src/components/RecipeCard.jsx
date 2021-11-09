import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

function renderDrinks(limitedCardsArray) {
  return (
    limitedCardsArray.map((recipe, index) => (
      <div key={ recipe.strDrink }>
        <img
          data-testid={ `${index + 1}-card-img` }
          alt="card-img"
          src={ recipe.strDrinkThumb }
          height="100px"
        />
        <p data-testid={ `${index + 1}-card-name` }> </p>
        {' '}
        {recipe.strDrink}
      </div>))
  );
}

function renderMeals(limitedCardsArray) {
  return (
    limitedCardsArray.map((recipe, index) => (
      <div key={ recipe.strMeal }>
        <img
          data-testid={ `${index}-card-img` }
          alt="card-img"
          src={ recipe.strMealThumb }
          height="100px"
        />
        <p data-testid={ `${index}-card-name` }> </p>
        {' '}
        {recipe.strMeal}
      </div>))
  );
}

function RecipeCard({ cardArray }) {
  const history = useHistory();
  const { pathname } = history.location;
  const maxNumber = 12;
  const limitedCardsArray = cardArray.slice(0, maxNumber);

  return (
    <section>
      { pathname === '/bebidas' && renderDrinks(limitedCardsArray)}
      { pathname === '/comidas' && renderMeals(limitedCardsArray)}
    </section>
  );
}

RecipeCard.propTypes = {
  cardArray: PropTypes.objectOf(PropTypes.array).isRequired,
};
export default RecipeCard;
