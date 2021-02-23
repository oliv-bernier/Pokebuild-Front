/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import { findPokemonDetails } from '../../selectors/pokemon';

const PokemonList = ({
  name,
  image,
  id,
  toggleDetails,
  state,
  pokemonDetails,
}: {
  name: string,
  image: string,
  id: number,
  toggleDetails: Function,
  state: any,
  pokemonDetails: Function,
  }) => {
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
  toggleDetails: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  pokemonDetails: PropTypes.func.isRequired,
};

export default PokemonList;
