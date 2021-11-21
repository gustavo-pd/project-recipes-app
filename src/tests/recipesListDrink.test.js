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

describe('Recipes List - comidas', () => {
  beforeAll(mockFoodFetch);
  beforeAll(mockFoodFetchCategory);
  it('renderiza 12 cards de receita', async () => {
    await act(async () => {
      renderPath('/comidas');
    });

    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('1-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('2-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('3-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('4-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('5-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('6-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('7-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('8-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('9-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('10-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('11-recipe-card')).toBeInTheDocument();

    const nameCard = screen.getByTestId('0-card-name');

    expect(nameCard).toBeInTheDocument();
    expect(screen.getByText('Corba')).toBeInTheDocument();
  });

  it('testa category butons', async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    expect(screen.getByTestId(`${mealCategories[0].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId(`${mealCategories[1].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId(`${mealCategories[2].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId(`${mealCategories[3].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId(`${mealCategories[4].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId('All-category-filter')).toBeInTheDocument();
  });
});

describe('testa se os botões funcionam', () => {
  beforeAll(mockFoodFetch);
  beforeAll(mockFoodFetchCategory);
  it('testa se ao clicar em "Beef", renderiza os cards de beef', async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    const beef = `${mealCategories[0].strCategory}-category-filter`;
    const BEEF_CATEGORY = screen.getByTestId(beef);
    userEvent.click(BEEF_CATEGORY);
    await screen.findByText(/Beef and Mustard Pie/i);
  });

  it('testa se ao clicar em "Chicken", renderiza os cards de chicken', async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    const beef = `${mealCategories[2].strCategory}-category-filter`;
    const BEEF_CATEGORY = screen.getByTestId(beef);
    userEvent.click(BEEF_CATEGORY);
    await screen.findByText(/Ayam Percik/i);
  });
});

describe('testa os icones do footer', () => {
  beforeAll(mockFoodFetch);
  beforeAll(mockFoodFetchCategory);
  it(`testa se ao clicar no icone de bebida, a pessoa é
  redirecionada para a página de bebidas`, async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();
    const ICON_DRINK = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(ICON_DRINK);

    expect(window.location.pathname).toBe('/bebidas');
  });
});

describe('Recipes List - comidas', () => {
  beforeAll(mockDrinkFetch);
  beforeAll(mockDrinkFetchCategory);
  it('renderiza 12 cards de receita', async () => {
    await act(async () => {
      renderPath('/bebidas');
    });

    expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('1-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('2-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('3-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('4-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('5-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('6-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('7-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('8-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('9-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('10-recipe-card')).toBeInTheDocument();
    expect(screen.getByTestId('11-recipe-card')).toBeInTheDocument();

    const nameCard = screen.getByTestId('0-card-name');

    expect(nameCard).toBeInTheDocument();
    expect(screen.getByText('GG')).toBeInTheDocument();
  });

  it('testa category butons', async () => {
    await act(async () => {
      renderPath('/bebidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    expect(screen.getByTestId(`${drinkCategories[0].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId(`${drinkCategories[1].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId(`${drinkCategories[2].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId(`${drinkCategories[3].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId(`${drinkCategories[4].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(screen.getByTestId('All-category-filter')).toBeInTheDocument();
  });
});

describe('testa se os botões funcionam', () => {
  beforeAll(mockDrinkFetch);
  beforeAll(mockDrinkFetchCategory);
  it('testa se ao clicar em "Cocoa", renderiza os cards de cocoa', async () => {
    await act(async () => {
      renderPath('/bebidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    const cocoa = `${drinkCategories[4].strCategory}-category-filter`;
    const COCOA_CATEGORY = screen.getByTestId(cocoa);
    userEvent.click(COCOA_CATEGORY);
    await screen.findByText(/Castillian Hot Chocolate/i);
  });

  it(`testa se ao clicar em "Milk / Float / Shake", renderiza os cards de 
  Milk / Float / Shake`, async () => {
    await act(async () => {
      renderPath('/bebidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();

    const milkFloatShake = `${drinkCategories[2].strCategory}-category-filter`;
    const MILK_FLOAT_SHAKE = screen.getByTestId(milkFloatShake);
    userEvent.click(MILK_FLOAT_SHAKE);
    await screen.findByText(/Florida Bushwacker/i);
  });
});

describe('testa os icones do footer', () => {
  beforeAll(mockFoodFetch);
  beforeAll(mockFoodFetchCategory);
  it(`testa se ao clicar no icone de comida, a pessoa é
  redirecionada para a página de comidas`, async () => {
    await act(async () => {
      renderPath('/bebidas');
    });
    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();
    const ICON_FOOD = screen.getByTestId('food-bottom-btn');
    userEvent.click(ICON_FOOD);

    expect(window.location.pathname).toBe('/comidas');
  });
});
