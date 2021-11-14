import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function useLocalStorageToUpdateRecipes(call1, call2) {
  const { favoriteIcon } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
        return localStorage.setItem('favoriteRecipes', JSON.stringify(''));
      }
      const storage = await JSON.parse(localStorage.getItem('favoriteRecipes'));
      await call1([...storage]);
      await call2([...storage]);
    })();
  }, [favoriteIcon]);
}

export default useLocalStorageToUpdateRecipes;
