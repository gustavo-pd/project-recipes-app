import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';
import './css/SearchBar.css';
import {
  fetchMealsByIngredient,
  fetchMealsByLetter,
  fetchMealsByName,
} from '../services/MealsAPI';
import {
  fetchDrinksByIngredient,
  fetchDrinksByName,
  fetchDrinksByLetter,
} from '../services/DrinksAPI';
import RecipeCard from './RecipeCard';

function SearchBar() {
  const { setMealsFilter, setDrinksFilter, searchBar } = useContext(AppContext);
  const [searchFilter, setSearchBarFilter] = useState('nome');
  const [inputValue, setInputValue] = useState('');
  const [cardArray, setCardArray] = useState([]);
  const history = useHistory();

  const errorMessage = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  const redirectFoodDetails = (id) => {
    history.push(`/comidas/${id}`);
  };

  const redirectDrinkDetails = (id) => {
    history.push(`/bebidas/${id}`);
  };

  const mealsFetch = async () => {
    if (searchFilter === 'ingrediente') {
      const mealsFilter = await fetchMealsByIngredient(inputValue);
      if (mealsFilter === null) {
        return (
          window.alert(errorMessage)
        );
      }
      setMealsFilter(mealsFilter);
      setCardArray(mealsFilter);
      const verifyLength = () => mealsFilter.length === 1
      && redirectFoodDetails(mealsFilter[0].idMeal);
      verifyLength();
    }

    if (searchFilter === 'nome') {
      const mealsFilter = await fetchMealsByName(inputValue);
      if (mealsFilter === null) {
        return (
          window.alert(errorMessage)
        );
      }
      setMealsFilter(mealsFilter);
      setCardArray(mealsFilter);
      const verifyLength = () => mealsFilter.length === 1
      && redirectFoodDetails(mealsFilter[0].idMeal);
      verifyLength();
    }

    if (searchFilter === 'letra') {
      if (inputValue.length > 1) {
        return (
          window.alert('Sua busca deve conter somente 1 (um) caracter')
        );
      }
      const mealsFilter = await fetchMealsByLetter(inputValue);
      if (mealsFilter === null) {
        return (
          window.alert(errorMessage)
        );
      }
      setMealsFilter(mealsFilter);
      setCardArray(mealsFilter);
      const verifyLength = () => mealsFilter.length === 1
      && redirectFoodDetails(mealsFilter[0].idMeal);
      verifyLength();
    }
  };

  const drinksFetch = async () => {
    if (searchFilter === 'ingrediente') {
      const drinksFilter = await fetchDrinksByIngredient(inputValue);
      if (drinksFilter === null) {
        return (
          window.alert(errorMessage)
        );
      }
      setDrinksFilter(drinksFilter);
      setCardArray(drinksFilter);
      const verifyLength = () => drinksFilter.length === 1
      && redirectDrinkDetails(drinksFilter[0].idDrink);
      verifyLength();
    }

    if (searchFilter === 'nome') {
      const drinksFilter = await fetchDrinksByName(inputValue);
      if (drinksFilter === null) {
        return (
          window.alert(errorMessage)
        );
      }
      setDrinksFilter(drinksFilter);
      setCardArray(drinksFilter);
      const verifyLength = () => drinksFilter.length === 1
      && redirectDrinkDetails(drinksFilter[0].idDrink);
      verifyLength();
    }

    if (searchFilter === 'letra') {
      if (inputValue.length > 1) {
        return (
          window.alert('Sua busca deve conter somente 1 (um) caracter')
        );
      }
      const drinksFilter = await fetchDrinksByLetter(inputValue);
      if (drinksFilter === null) {
        return (
          window.alert(errorMessage)
        );
      }
      setDrinksFilter(drinksFilter);
      setCardArray(drinksFilter);
      const verifyLength = () => drinksFilter.length === 1
      && redirectDrinkDetails(drinksFilter[0].idDrink);
      verifyLength();
    }
  };

  const handleClick = async () => {
    const { pathname } = history.location;
    const ternario = () => (pathname === '/comidas' ? mealsFetch() : drinksFetch());
    ternario();
  };

  return (
    <nav className="main-search-bar">
      <div className="sec-search-bar">
        <input
          className="input-search"
          type="text"
          data-testid="search-input"
          onChange={ ({ target }) => setInputValue(target.value) }
        />
        <div className="container-input">
          <label htmlFor="ingredient-search-radio">
            <input
              type="radio"
              onChange={ () => setSearchBarFilter('ingrediente') }
              data-testid="ingredient-search-radio"
              name="filter"
              value="ingrediente"
            />
            Ingrediente
          </label>
        </div>
        <div className="container-input">
          <label htmlFor="name-search-radio">
            <input
              type="radio"
              onChange={ () => setSearchBarFilter('nome') }
              data-testid="name-search-radio"
              name="filter"
              value="nome"
            />
            Nome
          </label>
        </div>
        <div className="container-input">
          <label htmlFor="first-letter-search-radio">
            <input
              type="radio"
              onChange={ () => setSearchBarFilter('letra') }
              data-testid="first-letter-search-radio"
              name="filter"
              value="letra"
            />
            Primeira Letra
          </label>
        </div>
        <button
          className="button-search"
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleClick }
        >
          {' '}
          Buscar

        </button>
        { searchBar && <RecipeCard cardArray={ cardArray } /> }
      </div>
    </nav>
  );
}

export default SearchBar;
