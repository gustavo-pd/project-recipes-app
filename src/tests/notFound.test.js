import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderPath from './utils/renderPath';

describe('No found', () => {
  it('', async () => {
    await act(async () => {
      renderPath('/dfsafs');
    });

    screen.findByText(/Not Found/i);
  });
});
