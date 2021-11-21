import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

describe('drinks ingredientes', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/explorar/comidas');
    });

    const tres = 3;
    const buttons = screen.getAllByRole('button');
    await expect(buttons.length).toEqual(tres);

    userEvent.click(buttons[2]);
  });
});

describe('drinks ingredientes', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/explorar/comidas');
    });

    const tres = 3;
    const buttons = screen.getAllByRole('button');
    await expect(buttons.length).toEqual(tres);

    userEvent.click(buttons[2]);

    expect(window.location.pathname).toEqual('/comidas/undefined');
  });
});
