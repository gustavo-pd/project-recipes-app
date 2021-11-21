import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import recipesDetailsAPI from '../services/recipesDetailsAPI';

function useFetchRecipeDetails(url, type) {
  const { setDetailsPage } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const returnResultAPI = await recipesDetailsAPI(url, type);
      const result = (returnResultAPI === undefined) ? {} : await returnResultAPI[0];
      await setDetailsPage(result);
    })();
  }, []);
}

export default useFetchRecipeDetails;
