import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderPath from './utils/renderPath';

const title = 'page-title';
describe('rotas', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/');
    });
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();

    const senhaInput = screen.getByTestId('password-input');
    expect(senhaInput).toBeInTheDocument();
  });
  it('', async () => {
    await act(async () => {
      renderPath('/bebidas');
    });
    const emailInput = screen.getByTestId(title);
    expect(emailInput).toHaveTextContent('Bebidas');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/comidas');
    });
    const emailInput = screen.getByTestId(title);
    expect(emailInput).toHaveTextContent('Comidas');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/explorar');
    });
    const emailInput = screen.getByTestId(title);
    expect(emailInput).toHaveTextContent('Explorar');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/perfil');
    });
    const emailInput = screen.getByTestId(title);
    expect(emailInput).toHaveTextContent('Perfil');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/receitas-favoritas');
    });
    const emailInput = screen.getByTestId(title);
    expect(emailInput).toHaveTextContent('Receitas Favoritas');
  });
});

describe('rotas', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/receitas-feitas');
    });
    const emailInput = screen.getByTestId(title);
    expect(emailInput).toHaveTextContent('Receitas Feitas');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/explorar/bebidas');
    });
    const emailInput = screen.getByTestId(title);
    expect(emailInput).toHaveTextContent('Explorar Bebidas');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/explorar/comidas');
    });
    const emailInput = screen.getByTestId(title);
    expect(emailInput).toHaveTextContent('Explorar Comidas');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/explorar/comidas/area');
    });
    const emailInput = screen.getByTestId(title);
    expect(emailInput).toHaveTextContent('Explorar Origem');
  });

  it('', async () => {
    await act(async () => {
      renderPath('/explorar/bebidas/area');
    });
    screen.findByText(/Not Found/i);
  });
});
