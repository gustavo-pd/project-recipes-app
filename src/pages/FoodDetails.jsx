import React, { useContext } from 'react';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import SectionRecipes from '../components/details recipes/SectionRecipes';
import AppContext from '../context/AppContext';

function FoodDetails() {
  const { state } = useContext(AppContext);
  const { idMeal, strMealThumb } = state.meals[0];
  return (
    <main>
      <HeaderRecipes idMeal={ idMeal } strMealThumb={ strMealThumb } />
      <SectionRecipes />
    </main>
  );
}
export default FoodDetails;
