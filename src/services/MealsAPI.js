export const fetchMealsByIngredient = async (ingrediente) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const response = await fetch(URL);
  const json = await response.json();
  return json.meals;
};

export const fetchMealsByName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(URL);
  const json = await response.json();
  return json.meals;
};

export const fetchMealsByLetter = async (firstLetter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(URL);
  const json = await response.json();
  return json.meals;
};
