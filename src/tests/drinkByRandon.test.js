import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

describe('drinks ingredientes', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/explorar/bebidas');
    });

    const dois = 2;
    const buttons = screen.getAllByRole('button');
    await expect(buttons.length).toEqual(dois);

    userEvent.click(buttons[1]);
  });
});

describe('drinks ingredientes', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/explorar/bebidas');
    });

    const dois = 2;
    const buttons = screen.getAllByRole('button');
    await expect(buttons.length).toEqual(dois);

    userEvent.click(buttons[1]);

    expect(window.location.pathname).toEqual('/bebidas/undefined');
  });
});
