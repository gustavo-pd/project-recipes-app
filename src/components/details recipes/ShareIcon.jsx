import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

const copy = require('clipboard-copy');

function ShareIcon({ type, recipe = {} }) {
  const [linkCopy, setLinlCopy] = useState(false);
  const { detailsPage } = useContext(AppContext);

  const page = () => {
    if (type === 'Meal' || type === 'Drink') {
      return (type === 'Meal') ? 'comidas' : 'bebidas';
    }
    return type;
  };

  const recipeId = () => {
    if (type === 'Meal' || type === 'Drink') {
      const id = `id${type}`;
      return detailsPage[id];
    }
    return recipe.id;
  };

  const TRES_SEGUNDOS = 3000;

  function handleShare() {
    const url = `http://localhost:3000/${page()}/${recipeId()}`;
    copy(url);
    setLinlCopy(true);
    setTimeout(() => {
      setLinlCopy(false);
    }, TRES_SEGUNDOS);
  }

  return (
    <div>
      { linkCopy && 'Link copiado!'}
      <button
        onClick={ handleShare }
        type="button"
        data-testid="share-btn"
      >
        share
      </button>
    </div>
  );
}

ShareIcon.propTypes = {
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ShareIcon;
