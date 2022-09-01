import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/css/Profile.css';

function Profile() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    (async () => {
      if (!JSON.parse(localStorage.getItem('user'))) {
        return localStorage.setItem('user', JSON.stringify(''));
      }
      const storage = await JSON.parse(localStorage.getItem('user'));
      await setEmail(storage.email);
    })();
  }, []);

  const history = useHistory();

  const redirect = (route) => {
    history.push(route);
  };

  const logOut = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <main className="main-profile">
      <Header title="Perfil" bool={ false } />
      <div className="profile-page">
        <div className="container-buttons">
          <div className="box-email">
            <p className="profile-email">{email}</p>
          </div>
          <button
            className="profile-btn"
            data-testid="profile-done-btn"
            type="button"
            onClick={ () => redirect('/receitas-feitas') }
          >
            Receitas Feitas
          </button>
          <button
            className="profile-btn"
            data-testid="profile-favorite-btn"
            type="button"
            onClick={ () => redirect('/receitas-favoritas') }
          >
            Receitas Favoritas
          </button>
          <button
            className="profile-btn"
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => logOut() }
          >
            Sair
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default Profile;
