import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareIcon from './details recipes/ShareIcon';

function CardDoneRecipe({ recipe, index }) {
  const { id, type } = recipe;
  const url = `/${type}s/${id}`;
  const { tags } = recipe;
  const tagsRecipes = (tags || tags.toString().split(',')) ? tags.toString().split(',') : [];

  return (
    <div>
      <ShareIcon type={ recipe.type } index={ index } recipe={ recipe } />
      <Link to={ url }>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          width="100px"
          data-testid={ `${index}-horizontal-image` }
        />
        {recipe.alcoholicOrNot ? (
          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.alcoholicOrNot}
          </p>
        ) : (
          <p data-testid={ `${index}-horizontal-top-text` }>
            {`${recipe.area} - ${recipe.category}`}

          </p>
        )}
        <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
        <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>

        { tagsRecipes.map((tag) => (
          <p
            data-testid={ `${index}-${tag}-horizontal-tag` }
            key={ tag }
          >
            { tag }

          </p>)) }
      </Link>

    </div>
  );
}

CardDoneRecipe.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardDoneRecipe;
