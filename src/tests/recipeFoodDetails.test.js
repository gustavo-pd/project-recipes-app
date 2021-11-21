import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';
import * as recipesDetailsAPI from '../services/recipesDetailsAPI';
import * as recomendacoesAPI from '../services/recomendacoesAPI';
import mealDetails from './utils/mealDetails';
import drinksRecomendation from './utils/drinksRecomendation';

const mockFoodrecipesDetailsFetch = () => {
  jest.spyOn(recipesDetailsAPI, 'default').mockResolvedValue(mealDetails);
};

const mockDrinkFetchRecomended = () => {
  jest.spyOn(recomendacoesAPI, 'default').mockResolvedValue(drinksRecomendation);
};

describe('Recipes List - comidas', () => {
  beforeAll(mockFoodrecipesDetailsFetch);
  beforeAll(mockDrinkFetchRecomended);
  it('renderiza 12 cards de receita', async () => {
    await act(async () => {
      renderPath('/comidas/52777');
    });

    expect(recipesDetailsAPI.default).toHaveBeenCalled();
    expect(recomendacoesAPI.default).toHaveBeenCalled();

    await screen.findByText(/Mediterranean Pasta Salad/i);

    const shareButton = screen.getByTestId('share-btn');
    const faforiteButton = screen.getByTestId('favorite-btn');
    const recipeCategory = screen.getByTestId('recipe-category');

    expect(shareButton).toBeInTheDocument();
    expect(faforiteButton).toBeInTheDocument();

    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory).toHaveTextContent('Seafood');

    await screen.findByText(/Seafood/i);

    userEvent.click(shareButton);
    await screen.findByText(/Link copiado!/i);

    expect(screen.getByTestId('0-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('1-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('2-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('3-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('4-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('5-card-img')).toBeInTheDocument();

    const recomendedCardTitle1 = screen.getByTestId('0-recomendation-title');
    expect(recomendedCardTitle1).toHaveTextContent('GG');
    const recomendedCardTitle2 = screen.getByTestId('1-recomendation-title');
    expect(recomendedCardTitle2).toHaveTextContent('A1');
    const recomendedCardTitle3 = screen.getByTestId('2-recomendation-title');
    expect(recomendedCardTitle3).toHaveTextContent('ABC');
    const recomendedCardTitle4 = screen.getByTestId('3-recomendation-title');
    expect(recomendedCardTitle4).toHaveTextContent('Kir');
    const recomendedCardTitle5 = screen.getByTestId('4-recomendation-title');
    expect(recomendedCardTitle5).toHaveTextContent('747');
    const recomendedCardTitle6 = screen.getByTestId('5-recomendation-title');
    expect(recomendedCardTitle6).toHaveTextContent('252');
  });
});
