import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetchRecipes from '../hooks/useFetchRecipes';
import useFetchCategoryList from '../hooks/useFetchCategoryList';
import CardRecipe from '../components/CardRecipe';
import CategoryButtons from '../components/CategoryButtons';
import AppContext from '../context/AppContext';
import '../components/css/Meals.css';

function FoodRecipes() {
  const { initialRecipes, setInitialRecipes, searchBar,
    recipeMealIngredients, renderMealIngredients } = useContext(AppContext);
  const [initialFood, setInitalFood] = useState([]);

  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  const key = 'meals';

  useFetchRecipes(url, key, setInitalFood);
  const arrayOfCategory = useFetchCategoryList(urlCategory, key);

  return (
    <main className="main-meal">
      <Header title="Comidas" bool />
      <div className="nav">
        { !searchBar && (
          <div className="container">
            <button
              className="category-button"
              data-testid="All-category-filter"
              type="button"
              onClick={ () => setInitialRecipes(initialFood) }
            >
              All
            </button>
          </div>) }
        { !searchBar && (arrayOfCategory.map((obj, index) => (
          <CategoryButtons
            key={ index }
            categoryName={ obj.strCategory }
            type={ key }
            initial={ initialFood }
          />
        )))}
      </div>
      <div className="container-cards">
        { renderMealIngredients ? (
          !searchBar && recipeMealIngredients.map((objRecipe, index) => (
            <CardRecipe
              page="comidas"
              id={ objRecipe.idMeal }
              key={ index }
              type="Meal"
              recipe={ objRecipe }
              index={ index }
            />
          )))
          : (
            !searchBar && initialRecipes.map((objRecipe2, index) => (
              <CardRecipe
                page="comidas"
                id={ objRecipe2.idMeal }
                key={ index }
                type="Meal"
                recipe={ objRecipe2 }
                index={ index }
              />
            ))) }
      </div>
      <Footer />
    </main>
  );
}
export default FoodRecipes;
