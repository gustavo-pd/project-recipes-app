import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import AppProvider from '../context/AppProvider';

const emailTest = 'email@email.com';
const inputMail = 'email-input';
const passwordInput = 'password-input';
const btnLogin = 'login-submit-btn';
describe('Tem os data-testids email-input, password-input e login-submit-btn', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    beforeEach(cleanup);
  });

  it('', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByTestId(inputMail)).toBeInTheDocument();
    expect(screen.getByTestId(passwordInput)).toBeInTheDocument();
    expect(screen.getByTestId(btnLogin)).toBeInTheDocument();
  });
});

describe(`espera que o botão esteja desabilitado caso 
a senha seja menor que 6 caracteries`, () => {
  it('', async () => {
    await act(async () => {
      render(<App />);
    });
    const INPUT_MAIL = await screen.findByTestId(inputMail);
    fireEvent.change(INPUT_MAIL, { target: { value: emailTest } });
    const INPUT_PASSWORD = await screen.findByTestId(passwordInput);
    fireEvent.change(INPUT_PASSWORD, { target: { value: '1234' } });
    expect(screen.getByTestId(btnLogin)).toBeDisabled();
  });
});

describe(`espera que o botão esteja desabilitado caso
o email não seja válido`, () => {
  it('', async () => {
    await act(async () => {
      render(<App />);
    });
    const INPUT_MAIL = await screen.findByTestId(inputMail);
    fireEvent.change(INPUT_MAIL, { target: { value: 'emailemail.com' } });
    const INPUT_PASSWORD = await screen.findByTestId(passwordInput);
    fireEvent.change(INPUT_PASSWORD, { target: { value: '1234567' } });
    expect(screen.getByTestId(btnLogin)).toBeDisabled();
  });
});

describe('espera que ao clicar no botão o email seja salvo no localstorage', () => {
  it('', async () => {
    await act(async () => {
      render(
        <AppProvider>
          <App />
        </AppProvider>,
      );
    });
    const INPUT_MAIL = await screen.findByTestId(inputMail);
    fireEvent.change(INPUT_MAIL, { target: { value: emailTest } });
    const INPUT_PASSWORD = await screen.findByTestId(passwordInput);
    fireEvent.change(INPUT_PASSWORD, { target: { value: '1234567' } });
    fireEvent.click(await screen.findByTestId(btnLogin));

    expect(await JSON.parse(localStorage.getItem('user')))
      .toStrictEqual({ email: emailTest });
  });
});
