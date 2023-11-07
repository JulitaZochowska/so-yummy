import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './CategoriesGallery.module.css';
import RecipeTile from 'components/RecipeTile/RecipeTile';
import {
  fetchCategoryRecipes,
  fetchCategoriesList,
} from 'redux/actions/recipes.actions';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const CategoriesGalleryImage = ({ categoryName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCategoriesList())
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data', error);
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCategoryRecipes(categoryName))
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data', error);
        setLoading(false);
      });
  }, [dispatch, categoryName]);

  const recipes = useSelector(state => state.recipes.categories[categoryName]);

  const displayedRecipes = recipes ?? [];

  return (
    <div className={css.recipesGrid}>
      {displayedRecipes.map(recipe => (
        <RecipeTile
          className={css.recipeTile}
          key={recipe._id}
          recipe={recipe}
          onClick={() => navigate('/recipe/' + recipe._id)}
        />
      ))}
      {loading && <Loader />}
    </div>
  );
};

export default CategoriesGalleryImage;
