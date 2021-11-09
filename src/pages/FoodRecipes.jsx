import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetchRecipes from '../hooks/useFetchRecipes';
import useFetchCategoryList from '../hooks/useFetchCategoryList';
import CardRecipe from '../components/CardRecipe';
import CategoryButtons from '../components/CategoryButtons';
import AppContext from '../context/AppContext';

function FoodRecipes() {
  const { initialRecipes } = useContext(AppContext);

  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  const key = 'meals';

  useFetchRecipes(url, key);
  const arrayOfCategory = useFetchCategoryList(urlCategory, key);

  return (
    <main>
      <Header title="Comidas" bool />
      {arrayOfCategory.map((obj, index) => (
        <CategoryButtons key={ index } categoryName={ obj.strCategory } type={ key } />
      ))}
      { initialRecipes.map((objRecipe, index) => (
        <CardRecipe key={ index } type="Meal" recipe={ objRecipe } index={ index } />
      )) }
      <Footer />
    </main>
  );
}
export default FoodRecipes;
