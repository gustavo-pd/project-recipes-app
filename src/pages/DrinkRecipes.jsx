import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipe from '../components/CardRecipe';
import useFetchRecipes from '../hooks/useFetchRecipes';

function DrinkRecipes() {
  const { initialRecipes } = useContext(AppContext);

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const key = 'drinks';
  useFetchRecipes(url, key);
  const arrayOfRecipes = initialRecipes;
  const maxOfCards = 12;
  arrayOfRecipes.splice(maxOfCards, arrayOfRecipes.length);
  return (
    <main>
      <Header title="Bebidas" bool />
      { arrayOfRecipes.map((objRecipe, index) => (
        <CardRecipe key={ index } type="Drink" recipe={ objRecipe } index={ index } />
      )) }
      <Footer />
    </main>
  );
}
export default DrinkRecipes;
