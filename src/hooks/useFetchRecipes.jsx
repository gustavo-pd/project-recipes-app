import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import genericAPIs from '../services/genericAPIs';

function useFetchRecipes(url, key, callback) {
  const { setInitialRecipes, initialRecipes } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const recipes = await genericAPIs(url, key);
      const arrayOfRecipes = [...recipes];
      const maxOfCards = 12;
      arrayOfRecipes.splice(maxOfCards, arrayOfRecipes.length);
      setInitialRecipes(arrayOfRecipes);
      callback(arrayOfRecipes);
    })();
  }, []);
  return initialRecipes;
}

export default useFetchRecipes;
