import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientsCard from '../components/IngredientsCard';

function FoodsByIngredients() {
  const [ingredients, setIngredients] = useState([]);

  async function fetchIngredients() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(URL);
    const listOfIngredients = await response.json();
    setIngredients(listOfIngredients.meals);
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
          key={ ingredient.strIngredient }
          index={ index }
          name={ ingredient.strIngredient }
          image={
            `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`
          }
        />
      ))}
      <Footer />
    </main>
  );
}

export default FoodsByIngredients;
