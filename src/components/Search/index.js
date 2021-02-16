import React from 'react';

import SearchInput from '../../containers/SearchInput';
import Checkboxes from '../../containers/Checkboxes';

import './style.scss';

const Search = () => (
  <div className="search">
    <SearchInput />
    <Checkboxes />
  </div>
);

export default Search;
