import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipe from '../components/CardRecipe';
import useFetchRecipes from '../hooks/useFetchRecipes';
import CategoryButtons from '../components/CategoryButtons';
import useFetchCategoryList from '../hooks/useFetchCategoryList';
import AppContext from '../context/AppContext';

function DrinkRecipes() {
  const { initialRecipes, setInitialRecipes } = useContext(AppContext);
  const [initialDrinks, setInitialDrinks] = useState([]);

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const urlCategory = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  const key = 'drinks';

  useFetchRecipes(url, key, setInitialDrinks);
  const arrayOfCategory = useFetchCategoryList(urlCategory, key);

  return (
    <main>
      <Header title="Bebidas" bool />
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => setInitialRecipes(initialDrinks) }
      >
        All

      </button>
      {arrayOfCategory.map((obj, index) => (
        <CategoryButtons
          key={ index }
          categoryName={ obj.strCategory }
          type={ key }
          initial={ initialDrinks }
        />
      ))}
      { initialRecipes.map((objRecipe, index) => (
        <CardRecipe key={ index } type="Drink" recipe={ objRecipe } index={ index } />
      )) }
      <Footer />
    </main>
  );
}
export default DrinkRecipes;
