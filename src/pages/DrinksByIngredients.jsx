import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientsCard from '../components/IngredientsCard';

function DrinksByIngredients() {
  const { setRecipeIngredients, setRenderDrinksIngredients } = useContext(AppContext);
  const history = useHistory();
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

  async function setRecipeDrink(ingredient) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(URL);
    const { drinks } = await response.json();
    const limitArray = 12;
    const arrayDrinks = drinks.slice(0, limitArray);
    setRecipeIngredients(arrayDrinks);
    setRenderDrinksIngredients(true);
    console.log(drinks);
    history.push('/bebidas');
  }

  const limitArray = 12;
  const arrayIngredients = ingredients.slice(0, limitArray);

  return (
    <main>
      <Header title="Explorar Ingredientes" bool={ false } />
      {arrayIngredients.map(({ strIngredient1 }, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => setRecipeDrink(strIngredient1) }
        >
          <IngredientsCard
            key={ strIngredient1 }
            index={ index }
            name={ strIngredient1 }
            image={
              `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`
            }
          />
        </button>
      ))}
      <Footer />
    </main>
  );
}
export default DrinksByIngredients;
