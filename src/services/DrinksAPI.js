export const fetchDrinksByIngredient = async (ingrediente) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const response = await fetch(URL);
  const json = await response.json();
  return json.drinks;
};

export const fetchDrinksByName = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(URL);
  const json = await response.json();
  return json.drinks;
};

export const fetchDrinksByLetter = async (firstLetter) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(URL);
  const json = await response.json();
  return json.drinks;
};
