import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import AppContext from '../context/AppContext';

function Footer() {
  const { setSearchBar } = useContext(AppContext);
  return (
    <footer className="footer" data-testid="footer">
      <Link to="/bebidas" onClick={ () => setSearchBar(false) }>
        <img
          height={ 30 }
          src={ drinkIcon }
          alt="Drink Icon"
          className="drinkIcon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/explorar">
        <img
          height={ 30 }
          src={ exploreIcon }
          alt="Explore Icon"
          className="exploreIcon"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="/comidas" onClick={ () => setSearchBar(false) }>
        <img
          height={ 30 }
          src={ mealIcon }
          alt="Meal Icon"
          className="mealIcon"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
