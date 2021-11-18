import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FoodsByOrigin() {
  const [origins, setOrigins] = useState([]);
  const [meals, setMeals] = useState([]);
  const [filter, setFilter] = useState('All');

  async function fetchOrigins() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    const response = await fetch(URL);
    const listOrigins = await response.json();
    setOrigins(listOrigins.meals);
  }

  useEffect(() => {
    fetchOrigins();
  }, []);

  async function fetchMeals() {
    if (filter === 'All') {
      const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(URL);
      const listMeals = await response.json();
      setMeals(listMeals.meals);
    } else {
      const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`;
      const response = await fetch(URL);
      const listMeals = await response.json();
      setMeals(listMeals.meals);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, [filter]);

  const selectFilter = (selected) => {
    setFilter(selected);
  };

  const renderFoods = (foods, index) => (
    <Link
      to={ `/comidas/${foods.idMeal}` }
      key={ foods.idMeal }
    >
      <li
        data-testid={ `${index}-recipe-card` }
      >
        <img
          alt={ foods.strMeal }
          src={ foods.strMealThumb }
          data-testid={ `${index}-card-img` }
          width="200px"
        />
        <span
          data-testid={ `${index}-card-name` }
        >
          { foods.strMeal }
        </span>
      </li>
    </Link>
  );

  const limitArray = 12;

  return (
    <main>
      <Header title="Explorar Origem" bool />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ ({ target }) => selectFilter(target.value) }
        value={ filter }
      >
        <option value="All" data-testid="All-option">All</option>
        {origins.map((origin) => (
          <option
            data-testid={ `${origin.strArea}-option` }
            key={ origin.strArea }
            value={ origin.strArea }
          >
            { origin.strArea }
          </option>
        ))}
      </select>
      <ul>
        {meals.map((meal, index) => {
          if (index < limitArray) return renderFoods(meal, index);
          return '';
        })}
      </ul>
      <Footer />
    </main>
  );
}
export default FoodsByOrigin;
