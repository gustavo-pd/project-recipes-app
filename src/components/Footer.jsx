import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <img
          height={ 30 }
          src={ drinkIcon }
          alt="Drink Icon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/explorar">
        <img
          height={ 30 }
          src={ exploreIcon }
          alt="Explore Icon"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="/comidas">
        <img
          height={ 30 }
          src={ mealIcon }
          alt="Meal Icon"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
