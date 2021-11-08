import React from 'react';

function SearchBar() {
  return (
    <>
      <label htmlFor="ingredient-search-radio">
        <input type="radio" data-testid="ingredient-search-radio" name="filter" />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input type="radio" data-testid="name-search-radio" name="filter" />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input type="radio" data-testid="first-letter-search-radio" name="filter" />
        Primeira Letra
      </label>
      <button type="button" data-testid="exec-search-btn"> Buscar</button>
    </>
  );
}

export default SearchBar;
