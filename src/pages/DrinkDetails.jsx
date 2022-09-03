import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import useFetchRecomendacoes from '../hooks/useFetchRecomendacoes';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import Instructions from '../components/details recipes/Instructions';
import Ingredients from '../components/details recipes/Ingredients';
import AppContext from '../context/AppContext';
import ButtonDetails from '../components/details recipes/ButtonDetails';
import Recommended from '../components/details recipes/Recommended';
import '../components/css/FoodDetails.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DrinkDetails(props) {
  const { detailsPage } = useContext(AppContext);
  const { match: { params: { id } } } = props;
  const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const drinks = 'drinks';
  useFetchRecipeDetails(drinkURL, drinks);

  const recommendationsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  useFetchRecomendacoes(recommendationsURL, 'meals');

  return (
    <main className="main-food-details">
      <Header title="Bebidas" />
      <HeaderRecipes type="Drink" bool />
      <Instructions />
      <Ingredients recipe={ detailsPage } id={ id } type={ drinks } />
      <div className="recommended-container">
        <Recommended page="comidas" type="Meal" idType="idMeal" />
      </div>
      <div className="button-area">
        <ButtonDetails id={ id } type={ drinks } />
      </div>
      <Footer />
    </main>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DrinkDetails;
