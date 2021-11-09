import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

function renderDrinks(limitedCardsArray) {
  return (
    limitedCardsArray.map((recipe, index) => (
      <div key={ recipe.strDrink } data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          alt="card-img"
          src={ recipe.strDrinkThumb }
          height="100px"
        />
        <p data-testid={ `${index}-card-name` }>{recipe.strDrink}</p>
      </div>))
  );
}

function renderMeals(limitedCardsArray) {
  return (
    limitedCardsArray.map((recipe, index) => (
      <div key={ recipe.strMeal } data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          alt="card-img"
          src={ recipe.strMealThumb }
          height="100px"
        />
        <p data-testid={ `${index}-card-name` }>{recipe.strMeal}</p>
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
