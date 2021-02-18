/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import { findPokemonDetails } from '../../selectors/pokemon';

const PokemonList = ({
  name,
  image,
  id,
  apiTypes,
  toggleDetails,
  state,
  pokemonDetails,
}: {
  name: string,
  image: string,
  id: number,
  apiTypes: Array<any>,
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
  apiTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  toggleDetails: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  pokemonDetails: PropTypes.func.isRequired,
};

export default PokemonList;
