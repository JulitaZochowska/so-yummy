import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './CategoriesGallery.module.css';
import RecipeTile from 'components/RecipeTile/RecipeTile';
import { fetchCategoryRecipes, fetchCategoriesList } from 'redux/actions/recipes.actions';
import { selectSelectedCategoryName } from 'redux/selectors/recipes.selectors';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const CategoriesGalleryImage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCategoriesList())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data', error);
        setLoading(false);
      });
  }, [dispatch]);

  const currentCategory = useSelector(selectSelectedCategoryName);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCategoryRecipes(currentCategory))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data', error);
        setLoading(false);
      });
  }, [dispatch, currentCategory]);

  const recipes = useSelector(
    (state) => state.recipes.categories[currentCategory]
  );

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = currentPage * itemsPerPage;

  const displayedRecipes = recipes && recipes.length > 0 ? recipes.slice(startIdx, endIdx) : [];

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={css.recipesGrid}>
      {displayedRecipes.map((recipe) => (
        <RecipeTile
          className={css.recipeTile}
          key={recipe._id}
          recipe={recipe}
          onClick={() => navigate('/recipe/' + recipe._id)}
        />
      ))}
      {loading && <Loader />}
      {recipes && recipes.length > endIdx && !loading && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default CategoriesGalleryImage;
