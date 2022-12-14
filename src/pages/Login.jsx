import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Logo from '../images/logo.png';
import '../components/css/Login.css';

function Login() {
  const [email, setEmail] = useState('teste@email.com');
  const [password, setPassword] = useState('1234567');

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
      <img
        className="image-logo"
        src={ Logo }
        alt="Logo"
      />
      <h1>Recipes App</h1>
      <form className="form-centered">
        <input
          data-testid="email-input"
          value={ email }
          type="text"
          name="username"
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Type your e-mail"
          className="email-input"
        />
        <input
          data-testid="password-input"
          value={ password }
          type="password"
          name="password"
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Type your password"
          className="password-input"
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !disableButton }
          onClick={ handleClick }
          className="button-login"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
