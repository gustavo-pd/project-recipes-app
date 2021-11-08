import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title, bool }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <header>
        <Link to="/perfil">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="profile" />
        </Link>
        <h3 data-testid="page-title">{title}</h3>
        {bool && (
          <button
            type="button"
            onClick={ () => setShowSearchBar(!showSearchBar) }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Search Icon"
            />
          </button>
        )}
      </header>
      { showSearchBar && <SearchBar />}
    </>

  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired,
};

export default Header;
