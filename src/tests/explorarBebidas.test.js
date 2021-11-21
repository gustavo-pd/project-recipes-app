import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

describe('explorar', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/explorar/bebidas');
    });

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Explorar Bebidas');

    const porIngredientes = screen.getByTestId('explore-by-ingredient');
    const meSurpreenda = screen.getByTestId('explore-surprise');

    expect(porIngredientes).toHaveTextContent('Por Ingredientes');
    expect(meSurpreenda).toHaveTextContent('Me Surpreenda!');

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);

    userEvent.click(porIngredientes);
    await expect(window.location.pathname).toBe('/explorar/bebidas/ingredientes');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/explorar/bebidas');
    });

    const porIngredientes = screen.getByTestId('explore-by-ingredient');
    const meSurpreenda = screen.getByTestId('explore-surprise');

    expect(porIngredientes).toHaveTextContent('Por Ingredientes');
    expect(meSurpreenda).toHaveTextContent('Me Surpreenda!');

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);

    userEvent.click(meSurpreenda);
    await expect(window.location.pathname).toBe('/bebidas/undefined');
  });
});
