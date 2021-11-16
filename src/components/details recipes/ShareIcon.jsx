import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import shareIcon from '../../images/shareIcon.svg';

const copy = window.navigator.clipboard;

function ShareIcon({ type, recipe = {}, index = '' }) {
  const [linkCopy, setLinlCopy] = useState(false);
  const { detailsPage } = useContext(AppContext);

  const page = () => {
    if (type === 'Meal' || type === 'comida') {
      return 'comidas';
    }
    if (type === 'Drink' || type === 'bebida') {
      return 'bebidas';
    }
  };

  const recipeId = () => {
    if (type === 'Meal' || type === 'Drink') {
      const id = `id${type}`;
      return detailsPage[id];
    }
    return recipe.id;
  };

  const TRES_SEGUNDOS = 3000;

  // function copyToClipboard(text) {
  //   if(navigator.clipboard) {
  //     navigator.clipboard.writeText(text);
  //   }
  //   else{
  //     alert(text);
  //   }
  // }

  function handleShare() {
    const url = `http://localhost:3000/${page()}/${recipeId()}`;
    if (copy) {
      copy.writeText(url);
    }
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
        src={ shareIcon }
        data-testid={ (index !== '') ? `${index}-horizontal-share-btn` : 'share-btn' }
      >
        <img src={ shareIcon } alt="Compartilhar" />
      </button>
    </div>
  );
}

ShareIcon.propTypes = {
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number,
};

ShareIcon.defaultProps = { index: '' };

export default ShareIcon;
