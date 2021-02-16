/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
// @ts-ignore
import { PokemonListProps } from '../../type/index.tsx';
// @ts-ignore
import { findPokemonDetails } from '../../selectors/pokemon.tsx';

const PokemonList = ({
  name,
  image,
  id,
  apiTypes,
  toggleDetails,
  state,
  pokemonDetails,
}: PokemonListProps) => {
  const handleDetails = (): void => {
    pokemonDetails(findPokemonDetails(state, id));
    toggleDetails();
  };

  return (
    <li className="pokemonlist" onClick={handleDetails}>
      <img className="pokemonlist-image" src={image} alt={name} />
      <p className="pokemonlist-text">#{id} {name}</p>
    </li>
  );
};

PokemonList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  apiTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  toggleDetails: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  pokemonDetails: PropTypes.func.isRequired,
};

export default PokemonList;
