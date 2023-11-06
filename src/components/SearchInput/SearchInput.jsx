import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeItems, changeQuery } from 'redux/slice/search.slice';

const SearchInput = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const value = searchParam.get('query');
  const [searchQuery, setSearchQuery] = useState(value || '');
  const dispatch = useDispatch();
  const query = searchQuery.toLowerCase();

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }
  useEffect(() => {
    if (!value) {
      dispatch(changeQuery(''));
      dispatch(changeItems(null));
      return;
    }
    dispatch(changeQuery(value));
  }, [dispatch, value]);

  function handleSubmit(event) {
    event.preventDefault();
    if (query === '') {
      dispatch(changeQuery(''));
      dispatch(changeItems(null));
      return;
    }
    setSearchParam({ query });
    if (!value) {
      dispatch(changeItems([]));
      return;
    }
    dispatch(changeQuery(value));
    setSearchQuery(query);
    dispatch(changeQuery(searchQuery));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="search"
          type="text"
          value={searchQuery}
          autoComplete="off"
          placeholder="Search.."
          title="Name may contain only letters, apostrophe, dash and spaces. For example beef, pork.."
          onChange={handleInputChange}
        />

        <button type="submit">Search</button>
      </label>
    </form>
  );
};

export default SearchInput;
