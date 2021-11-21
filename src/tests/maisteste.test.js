import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';
import * as genericAPIs from '../services/genericAPIs';
import * as categorysAPI from '../services/categorysAPI';
import meals from './utils/meals';
import mealCategories from './utils/mealCategories';

const mockFoodFetch = () => {
  jest.spyOn(genericAPIs, 'default').mockResolvedValue(meals);
};

const mockFoodFetchCategory = () => {
  jest.spyOn(categorysAPI, 'default').mockResolvedValue(mealCategories);
};

describe('Recipes List - comidas', () => {
  beforeAll(mockFoodFetch);
  beforeAll(mockFoodFetchCategory);
  it('renderiza 12 cards de receita', async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    const tres = 3;

    expect(categorysAPI.default).toHaveBeenCalled();
    expect(genericAPIs.default).toHaveBeenCalled();
    userEvent.click(screen.getByTestId('search-top-btn'));
    const total = screen.getAllByRole('radio');
    expect(total.length).toBe(tres);
  });
});
