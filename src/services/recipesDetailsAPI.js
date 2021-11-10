async function recipesDetailsAPI(url, type) {
  const responseAPI = await fetch(url);
  const results = await responseAPI.json();
  const foodDetailsResults = results[type];
  return foodDetailsResults;
}

export default recipesDetailsAPI;
