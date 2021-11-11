import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import recipesDetailsAPI from '../services/recipesDetailsAPI';

function useFetchRecipeDetails(url, type) {
  const { setDetailsPage } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const returnResultAPI = await recipesDetailsAPI(url, type);
      setDetailsPage(returnResultAPI[0]);
    })();
  }, []);
}

export default useFetchRecipeDetails;
