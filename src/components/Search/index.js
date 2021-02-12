import React from 'react';

import SearchInput from '../SearchInput';
import SearchSelect from '../SearchSelect';

import './style.scss';

const Search = () => (
  <div className="search">
    <SearchInput />
    <SearchSelect />
  </div>
);

export default Search;
