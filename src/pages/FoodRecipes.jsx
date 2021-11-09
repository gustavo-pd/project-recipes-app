import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetchRecipes from '../hooks/useFetchRecipes';
import useFetchCategory from '../hooks/useFetchCategory';
import CardRecipe from '../components/CardRecipe';
import CategoryButtons from '../components/CategoryButtons';

function FoodRecipes() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const key = 'meals';

  const arrayOfRecipes = useFetchRecipes(url, key);
  const arrayOfCategory = useFetchCategory(urlCategory, key);

  return (
    <main>
      <Header title="Comidas" bool />
      {arrayOfCategory.map((obj, index) => (
        <CategoryButtons key={ index } categoryName={ obj.strCategory } />
      ))}
      { arrayOfRecipes.map((objRecipe, index) => (
        <CardRecipe key={ index } type="Meal" recipe={ objRecipe } index={ index } />
      )) }
      <Footer />
    </main>
  );
}
export default FoodRecipes;
