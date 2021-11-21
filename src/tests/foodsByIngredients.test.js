import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

const path = '/explorar/comidas/ingredientes';
const cardName7 = '7-card-name';
const cardName0 = '0-card-name';

describe('food ingredientes', () => {
  it('', async () => {
    await act(async () => {
      renderPath(path);
    });
    await screen.findByText(/Aubergine/i);
    const aubergine = screen.getByTestId(cardName7);
    expect(aubergine).toHaveTextContent('Aubergine');

    await screen.findByText(/chicken/i);
    const chicken = screen.getByTestId(cardName0);
    expect(chicken).toHaveTextContent('Chicken');

    const doze = 12;
    const buttons = screen.getAllByRole('button');
    await expect(buttons.length).toEqual(doze);

    userEvent.click(buttons[1]);

    await act(async () => {
      expect(window.location.pathname).toEqual(path);
    });
  });
});
