import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { saveFavoriteInLocalStorage } from '../../services/saveInProgressRecipes';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import AppContext from '../../context/AppContext';

function FavoriteIcon({ type, favorite, setFavorite, recipe = {}, index = '' }) {
  const { detailsPage, favoriteIcon, setFavoriteIcon } = useContext(AppContext);

  const id = `id${type}`;
  const image = `str${type}Thumb`;
  const title = `str${type}`;

  function handleFavorite() {
    setFavoriteIcon(!favoriteIcon);
    if (type === 'Meal' || type === 'Drink') {
      setFavorite(!favorite);
      const saveRecipe = {
        id: detailsPage[id],
        type: (type === 'Meal') ? 'comida' : 'bebida',
        area: (type === 'Meal') ? detailsPage.strArea : '',
        category: detailsPage.strCategory,
        alcoholicOrNot: (type === 'Meal') ? '' : detailsPage.strAlcoholic,
        name: detailsPage[title],
        image: detailsPage[image],
      };
      return saveFavoriteInLocalStorage(saveRecipe);
    }
    setFavorite(!favorite);
    saveFavoriteInLocalStorage(recipe);
  }

  return (
    <div>
      <button
        type="button"
        data-testid={ (index !== '') ? `${index}-horizontal-favorite-btn`
          : 'favorite-btn' }
        onClick={ handleFavorite }
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
      >
        <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="favorito" />
      </button>
    </div>
  );
}

FavoriteIcon.propTypes = {
  type: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  setFavorite: PropTypes.func.isRequired,
  index: PropTypes.number,
  recipe: PropTypes.objectOf(PropTypes.any),
};

FavoriteIcon.defaultProps = {
  recipe: {},
  index: '',
};

export default FavoriteIcon;
