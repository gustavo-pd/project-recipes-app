import React from 'react';
import PropTypes from 'prop-types';
import './css/Header.css';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import Logo from '../images/logo.png';

function Header({ title }) {
  return (
    <header className="header">
      <div className="profile-box">
        <Link to="/perfil">
          <img className="profile" src={ profileIcon } alt="profile" />
        </Link>
      </div>
      <div className="title-box">
        <h2 className="title" data-testid="page-title">{title}</h2>
      </div>
      <img
        className="search-icon"
        data-testid="search-top-btn"
        src={ Logo }
        alt="Logo"
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired,
};

export default Header;
