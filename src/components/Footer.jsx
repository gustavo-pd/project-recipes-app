import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <img
        height={ 30 }
        src={ drinkIcon }
        alt="Drink Icon"
        data-testid="drinks-bottom-btn"
      />
      <img
        height={ 30 }
        src={ exploreIcon }
        alt="Explore Icon"
        data-testid="explore-bottom-btn"
      />
      <img
        height={ 30 }
        src={ mealIcon }
        alt="Meal Icon"
        data-testid="food-bottom-btn"
      />
    </footer>
  );
}

export default Footer;
