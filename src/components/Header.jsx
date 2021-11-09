import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, bool }) {
  return (
    <header>
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="profile" />
      </Link>
      <h3 data-testid="page-title">{title}</h3>
      {bool && <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="Search Icon"
      />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired,
};

export default Header;
