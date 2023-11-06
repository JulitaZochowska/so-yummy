import React from 'react';
import { getRecipesByQuery } from 'redux/actions/search.actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectQuery,
  selectQueryType,
  selectSearchedRecipes,
} from 'redux/selectors/search.selectors';
import {
  changeExample,
  changeItems,
  changeQuery,
} from 'redux/slice/search.slice';
import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import ZeroResults from 'components/ZeroResults/ZeroResults';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';

const SearchPage = _ => {
  const query = useSelector(selectQuery);
  const queryType = useSelector(selectQueryType);
  const recipes = useSelector(selectSearchedRecipes);
  const dispatch = useDispatch();
  const placeholder = useSelector(state => state.search.example);

  useEffect(() => {
    if (query === '') {
      dispatch(changeItems(null));
      dispatch(changeQuery(''));
      return;
    }
    dispatch(changeExample(false));
    dispatch(changeItems(null));
  }, [dispatch, query]);

  useEffect(() => {
    if (query === '') {
      dispatch(changeItems(null));
      dispatch(changeQuery(''));
      return;
    }
    switch (queryType) {
      case 'title':
        dispatch(getRecipesByQuery(query));
        break;
      case 'ingredients':
        //tutaj dorobić pod ingredients
        break;
      default:
        return;
    }
  }, [dispatch, query, queryType]);

  return (
    <section>
      <MainTitle title="Search" />

      <SearchBar />
      {placeholder && (
        <ZeroResults message={'Try looking for something else..'} />
      )}
      <SearchedRecipesList recipes={recipes} />
    </section>
  );
};

export default SearchPage;
