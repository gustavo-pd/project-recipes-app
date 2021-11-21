import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

const path = '/comidas/53060';
describe('favorite icon', () => {
  it('', async () => {
    await act(async () => {
      renderPath(path);
    });

    const favoriteButton = screen.getByTestId('favorite-btn');
    expect(favoriteButton).toBeInTheDocument();

    userEvent.click(favoriteButton);
  });
});

describe('button dtails', () => {
  it('', async () => {
    await act(async () => {
      renderPath(path);
    });

    const buttonStart = screen.getByTestId('start-recipe-btn');

    expect(buttonStart).toHaveTextContent('Iniciar Receita');
    userEvent.click(buttonStart);

    expect(window.location.pathname).toEqual('/comidas/53060/in-progress');
  });
});

describe('button dtails', () => {
  beforeEach(() => {
    const save = {
      cocktails: {},
      meals: {
        53060: ['Filo Pastry - 1 Packet', 'Minced Beef - 150g', 'Onion - 150g'],
      },
    };

    localStorage.setItem('inProgressRecipes', JSON.stringify(save));
  });

  it('', async () => {
    await act(async () => {
      renderPath(path);
    });

    const buttonStart = screen.getByTestId('start-recipe-btn');

    expect(buttonStart).toHaveTextContent('Continuar Receita');
    userEvent.click(buttonStart);

    expect(window.location.pathname).toEqual('/comidas/53060/in-progress');
  });
});
