import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../components/css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const MIN_PASSWORD = 7;
  const validEmail = /\S+@\S+\.\S+/;
  const disableButton = validEmail.test(email) && password.length >= MIN_PASSWORD;

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  return (
    <div className="mainPage">
      <form className="form-centered">
        <input
          data-testid="email-input"
          value={ email }
          type="text"
          name="username"
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Digite seu email"
          className="email-input"
        />
        <input
          data-testid="password-input"
          value={ password }
          type="password"
          name="password"
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Digite sua senha"
          className="password-input"
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !disableButton }
          onClick={ handleClick }
          className="button-login"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
