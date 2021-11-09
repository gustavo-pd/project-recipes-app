import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import genericAPIs from '../services/genericAPIs';

function useFetchRecipes(url, key) {
  const { initialRecipes, setInitialRecipes } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const recipes = await genericAPIs(url, key);
      setInitialRecipes(recipes);
    })();
  }, []);
  const arrayOfRecipes = [...initialRecipes];
  const maxOfCards = 12;
  arrayOfRecipes.splice(maxOfCards, arrayOfRecipes.length);

  return arrayOfRecipes;
}

export default useFetchRecipes;
