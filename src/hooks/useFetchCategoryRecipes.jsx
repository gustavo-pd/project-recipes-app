import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import fetchCategoryRecipes from '../services/categoryRecipes';

function useFetchCategoryRecipes(url, key) {
  const { setInitialRecipes, renderCategoryRecipe } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const recipes = await fetchCategoryRecipes(url, key);
      const arrayOfRecipes = [...recipes];
      const maxOfCards = 12;
      arrayOfRecipes.splice(maxOfCards, arrayOfRecipes.length);
      setInitialRecipes(arrayOfRecipes);
    })();
  }, [renderCategoryRecipe]);
}

export default useFetchCategoryRecipes;
