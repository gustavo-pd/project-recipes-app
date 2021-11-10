import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import categorysAPI from '../services/categorysAPI';

function useFetchCategoryList(url, key) {
  const { setCategory, category } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const categories = await categorysAPI(url, key);
      setCategory(categories);
    })();
  }, []);

  const arrayOfCategory = [...category];
  const maxOfCategory = 5;
  arrayOfCategory.splice(maxOfCategory, arrayOfCategory.length);
  return arrayOfCategory;
}

export default useFetchCategoryList;
