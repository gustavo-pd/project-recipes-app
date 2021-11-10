import React from 'react';
import Ingredients from '../components/Ingredients';
import { drinks, meals } from '../services/dataTeste'

function NotFound() {
  return (
    <main>
      {/* NotFound */}
      <Ingredients recipe={ meals } />
    </main>
  );
}
export default NotFound;
