// import React from 'react';
// import { useSearchParams } from 'react-router-dom';

// export const SearchPage = _ => {
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get('q');
//   const type = searchParams.get('t');
//   return (
//     <div>
//       Search works! Query: {query}, Type: {type}
//     </div>
//   );
// };

// export default SearchPage;
import React, { useState } from 'react';
import css from './SearchPage.module.css';
import { createSearchParams, useNavigate } from 'react-router-dom';


const SearchIngredients = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('Title'); // Domyślnie ustawione na 'Title'
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = event => {
    event.preventDefault();
    const search = event.currentTarget.elements.search.value;
    if (search && (searchType === 'Title' || searchType === 'Ingredients')) {
      navigate({
        pathname: '/search',
        search: createSearchParams({
          q: search,
          t: searchType,
        }).toString(),
      });
    } else {
      setSearchResult('Try looking for something else...'); // Ustaw odpowiedni komunikat
    }
  };

  const handleSearchTypeChange = event => {
    setSearchType(event.target.value); // Aktualizuj wartość wyboru
  };

  return (
    <div>
      <div className={css.search}>Search</div>
      <div className={css.searchSection}>
        <form className={css.searchBox} onSubmit={handleSearch}>
          <input
            name="search"
            className={css.searchInput}
            placeholder="Search..."
          />
          <button className={css.searchButton}>Search</button>
        </form>
        <div className={css.search_by}>
          <p>Search by:</p>
          <select
            className={css.search_select}
            id="search"
            onChange={handleSearchTypeChange}
            value={searchType}
          >
            <option className={css.search_option} value="Title">
              Title
            </option>
            <option className={css.search_option} value="Ingredients">
              Ingredients
            </option>
          </select>
        </div>
        {searchResult && (
          <div className={css.errorMessage}>
            {searchResult}
            <img
              src="src/images/kisspng-vegetable-fruit-basket-century-farms-international-fruits-and-vegetables-5abfb9c60122f5 1.png"
              alt="Obrazek"
              className={css.errorImage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchIngredients;
