import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientsCard from '../components/IngredientsCard';

function FoodsByIngredients() {
  const { setMealRecipeIngredients, setRenderMealIngredients } = useContext(AppContext);
  const history = useHistory();
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

  async function setRecipeMeal(ingredient) {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(URL);
    const { meals } = await response.json();
    const limitArray = 12;
    const arrayMeals = meals.slice(0, limitArray);
    setMealRecipeIngredients(arrayMeals);
    setRenderMealIngredients(true);
    console.log(meals);
    history.push('/comidas');
  }

  const limitArray = 12;
  const arrayIngredients = ingredients.slice(0, limitArray);

  return (
    <main>
      <Header title="Explorar Ingredientes" bool={ false } />
      {arrayIngredients.map(({ strIngredient }, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => setRecipeMeal(strIngredient) }
        >
          <IngredientsCard
            key={ strIngredient }
            index={ index }
            name={ strIngredient }
            image={
              `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`
            }
          />
        </button>
      ))}
      <Footer />
    </main>
  );
}

export default FoodsByIngredients;
