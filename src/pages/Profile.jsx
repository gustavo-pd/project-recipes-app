import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    (async () => {
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
    <main>
      <Header title="Perfil" bool={ false } />
      Profile
      <p data-testid="profile-email">{email}</p>
      <button
        data-testid="profile-done-btn"
        type="button"
        onClick={ () => redirect('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        data-testid="profile-favorite-btn"
        type="button"
        onClick={ () => redirect('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        data-testid="profile-logout-btn"
        type="button"
        onClick={ () => logOut() }
      >
        Sair
      </button>
      <Footer />
    </main>
  );
}
export default Profile;
