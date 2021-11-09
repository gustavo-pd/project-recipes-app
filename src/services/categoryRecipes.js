async function fetchCategoryRecipes(url, key) {
  const response = await fetch(url);
  const result = await response.json();
 return result[key];
}

export default fetchCategoryRecipes;
