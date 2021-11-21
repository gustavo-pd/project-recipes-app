import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

const path = '/explorar/bebidas/ingredientes';

describe('drinks ingredientes', () => {
  it('', async () => {
    await act(async () => {
      renderPath(path);
    });
    await screen.findByText(/Gin/i);
    const gin = screen.getByTestId('2-card-name');
    expect(gin).toHaveTextContent('Gin');

    const doze = 12;
    const buttons = screen.getAllByRole('button');
    await expect(buttons.length).toEqual(doze);

    userEvent.click(buttons[1]);
  });
});
