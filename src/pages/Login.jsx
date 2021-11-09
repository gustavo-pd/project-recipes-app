import { shape, func } from 'prop-types';
import React, { useState } from 'react';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButton = () => {
    const MIN_PASSWORD_LENGTH = 6;
    if (password.length <= MIN_PASSWORD_LENGTH) return false;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return false;
    return true;
  };

  const saveAtLocalStorage = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          name="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          data-testid="email-input"
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          id="password"
          name="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          data-testid="password-input"
          placeholder="Password"
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !handleButton() }
        onClick={ saveAtLocalStorage }
      >
        Entrar
      </button>
    </form>
  );
}

Login.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
};

export default Login;
