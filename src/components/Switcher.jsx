import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FoodsByIngredients from '../pages/FoodsByIngredients';
import DrinksByIngredients from '../pages/DrinksByIngredients';
import FoodsByOrigin from '../pages/FoodsByOrigin';
import FoodProgress from '../pages/FoodProgress';
import DrinkProgress from '../pages/DrinkProgress';
import FoodDetails from '../pages/FoodDetails';
import DrinkDetails from '../pages/DrinkDetails';
import ExploreFood from '../pages/ExploreFood';
import ExploreDrinks from '../pages/ExploreDrinks';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Profile from '../pages/Profile';
import Explore from '../pages/Explore';
import FoodRecipes from '../pages/FoodRecipes';
import DrinkRecipes from '../pages/DrinkRecipes';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

class Switcher extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/explorar/comidas/ingredientes"
          component={ FoodsByIngredients }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ DrinksByIngredients }
        />
        <Route exact path="/explorar/bebidas/area" component={ NotFound } />
        <Route path="/explorar/comidas/area" component={ FoodsByOrigin } />
        <Route path="/comidas/:id/in-progress" component={ FoodProgress } />
        <Route path="/bebidas/:id/in-progress" component={ DrinkProgress } />
        <Route path="/comidas/:id" component={ FoodDetails } />
        <Route path="/bebidas/:id" component={ DrinkDetails } />
        <Route path="/explorar/comidas" component={ ExploreFood } />
        <Route path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route path="/receitas-feitas" component={ DoneRecipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/explorar" component={ Explore } />
        <Route path="/comidas" component={ FoodRecipes } />
        <Route path="/bebidas" component={ DrinkRecipes } />
        <Route exact path="/" component={ Login } />
        <Route exact path="" component={ NotFound } />
      </Switch>
    );
  }
}

export default Switcher;
