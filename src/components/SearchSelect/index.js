import React from 'react';

import './style.scss';

const SearchSelect = () => (
    <select className="select" id="select">
        <option value="">----</option>
        <option value="dog">Par nom</option>
        <option value="cat">Par type</option>
    </select>
);

export default SearchSelect;
