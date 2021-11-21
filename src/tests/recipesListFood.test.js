import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';
import * as genericAPIs from '../services/genericAPIs';
import * as categorysAPI from '../services/categorysAPI';
import meals from './utils/meals';
import mealCategories from './utils/mealCategories';
import drinks from './utils/drinks';
import drinkCategories from './utils/drinkCategories';

const mockFoodFetch = () => {
  jest.spyOn(genericAPIs, 'default').mockResolvedValue(meals);
};

const mockFoodFetchCategory = () => {
  jest.spyOn(categorysAPI, 'default').mockResolvedValue(mealCategories);
};

const mockDrinkFetch = () => {
  jest.spyOn(genericAPIs, 'default').mockResolvedValue(drinks);
};

const mockDrinkFetchCategory = () => {
  jest.spyOn(categorysAPI, 'default').mockResolvedValue(drinkCategories);
};
const searchButton = 'search-top-btn';
const searchInput = 'search-input';
const ingredientRadioButton = 'ingredient-search-radio';
const nameRadioButton = 'name-search-radio';
const PrimeiraLeta = 'first-letter-search-radio';
const execRadioButton = 'exec-search-btn';

describe('', () => {
  beforeAll(mockDrinkFetch);
  beforeAll(mockDrinkFetchCategory);
  it('testa se ao clicar no icone de lupa, o search-bar é renderizado', async () => {
    await act(async () => {
      renderPath('/bebidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();
    const lupaIcon = screen.getByTestId(searchButton);
    userEvent.click(lupaIcon);

    expect(screen.getByTestId(searchInput)).toBeInTheDocument();
    expect(screen.getByTestId(ingredientRadioButton)).toBeInTheDocument();
    expect(screen.getByTestId(nameRadioButton)).toBeInTheDocument();
    expect(screen.getByTestId(PrimeiraLeta)).toBeInTheDocument();
    expect(screen.getByTestId(execRadioButton)).toBeInTheDocument();
  });

  it(`testa se ao clicar no radioButton "ingrediente" e digitar milk,
   renderiza os carsa corretos`, async () => {
    await act(async () => {
      renderPath('/bebidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();
    const lupaIcon = screen.getByTestId(searchButton);
    userEvent.click(lupaIcon);
    const ingrediente = screen.getByTestId(ingredientRadioButton);
    const name = screen.getByTestId(nameRadioButton);
    const primeiraLetra = screen.getByTestId(PrimeiraLeta);
    const button = screen.getByTestId(execRadioButton);
    expect(screen.getByTestId(searchInput)).toBeInTheDocument();
    expect(ingrediente).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(primeiraLetra).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    userEvent.click(ingrediente);
    userEvent.type(screen.getByTestId(searchInput), 'milk');
    userEvent.click(button);
    await screen.findByText(/Baby Eskimo/i);
    await screen.findByText(/Banana Milk Shake/i);
  });
});

describe('testa os icones do Header na página de bebidas', () => {
  beforeAll(mockDrinkFetch);
  beforeAll(mockDrinkFetchCategory);
  it(`testa se ao clicar no radioButton "Primeira Letra" e digitar c,
  renderiza os carsa corretos`, async () => {
    await act(async () => {
      renderPath('/bebidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();
    const lupaIcon = screen.getByTestId(searchButton);
    userEvent.click(lupaIcon);
    const ingrediente = screen.getByTestId(ingredientRadioButton);
    const name = screen.getByTestId(nameRadioButton);
    const primeiraLetra = screen.getByTestId(PrimeiraLeta);
    const button = screen.getByTestId(execRadioButton);
    expect(screen.getByTestId(searchInput)).toBeInTheDocument();
    expect(ingrediente).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(primeiraLetra).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    userEvent.click(primeiraLetra);
    userEvent.type(screen.getByTestId(searchInput), 'c');
    userEvent.click(button);
    await screen.findByText(/Casino/i);
  });
});

describe('testa os icones do Header na página de bebidas', () => {
  beforeAll(mockDrinkFetch);
  beforeAll(mockDrinkFetchCategory);
  it(`testa se ao clicar no radioButton "nome" e digitar "cuba",
  renderiza os carsa corretos`, async () => {
    await act(async () => {
      renderPath('/bebidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();
    const lupaIcon = screen.getByTestId(searchButton);
    userEvent.click(lupaIcon);
    const ingrediente = screen.getByTestId(ingredientRadioButton);
    const name = screen.getByTestId(nameRadioButton);
    const primeiraLetra = screen.getByTestId(PrimeiraLeta);
    const button = screen.getByTestId(execRadioButton);
    expect(screen.getByTestId(searchInput)).toBeInTheDocument();
    expect(ingrediente).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(primeiraLetra).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    userEvent.click(name);
    userEvent.type(screen.getByTestId(searchInput), 'cuba');
    userEvent.click(button);
    await screen.findByText(/Cuba Libre/i);
  });
});

describe('', () => {
  beforeAll(mockFoodFetch);
  beforeAll(mockFoodFetchCategory);
  it('testa se ao clicar no icone de lupa, o search-bar é renderizado', async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();
    const lupaIcon = screen.getByTestId(searchButton);
    userEvent.click(lupaIcon);
    expect(screen.getByTestId(searchInput)).toBeInTheDocument();
    expect(screen.getByTestId(ingredientRadioButton)).toBeInTheDocument();
    expect(screen.getByTestId(nameRadioButton)).toBeInTheDocument();
    expect(screen.getByTestId(PrimeiraLeta)).toBeInTheDocument();
    expect(screen.getByTestId(execRadioButton)).toBeInTheDocument();
  });

  it(`testa se ao clicar no radioButton "ingrediente" e digitar "tomato",
   renderiza os carsa corretos`, async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    const lupaIcon = screen.getByTestId(searchButton);
    userEvent.click(lupaIcon);

    const ingrediente = screen.getByTestId(ingredientRadioButton);
    const name = screen.getByTestId(nameRadioButton);
    const primeiraLetra = screen.getByTestId(PrimeiraLeta);
    const button = screen.getByTestId(execRadioButton);

    expect(screen.getByTestId(searchInput)).toBeInTheDocument();
    expect(ingrediente).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(primeiraLetra).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.click(ingrediente);
    userEvent.type(screen.getByTestId(searchInput), 'tomato');
    userEvent.click(button);

    await screen.findByText(/Brown Stew Chicken/i);
    await screen.findByText(/Callaloo Jamaican Style/i);
  });
});

describe('testa os icones do Header na página de comidas', () => {
  beforeAll(mockFoodFetch);
  beforeAll(mockFoodFetchCategory);
  it(`testa se ao clicar no radioButton "Primeira Letra" e digitar "p",
  renderiza os carsa corretos`, async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    const lupaIcon = screen.getByTestId(searchButton);
    userEvent.click(lupaIcon);

    const ingrediente = screen.getByTestId(ingredientRadioButton);

    const name = screen.getByTestId(nameRadioButton);
    const primeiraLetra = screen.getByTestId(PrimeiraLeta);
    const button = screen.getByTestId(execRadioButton);

    expect(screen.getByTestId(searchInput)).toBeInTheDocument();
    expect(ingrediente).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(primeiraLetra).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.click(primeiraLetra);
    userEvent.type(screen.getByTestId(searchInput), 'p');
    userEvent.click(button);

    await screen.findByText(/Pad See Ew/i);
    await screen.findByText(/Potato Gratin with Chicken/i);
  });
});

describe('testa os icones do Header na página de comidas', () => {
  beforeAll(mockFoodFetch);
  beforeAll(mockFoodFetchCategory);
  it(`testa se ao clicar no radioButton "nome" e digitar "pasta",
    renderiza os carsa corretos`, async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    const lupaIcon = screen.getByTestId(searchButton);
    userEvent.click(lupaIcon);

    const ingrediente = screen.getByTestId(ingredientRadioButton);
    const name = screen.getByTestId(nameRadioButton);
    const primeiraLetra = screen.getByTestId(PrimeiraLeta);
    const button = screen.getByTestId(execRadioButton);

    expect(screen.getByTestId(searchInput)).toBeInTheDocument();
    expect(ingrediente).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(primeiraLetra).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.click(name);
    userEvent.type(screen.getByTestId(searchInput), 'pasta');
    userEvent.click(button);
    await screen.findByText(/Mediterranean Pasta Salad/i);
  });
});
