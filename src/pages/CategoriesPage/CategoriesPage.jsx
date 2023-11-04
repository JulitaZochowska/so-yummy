import React from 'react';
import { useParams } from 'react-router-dom';

export const CategoriesPage = _ => {
  const { categoryName } = useParams();
  return (
    <div>
      Categories works! Name:{' '}
      {categoryName ?? 'No category name - page for all categories'}
    </div>
  );
};

export default CategoriesPage;
