import React from 'react';

import PropTypes from 'prop-types';
import { Pokemon } from '../../type';

const DropBox = ({
  pokemonSelected,
  index,
  clearOnePokemon,
}:
{pokemonSelected: Array<Pokemon>,
  index: number,
  clearOnePokemon: Function
}) => {
  const handleClearOne = () => {
    clearOnePokemon(index);
  };

  if (pokemonSelected[index] !== undefined) {
    const { sprite, name } = pokemonSelected[index];
    return (
      <div className="home-selection-drop">
        <div className="home-selection-drop-content">
          <img className="home-selection-drop-content-sprite" src={sprite} alt={name} />
          <button
            type="button"
            className="home-selection-drop-content-button"
            onClick={handleClearOne}
          >
            X
          </button>
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
  pokemonSelected: PropTypes.arrayOf(PropTypes.shape({
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  clearOnePokemon: PropTypes.func.isRequired,
};

export default DropBox;
