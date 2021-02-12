/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PokemonList = ({
  name,
  image,
  id,
  apiTypes,
}) => (
  <li className="pokemonlist">
    <img className="pokemonlist-image" src={image} alt={name} />
    <p className="pokemonlist-text">#{id} {name}</p>
  </li>
);

PokemonList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  apiTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default PokemonList;
