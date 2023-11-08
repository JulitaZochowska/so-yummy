import React from 'react';
import css from './Search.module.css';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = event => {
    event.preventDefault();
    const search = event.currentTarget.elements.search.value;
    if (search) {
      navigate({
        pathname: '/search',
        search: createSearchParams({
          q: search,
          t: 'Title',
        }).toString(),
      });
    } else {
      toast.error('Please type something into the search box!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <div className={css.spinachLeft}></div>
      <div className={css.searchSection}>
        <h1>
          <span className={css.greenText}>So</span>Yummy
        </h1>
        <div className={css.searchSectionText}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </div>
        <form className={css.searchBox} onSubmit={handleSearch}>
          <input
            name="search"
            className={css.searchInput}
            placeholder="Search..."
          ></input>
          <button className={css.searchButton}>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
