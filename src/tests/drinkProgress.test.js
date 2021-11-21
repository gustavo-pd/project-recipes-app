import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';
import * as recipesDetailsAPI from '../services/recipesDetailsAPI';
import drinkDetails from './utils/drinkDetails';

const mockDrinkrecipesDetailsFetch = () => {
  jest.spyOn(recipesDetailsAPI, 'default').mockResolvedValue(drinkDetails);
};

const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();

describe('Recipes List - comidas', () => {
  afterEach(() => localStorage.clear());
  beforeAll(mockDrinkrecipesDetailsFetch);
  it('renderiza 12 cards de receita', async () => {
    await act(async () => {
      renderPath('/bebidas/15997/in-progress');
    });

    expect(recipesDetailsAPI.default).toHaveBeenCalled();

    const shareButton = screen.getByTestId('share-btn');
    const faforiteButton = screen.getByTestId('favorite-btn');
    const recipeCategory = screen.getByTestId('recipe-category');

    expect(shareButton).toBeInTheDocument();
    expect(faforiteButton).toBeInTheDocument();
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory).toHaveTextContent('Ordinary Drink');

    await screen.findByText(/Ordinary Drink/i);
    userEvent.click(shareButton);
    await screen.findByText(/Link copiado!/i);
    const allCheckbox = screen.getAllByRole('checkbox');
    const MAX_LENGTH = 1;
    expect(allCheckbox.length).toBe(MAX_LENGTH);

    const lista1 = screen.getByTestId('0-ingredient-step');
    expect(lista1).toHaveTextContent('Galliano - 2 1/2 shots');

    userEvent.click(allCheckbox[0]);
    const localStorageInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const expectLocalStorage = { 15997: ['Galliano - 2 1/2 shots '] };
    expect(localStorageInProgress.cocktails).toEqual(expectLocalStorage);
  });
});

describe('Recipes List - comidas', () => {
  afterEach(() => localStorage.clear());
  beforeAll(mockDrinkrecipesDetailsFetch);
  it('renderiza 12 cards de receita', async () => {
    await act(async () => {
      renderPath('/bebidas/15997/in-progress');
    });

    expect(recipesDetailsAPI.default).toHaveBeenCalled();

    const allCheckbox = screen.getAllByRole('checkbox');
    const MAX_LENGTH = 1;
    expect(allCheckbox.length).toBe(MAX_LENGTH);

    userEvent.click(allCheckbox[0]);

    const finishButton = screen.getByTestId('finish-recipe-btn');
    userEvent.click(finishButton);

    await expect(window.location.pathname).toBe('/receitas-feitas');
    const localStorageDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const expectLocalStorage = [{
      alcoholicOrNot: 'Optional alcohol',
      area: '',
      category: 'Ordinary Drink',
      doneDate: `${dia}/${mes}/${ano}`,
      id: '15997',
      image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
      name: 'GG',
      tags: [],
      type: 'bebida',
    }];
    expect(localStorageDoneRecipes).toEqual(expectLocalStorage);
  });
});
