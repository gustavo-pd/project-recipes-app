import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import SectionRecipes from '../components/details recipes/SectionRecipes';

function FoodDetails(props) {
  const { match: { params: { id } } } = props;
  const { setDetailsPage } = useContext(AppContext);

  useEffect(() => {
    async function getAPI() {
      const idDaReceita = id;
      console.log(id);
      const responseAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idDaReceita}`);
      const results = await responseAPI.json();
      const foodDetailsResults = results.meals[0];
    }
    getAPI();
  });

  return (
    <main>
      <HeaderRecipes />
      <SectionRecipes />
    </main>
  );
}

export default FoodDetails;
