import React from 'react';
import css from 'pages/CategoriesPage/CategoriesPage.module.css';

const categories = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Desserts',
  'Goat',
  'Lamb',
  'Miscelanous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side'
];

function CategoriesList() {
  const categoriesListElements = categories.map(category => (
    <nav key={category}>
      <h2 className={css.CategoriesPage_nav_h2}>{category}</h2>
    </nav>
  ));

  return (
    <div className={css.CategoriesPage_nav}>
      {categoriesListElements}
    </div>
  );
}

export default CategoriesList;
