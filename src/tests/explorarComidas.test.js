import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

describe('explorar', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/explorar/comidas');
    });
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Explorar Comidas');

    const porIngredientes = screen.getByTestId('explore-by-ingredient');
    const porArea = screen.getByTestId('explore-by-area');
    const meSurpreenda = screen.getByTestId('explore-surprise');

    expect(porIngredientes).toHaveTextContent('Por Ingredientes');
    expect(porArea).toHaveTextContent('Por Local de Origem');
    expect(meSurpreenda).toHaveTextContent('Me Surpreenda!');

    const buttons = screen.getAllByRole('button');

    const nTres = 3;
    expect(buttons.length).toBe(nTres);

    userEvent.click(porIngredientes);
    await expect(window.location.pathname).toBe('/explorar/comidas/ingredientes');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/explorar/comidas');
    });

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Explorar Comidas');

    const porIngredientes = screen.getByTestId('explore-by-ingredient');
    const porArea = screen.getByTestId('explore-by-area');
    const meSurpreenda = screen.getByTestId('explore-surprise');

    expect(porIngredientes).toHaveTextContent('Por Ingredientes');
    expect(porArea).toHaveTextContent('Por Local de Origem');
    expect(meSurpreenda).toHaveTextContent('Me Surpreenda!');

    const buttons = screen.getAllByRole('button');

    const nTres = 3;
    expect(buttons.length).toBe(nTres);

    userEvent.click(porArea);
    await expect(window.location.pathname).toBe('/explorar/comidas/area');
  });
});
