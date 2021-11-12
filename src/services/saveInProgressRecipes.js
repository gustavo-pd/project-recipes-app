export const addMealsInLocalStorage = (saveObj, id, string) => {
  if (!saveObj.meals[id]) {
    const newSaveObj = {
      cocktails: { ...saveObj.cocktails },
      meals: { ...saveObj.meals, [id]: [string] },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newSaveObj));
  }
  if (saveObj.meals[id]) {
    const filterIngredients = saveObj.meals[id];
    const ingredients = filterIngredients.filter((ingredient) => ingredient !== string);
    const newSaveObj = {
      cocktails: { ...saveObj.cocktails },
      meals: { ...saveObj.meals, [id]: [...ingredients, string] },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newSaveObj));
  }
};

export const deleteMealsInLocalStorage = (saveObj, id, string) => {
  const filterIngredients = saveObj.meals[id];
  const ingredients = filterIngredients.filter((ingredient) => ingredient !== string);
  const newSaveObj = {
    cocktails: { ...saveObj.cocktails },
    meals: { ...saveObj.meals, [id]: [...ingredients] },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newSaveObj));
};

export const addDrinksInLocalStorage = (saveObj, id, string) => {
  if (!saveObj.cocktails[id]) {
    const newSaveObj = {
      cocktails: { ...saveObj.cocktails, [id]: [string] },
      meals: { ...saveObj.meals },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newSaveObj));
  }
  if (saveObj.cocktails[id]) {
    const filterIngredients = saveObj.cocktails[id];
    const ingredients = filterIngredients.filter((ingredient) => ingredient !== string);
    const newSaveObj = {
      cocktails: { ...saveObj.cocktails, [id]: [...ingredients, string] },
      meals: { ...saveObj.meals },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newSaveObj));
  }
};

export const deleteDrinksInLocalStorage = (saveObj, id, string) => {
  const filterIngredients = saveObj.cocktails[id];
  const ingredients = filterIngredients.filter((ingredient) => ingredient !== string);
  const newSaveObj = {
    cocktails: { ...saveObj.cocktails, [id]: [...ingredients] },
    meals: { ...saveObj.meals },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newSaveObj));
};

export const checkMeals = (check, type, id, string) => {
  const saveObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (check && type === 'meals') {
    addMealsInLocalStorage(saveObj, id, string);
  }
  if (!check && type === 'meals') {
    deleteMealsInLocalStorage(saveObj, id, string);
  }
};

export const checkDrinks = (check, type, id, string) => {
  const saveObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (check && type === 'drinks') {
    addDrinksInLocalStorage(saveObj, id, string);
  }
  if (!check && type === 'drinks') {
    deleteDrinksInLocalStorage(saveObj, id, string);
  }
};

export function isCheckedMeal(id, string) {
  if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
    return false;
  }
  const saveObj = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (!saveObj.meals[id]) {
    return false;
  }

  if (saveObj.meals[id]) {
    const filterIngredients = saveObj.meals[id];
    const bool = filterIngredients.some((ingredient) => ingredient === string);
    return bool;
  }
}

export function isCheckedDrink(id, string) {
  if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
    return false;
  }
  const saveObj = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (!saveObj.cocktails[id]) {
    return false;
  }

  if (saveObj.cocktails[id]) {
    const filterIngredients = saveObj.cocktails[id];
    const bool = filterIngredients.some((ingredient) => ingredient === string);
    return bool;
  }
}

export function saveFavoriteInLocalStorage(param) {
  if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
  const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const filterStorage = storage.filter((obj) => obj.id !== param.id);
  const newFavorites = [...filterStorage, param];
  const save = filterStorage.length < storage.length ? filterStorage : newFavorites;
  localStorage.setItem('favoriteRecipes', JSON.stringify(save));
}
