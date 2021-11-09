import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import { fetchByIngredient, fetchByLetter, fetchByName } from '../services/MealsAPI';

function SearchBar() {
  const { setMealsFilter } = useContext(AppContext);
  const [searchFilter, setSearchFilter] = useState('nome');
  const [inputValue, setInputValue] = useState('');

  const handleClick = async () => {
    if (searchFilter === 'ingrediente') {
      console.log(inputValue);
      const mealsFilter = await fetchByIngredient(inputValue);
      setMealsFilter(mealsFilter);
      console.log(mealsFilter);
    }
    fetchByName(inputValue);

    fetchByLetter(inputValue);
  };

  return (
    <>
      <input
        type="text"
        data-testid="search-input"
        onChange={ ({ target }) => setInputValue(target.value) }
      />
      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          onChange={ () => setSearchFilter('ingrediente') }
          data-testid="ingredient-search-radio"
          name="filter"
          value="ingrediente"
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          type="radio"
          onChange={ () => setSearchFilter('nome') }
          data-testid="name-search-radio"
          name="filter"
          value="nome"
        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          onChange={ () => setSearchFilter('letra') }
          data-testid="first-letter-search-radio"
          name="filter"
          value="letra"
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        {' '}
        Buscar

      </button>
    </>
  );
}

export default SearchBar;
