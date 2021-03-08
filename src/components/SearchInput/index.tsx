import React from 'react';
import PropTypes from 'prop-types';

import Generation from '../../containers/Generation';
import './style.scss';

const SearchInput = ({
  value,
  inputSearch,
  deleteInput,
  setGenValue,
}: {
  value: string,
  inputSearch: Function,
  deleteInput: Function,
  setGenValue: Function,
}) => {
  const handleChange = (evt: { target: { value: string; }; }) => {
    inputSearch(evt.target.value);
  };
  const handleClick = () => {
    deleteInput();
    setGenValue(0);
  };
  return (
    <div className="search-container">
      <input
        className="search-container-input"
        type="text"
        id="name"
        placeholder="Chercher un Pokémon"
        value={value}
        onChange={handleChange}
      />
      <form action="">
        <Generation />
        <input
          type="reset"
          className="search-container-button"
          onClick={handleClick}
          value="X"
        />
      </form>
    </div>
  );
};

SearchInput.propType = {
  value: PropTypes.string.isRequired,
  inputSearch: PropTypes.func.isRequired,
  deleteInput: PropTypes.func.isRequired,
  setGenValue: PropTypes.func.isRequired,
};

export default SearchInput;
