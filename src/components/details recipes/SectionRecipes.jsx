import React from 'react';

function SectionRecipes({ strCategory }) {
  return (
    <section>
      <p data-testid="recipe-category">{strCategory}</p>

    </section>
  );
}

export default SectionRecipes;
