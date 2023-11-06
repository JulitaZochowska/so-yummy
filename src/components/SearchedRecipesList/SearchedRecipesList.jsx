import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors/search.selectors';
import { Loader } from 'components/Loader/Loader';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import { changeItems, resetState } from 'redux/slice/search.slice';

const SearchedRecipesList = ({ recipes, location }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(changeItems([]));
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      <ul>
        {recipes?.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} location={location} />
        ))}
      </ul>
    </>
  );
};

export default SearchedRecipesList;
