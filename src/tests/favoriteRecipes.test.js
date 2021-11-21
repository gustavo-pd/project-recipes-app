import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

const favoriteRecipes = [
  {
    alcoholicOrNot: 'Optional alcohol',
    area: '',
    category: 'Ordinary Drink',
    id: '15997',
    image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    name: 'GG',
    type: 'bebida',
  },
  {
    alcoholicOrNot: '',
    area: 'Croatian',
    category: 'Side',
    id: '53060',
    image: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
    name: 'Burek',
    type: 'comida',
  },
];
const horizontalName0 = '0-horizontal-name';

describe('Favorite Recipes', () => {
  beforeAll(() => (
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes))));

  it('', async () => {
    await act(async () => {
      renderPath('/receitas-favoritas');
    });

    const titleDrink = screen.getByTestId(horizontalName0);
    const titleFood = screen.getByTestId('1-horizontal-name');
    expect(titleDrink).toHaveTextContent('GG');
    expect(titleFood).toHaveTextContent('Burek');

    const shareButton = screen.getByTestId('0-horizontal-share-btn');
    const faforiteButton = screen.getByTestId('1-horizontal-favorite-btn');

    expect(shareButton).toBeInTheDocument();
    expect(faforiteButton).toBeInTheDocument();

    const recipeCategory = screen.getByTestId('0-horizontal-top-text');
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory).toHaveTextContent('Optional alcohol');

    userEvent.click(shareButton);
    await screen.findByText(/Link copiado!/i);

    const filterButtonFood = screen.getByTestId('filter-by-food-btn');
    const filterButtonDrink = screen.getByTestId('filter-by-drink-btn');
    const filterButtonAll = screen.getByTestId('filter-by-all-btn');

    userEvent.click(filterButtonFood);
    const burek = screen.getByTestId(horizontalName0);
    expect(burek).toBeInTheDocument();
    expect(burek).toHaveTextContent('Burek');

    userEvent.click(filterButtonDrink);
    const GG = screen.getByTestId(horizontalName0);
    expect(GG).toBeInTheDocument();
    expect(GG).toHaveTextContent('GG');

    userEvent.click(filterButtonAll);
    const burek2 = screen.getByTestId('1-horizontal-name');
    expect(GG).toBeInTheDocument();
    expect(GG).toHaveTextContent('GG');
    expect(burek2).toBeInTheDocument();
    expect(burek2).toHaveTextContent('Burek');
  });
});
