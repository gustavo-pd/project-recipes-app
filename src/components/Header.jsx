import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './css/Header.css';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import AppContext from '../context/AppContext';

function Header({ title, bool }) {
  const { setSearchBar, searchBar } = useContext(AppContext);
  const [showSearchBar, setShowSearchBar] = useState(false);

  function handleClick() {
    setShowSearchBar(!showSearchBar);
    setSearchBar(!searchBar);
  }

  return (
    <>
      <header className="header">
        <div className="profile-box">
          <Link to="/perfil">
            <img className="profile" src={ profileIcon } alt="profile" />
          </Link>
        </div>
        <div className="title-box">
          <h2 className="title" data-testid="page-title">{title}</h2>
        </div>
        {bool && (
          <button
            type="button"
            onClick={ handleClick }
            className="button-search"
          >
            <img
              className="search-icon"
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
