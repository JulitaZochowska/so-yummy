import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchPage = _ => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const type = searchParams.get('t');
  return (
    <div>
      Search works! Query: {query}, Type: {type}
    </div>
  );
};

export default SearchPage;
