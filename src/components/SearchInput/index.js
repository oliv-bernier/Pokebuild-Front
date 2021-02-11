import React from 'react';

import './style.scss';

const SearchInput = () => (
    <input 
        className="search-input" 
        type="text" 
        id="name" 
        placeholder="Chercher un Pokémon"
    />
);

export default SearchInput;
