import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import genericAPIs from '../services/genericAPIs';

function useFetchRecipes(url, key) {
  const { setInitialRecipes } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const recipes = await genericAPIs(url, key);
      setInitialRecipes(recipes);
    })();
  }, []);
}

export default useFetchRecipes;
