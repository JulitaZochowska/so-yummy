import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './CategoriesGallery.module.css';
import RecipeTile from 'components/RecipeTile/RecipeTile';
import { fetchCategoryRecipes, fetchCategoriesList } from 'redux/actions/recipes.actions';
import { selectSelectedCategoryName } from 'redux/selectors/recipes.selectors';
import { useNavigate } from 'react-router-dom';

const CategoriesGalleryImage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const currentCategory = useSelector(selectSelectedCategoryName);

  useEffect(() => {
    dispatch(fetchCategoryRecipes(currentCategory));
  }, [dispatch, currentCategory]);

  const recipes = useSelector(
    state => state.recipes.categories[currentCategory]
  );

  return (
    <div className={css.recipesGrid}>
      {recipes && recipes.length > 0 ? (
        recipes.map(recipe => (
          <RecipeTile
            className={css.recipeTile}
            key={recipe._id}
            recipe={recipe}
            onClick={() => navigate('/recipe/' + recipe._id)}
          ></RecipeTile>
        ))
      ) : (
        <p>No recipes available for the selected category.</p>
      )}
    </div>
  );
};

export default CategoriesGalleryImage;
