import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

describe('profile', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/perfil');
    });

    const tres = 3;
    const buttons = screen.getAllByRole('button');
    await expect(buttons.length).toEqual(tres);
    userEvent.click(buttons[0]);

    expect(window.location.pathname).toEqual('/receitas-feitas');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/perfil');
    });

    const tres = 3;
    const buttons = screen.getAllByRole('button');
    await expect(buttons.length).toEqual(tres);
    userEvent.click(buttons[1]);

    expect(window.location.pathname).toEqual('/receitas-favoritas');
  });
});

describe('', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/perfil');
    });

    const tres = 3;
    const buttons = screen.getAllByRole('button');
    await expect(buttons.length).toEqual(tres);
    userEvent.click(buttons[2]);

    expect(window.location.pathname).toEqual('/');
  });
});
