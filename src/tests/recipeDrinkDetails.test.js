import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderPath from './utils/renderPath';
import * as recipesDetailsAPI from '../services/recipesDetailsAPI';
import * as recomendacoesAPI from '../services/recomendacoesAPI';
import drinkDetails from './utils/drinkDetails';
import mealsRecomended from './utils/mealsRecomended';

const mockDrinkrecipesDetailsFetch = () => {
  jest.spyOn(recipesDetailsAPI, 'default').mockResolvedValue(drinkDetails);
};

const mockFoodFetchRecomended = () => {
  jest.spyOn(recomendacoesAPI, 'default').mockResolvedValue(mealsRecomended);
};

describe('Recipes List - comidas', () => {
  beforeAll(mockDrinkrecipesDetailsFetch);
  beforeAll(mockFoodFetchRecomended);
  it('renderiza 12 cards de receita', async () => {
    await act(async () => {
      renderPath('/bebidas/15997');
    });

    expect(recipesDetailsAPI.default).toHaveBeenCalled();
    expect(recomendacoesAPI.default).toHaveBeenCalled();
    const title = screen.getByTestId('recipe-title');
    expect(title).toHaveTextContent('GG');

    const shareButton = screen.getByTestId('share-btn');
    const faforiteButton = screen.getByTestId('favorite-btn');
    const recipeCategory = screen.getByTestId('recipe-category');

    expect(shareButton).toBeInTheDocument();
    expect(faforiteButton).toBeInTheDocument();

    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory).toHaveTextContent('Optional alcohol');

    await screen.findByText(/Optional alcohol/i);

    userEvent.click(shareButton);
    await screen.findByText(/Link copiado!/i);

    expect(screen.getByTestId('0-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('1-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('2-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('3-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('4-card-img')).toBeInTheDocument();
    expect(screen.getByTestId('5-card-img')).toBeInTheDocument();

    const recomendedCardTitle1 = screen.getByTestId('0-recomendation-title');
    expect(recomendedCardTitle1).toHaveTextContent('Corba');
    const recomendedCardTitle2 = screen.getByTestId('1-recomendation-title');
    expect(recomendedCardTitle2).toHaveTextContent('Burek');
    const recomendedCardTitle3 = screen.getByTestId('2-recomendation-title');
    expect(recomendedCardTitle3).toHaveTextContent('Kumpir');
    const recomendedCardTitle4 = screen.getByTestId('3-recomendation-title');
    expect(recomendedCardTitle4).toHaveTextContent('Tamiya');
    const recomendedCardTitle5 = screen.getByTestId('4-recomendation-title');
    expect(recomendedCardTitle5).toHaveTextContent('Dal fry');
    const recomendedCardTitle6 = screen.getByTestId('5-recomendation-title');
    expect(recomendedCardTitle6).toHaveTextContent('Poutine');
  });
});
