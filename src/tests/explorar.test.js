import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

describe('explorar', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/explorar');
    });

    const explorarComidas = screen.getByTestId('explore-food');
    const explorarBebidas = screen.getByTestId('explore-drinks');

    expect(explorarComidas).toHaveTextContent('Explorar Comidas');
    expect(explorarBebidas).toHaveTextContent('Explorar Bebidas');

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);

    userEvent.click(explorarComidas);
    await expect(window.location.pathname).toBe('/explorar/comidas');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/explorar');
    });

    const explorarComidas = screen.getByTestId('explore-food');
    const explorarBebidas = screen.getByTestId('explore-drinks');

    expect(explorarComidas).toHaveTextContent('Explorar Comidas');
    expect(explorarBebidas).toHaveTextContent('Explorar Bebidas');

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);

    userEvent.click(explorarBebidas);
    await expect(window.location.pathname).toBe('/explorar/bebidas');
  });
});
