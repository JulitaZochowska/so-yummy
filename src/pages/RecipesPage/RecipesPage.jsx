import React from 'react';
import { useParams } from 'react-router-dom';

export const RecipesPage = _ => {
  const { recipeId } = useParams();
  return <div>Recipe works! Id: {recipeId}</div>;
};

export default RecipesPage;
