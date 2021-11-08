import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  return (
    <header>
      <object
        data-testid="profile-top-btn"
        type="image/svg+xml"
        data={ profileIcon }
      >
        Profile Icon
      </object>
      <h3 data-testid="page-title">{title}</h3>
      <object
        data-testid="search-top-btn"
        type="image/svg+xml"
        data={ searchIcon }
      >
        Search Icon
      </object>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;
