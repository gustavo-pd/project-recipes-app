const genericAPIs = async (url, key) => {
  const result = await fetch(url);
  const recipes = await result.json();

  return recipes[key];
};

export default genericAPIs;
