import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from 'pages/CategoriesPage/CategoriesPage.module.css';
import RecipeTile from 'components/RecipeTile/RecipeTile';
import {
  fetchCategoryRecipes,
  fetchCategoriesList,
} from 'redux/actions/recipes.actions';
import { selectSelectedCategoryName } from 'redux/selectors/recipes.selectors';
import { useNavigate } from 'react-router-dom';

const CategoriesGalleryImage = _ => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentCategory = useSelector(selectSelectedCategoryName);
  console.log(currentCategory);

  useEffect(() => {
    dispatch(fetchCategoryRecipes(currentCategory));
  }, [dispatch]);

  const recipes = useSelector(
    state => state.recipes.categories[currentCategory]
  );
  console.log(recipes);

  // return (
  //   <div>
  //     <ul className={css.recipesLine}>
  //       {recipes.map(recipe => (
  //         <RecipeTile
  //           className={css.recipeTile}
  //           key={recipe._id}
  //           recipe={recipe}
  //           onClick={() => navigate('/recipe/' + recipe._id)}
  //         ></RecipeTile>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default CategoriesGalleryImage;
