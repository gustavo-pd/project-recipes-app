import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';
import * as recipesDetailsAPI from '../services/recipesDetailsAPI';
import mealDetails from './utils/mealDetails';

const mockFoodrecipesDetailsFetch = () => {
  jest.spyOn(recipesDetailsAPI, 'default').mockResolvedValue(mealDetails);
};

const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();

describe('Food in progress 1', () => {
  beforeAll(mockFoodrecipesDetailsFetch);
  afterEach(() => localStorage.clear());
  it('verifica as funcionalidades da pagina', async () => {
    await act(async () => {
      renderPath('/comidas/52777/in-progress');
    });

    expect(recipesDetailsAPI.default).toHaveBeenCalled();
    await screen.findByText(/Mediterranean Pasta Salad/i);
    const shareButton = screen.getByTestId('share-btn');
    const faforiteButton = screen.getByTestId('favorite-btn');
    const recipeCategory = screen.getByTestId('recipe-category');

    expect(shareButton).toBeInTheDocument();
    expect(faforiteButton).toBeInTheDocument();
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory).toHaveTextContent('Seafood');

    await screen.findByText(/Seafood/i);
    userEvent.click(shareButton);
    await screen.findByText(/Link copiado!/i);
    const allCheckbox = screen.getAllByRole('checkbox');
    const MAX_LENGTH = 9;
    expect(allCheckbox.length).toBe(MAX_LENGTH);

    const lista1 = screen.getByTestId('0-ingredient-step');
    expect(lista1).toHaveTextContent('mozzarella balls - 200 g');
    const lista2 = screen.getByTestId('1-ingredient-step');
    expect(lista2).toHaveTextContent('baby plum tomatoes - 250 g');
    const lista3 = screen.getByTestId('2-ingredient-step');
    expect(lista3).toHaveTextContent('fresh basil - 1 bunch');
    const lista4 = screen.getByTestId('3-ingredient-step');
    expect(lista4).toHaveTextContent('farfalle - 350 g');
    const lista5 = screen.getByTestId('4-ingredient-step');
    expect(lista5).toHaveTextContent('extra virgin olive oil - 3 tablespoons');
    const lista6 = screen.getByTestId('5-ingredient-step');
    expect(lista6).toHaveTextContent('Green Olives - 40 g');
    const lista7 = screen.getByTestId('6-ingredient-step');
    expect(lista7).toHaveTextContent('tuna - 200 g');
    const lista8 = screen.getByTestId('7-ingredient-step');
    expect(lista8).toHaveTextContent('salt - to taste');
    const lista9 = screen.getByTestId('8-ingredient-step');
    expect(lista9).toHaveTextContent('pepper - to taste');
    userEvent.click(allCheckbox[0]);
    userEvent.click(allCheckbox[1]);
    const localStorageInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const storage = { 52777: ['mozzarella balls - 200 g', 'baby plum tomatoes - 250 g'] };
    expect(localStorageInProgress.meals).toEqual(storage);
  });
});

describe('Food in progress 2', () => {
  beforeAll(mockFoodrecipesDetailsFetch);
  afterEach(() => localStorage.clear());
  it('Verifica o que acontece ao clicar no botão', async () => {
    await act(async () => {
      renderPath('/comidas/52777/in-progress');
    });

    const allCheckbox = screen.getAllByRole('checkbox');
    const MAX_LENGTH = 9;
    expect(allCheckbox.length).toBe(MAX_LENGTH);

    userEvent.click(allCheckbox[0]);
    userEvent.click(allCheckbox[1]);
    userEvent.click(allCheckbox[2]);
    userEvent.click(allCheckbox[3]);
    userEvent.click(allCheckbox[4]);
    userEvent.click(allCheckbox[5]);
    userEvent.click(allCheckbox[6]);
    userEvent.click(allCheckbox[7]);
    userEvent.click(allCheckbox[8]);

    const finishButton = screen.getByTestId('finish-recipe-btn');
    userEvent.click(finishButton);
    await expect(window.location.pathname).toBe('/receitas-feitas');
    const localStorageDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const expectLocalStorage = [{
      alcoholicOrNot: '',
      area: 'Italian',
      category: 'Seafood',
      doneDate: `${dia}/${mes}/${ano}`,
      id: '52777',
      image: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
      name: 'Mediterranean Pasta Salad',
      tags: 'Pasta,Baking',
      type: 'comida',
    }];
    expect(localStorageDoneRecipes).toEqual(expectLocalStorage);
  });
});
