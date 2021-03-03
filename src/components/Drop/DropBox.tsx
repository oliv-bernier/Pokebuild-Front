import React from 'react';

import PropTypes from 'prop-types';
import { Pokemon } from '../../type';

import { findPokemonDetails } from '../../selectors/pokemon';

const DropBox = ({
  state,
  pokemonSelected,
  index,
  clearOnePokemon,
  removeAllPokemon,
  pokemonDetails,
  toggleDetails,
  pokemonIds,
}:
{
  state: any,
  pokemonSelected: Array<Pokemon>,
  index: number,
  clearOnePokemon: Function,
  removeAllPokemon: Function,
  pokemonDetails: Function,
  toggleDetails: Function,
  pokemonIds: Array<number>,
}) => {
  const handleClearOne = () => {
    clearOnePokemon(index);

    if (pokemonIds.length === 1) {
      removeAllPokemon();
    }
  };

  if (pokemonSelected[index] !== undefined) {
    const handleDetails = (): void => {
      pokemonDetails(findPokemonDetails(state, pokemonSelected[index].id));
      toggleDetails();
    };
    const { sprite, name } = pokemonSelected[index];
    return (
      <div className="home-selection-drop">
        <button
          type="button"
          className="home-selection-drop-content-button"
          onClick={handleClearOne}
        >
          X
        </button>
        <div className="home-selection-drop-content" onClick={handleDetails}>
          <img className="home-selection-drop-content-sprite" src={sprite} alt={name} />
        </div>
      </div>
    );
  }
  return (
    <div className="home-selection-drop">
      <div className="home-selection-drop-content" />
    </div>
  );
};

DropBox.propTypes = {
  state: PropTypes.object.isRequired,
  pokemonSelected: PropTypes.arrayOf(PropTypes.shape({
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  clearOnePokemon: PropTypes.func.isRequired,
  removeAllPokemon: PropTypes.func.isRequired,
  pokemonDetails: PropTypes.func.isRequired,
  toggleDetails: PropTypes.func.isRequired,
  pokemonIds: PropTypes.array.isRequired,
};

export default DropBox;
