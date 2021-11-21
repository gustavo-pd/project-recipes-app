import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';

describe('food Area', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/explorar/comidas/area');
    });
    await screen.findByText(/Corba/i);
    const corba = screen.getByTestId('0-card-name');
    expect(corba).toHaveTextContent('Corba');

    await screen.findByText(/Poutine/i);
    const poutine = screen.getByTestId('5-card-name');
    expect(poutine).toHaveTextContent('Poutine');

    const doze = 12;
    const listitem = screen.getAllByRole('listitem');
    await expect(listitem.length).toEqual(doze);

    userEvent.click(listitem[1]);
  });
});

describe('food Area', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/explorar/comidas/area');
    });
    await screen.findByText(/Corba/i);
    const corba = screen.getByTestId('0-card-name');
    expect(corba).toHaveTextContent('Corba');

    await screen.findByText(/Poutine/i);
    const poutine = screen.getByTestId('5-card-name');
    expect(poutine).toHaveTextContent('Poutine');

    const doze = 12;
    const listitem = screen.getAllByRole('listitem');
    await expect(listitem.length).toEqual(doze);

    userEvent.click(listitem[1]);

    expect(window.location.pathname).toEqual('/comidas/53060');
  });
});
