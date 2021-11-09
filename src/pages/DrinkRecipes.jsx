import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipe from '../components/CardRecipe';
import useFetchRecipes from '../hooks/useFetchRecipes';
import CategoryButtons from '../components/CategoryButtons';
import useFetchCategory from '../hooks/useFetchCategory';

function DrinkRecipes() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const urlCategory = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const key = 'drinks';

  const arrayOfRecipes = useFetchRecipes(url, key);
  const arrayOfCategory = useFetchCategory(urlCategory, key);

  return (
    <main>
      <Header title="Bebidas" bool />
      {arrayOfCategory.map((obj, index) => (
        <CategoryButtons key={ index } categoryName={ obj.strCategory } />
      ))}
      { arrayOfRecipes.map((objRecipe, index) => (
        <CardRecipe key={ index } type="Drink" recipe={ objRecipe } index={ index } />
      )) }
      <Footer />
    </main>
  );
}
export default DrinkRecipes;
