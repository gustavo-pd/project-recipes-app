import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

const data = '19/10/2021';

const doneRecipes = [
  {
    alcoholicOrNot: 'Optional alcohol',
    area: '',
    category: 'Ordinary Drink',
    doneDate: data,
    id: '15997',
    image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    name: 'GG',
    tags: [],
    type: 'bebida',
  },
  {
    alcoholicOrNot: '',
    area: 'Croatian',
    category: 'Side',
    doneDate: data,
    id: '53060',
    image: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
    name: 'Burek',
    tags: 'Streetfood, Onthego',
    type: 'comida',
  },
  {
    alcoholicOrNot: 'Alcoholic',
    area: '',
    category: 'Cocktail',
    doneDate: data,
    id: '17222',
    image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    name: 'A1',
    tags: [],
    type: 'bebida',
  },
];

const horizontalName0 = '0-horizontal-name';

describe('Favorite Recipes', () => {
  beforeAll(() => localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes)));

  it('', async () => {
    await act(async () => {
      renderPath('/receitas-feitas');
    });

    const GG = screen.getByTestId(horizontalName0);
    const burek = screen.getByTestId('1-horizontal-name');
    const A1 = screen.getByTestId('2-horizontal-name');

    expect(GG).toHaveTextContent('GG');
    expect(burek).toHaveTextContent('Burek');
    expect(A1).toHaveTextContent('A1');

    const shareButton = screen.getByTestId('2-horizontal-share-btn');

    expect(shareButton).toBeInTheDocument();

    const recipeCategory = screen.getByTestId('0-horizontal-top-text');
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory).toHaveTextContent('Optional alcohol');

    userEvent.click(shareButton);
    await screen.findByText(/Link copiado!/i);

    const filterButtonFood = screen.getByTestId('filter-by-food-btn');
    const filterButtonDrink = screen.getByTestId('filter-by-drink-btn');
    const filterButtonAll = screen.getByTestId('filter-by-all-btn');

    userEvent.click(filterButtonFood);
    const burek2 = screen.getByTestId(horizontalName0);
    expect(burek2).toBeInTheDocument();
    expect(burek2).toHaveTextContent('Burek');

    userEvent.click(filterButtonDrink);
    const GG2 = screen.getByTestId(horizontalName0);
    expect(GG2).toBeInTheDocument();
    expect(GG2).toHaveTextContent('GG');
    const A1_2 = screen.getByTestId('1-horizontal-name');
    expect(A1_2).toBeInTheDocument();
    expect(A1_2).toHaveTextContent('A1');

    userEvent.click(filterButtonAll);
    expect(GG).toHaveTextContent('GG');
    expect(burek).toHaveTextContent('Burek');
    expect(A1).toHaveTextContent('A1');
  });
});
