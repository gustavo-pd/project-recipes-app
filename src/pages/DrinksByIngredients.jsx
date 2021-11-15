import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientsCard from '../components/IngredientsCard';

function DrinksByIngredients() {
  const [ingredients, setIngredientes] = useState([]);

  async function fetchIngredients() {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(URL);
    const listOfIngredients = await response.json();
    setIngredientes(listOfIngredients.drinks);
  }

  useEffect(() => {
    fetchIngredients();
  }, []);

  const limitArray = 12;
  const arrayIngredients = ingredients.slice(0, limitArray);

  return (
    <main>
      <Header title="Explorar Ingredientes" bool={ false } />
      {arrayIngredients.map((ingredient, index) => (
        <IngredientsCard
          key={ ingredient.strIngredient1 }
          index={ index }
          name={ ingredient.strIngredient1 }
          image={
            `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png`
          }
        />
      ))}
      <Footer />
    </main>
  );
}
export default DrinksByIngredients;
