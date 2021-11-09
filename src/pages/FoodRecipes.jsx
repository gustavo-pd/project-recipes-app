import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetchRecipes from '../hooks/useFetchRecipes';
import CardRecipe from '../components/CardRecipe';

function FoodRecipes() {
  const { initialRecipes } = useContext(AppContext);
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const key = 'meals';
  useFetchRecipes(url, key);
  const arrayOfRecipes = [...initialRecipes];
  const maxOfCards = 12;
  arrayOfRecipes.splice(maxOfCards, arrayOfRecipes.length);
  return (
    <main>
      {console.log(initialRecipes)}
      <Header title="Comidas" bool />
      { arrayOfRecipes.map((objRecipe, index) => (
        <CardRecipe key={ index } type="Meal" recipe={ objRecipe } index={ index } />
      )) }
      <Footer />
    </main>
  );
}
export default FoodRecipes;
