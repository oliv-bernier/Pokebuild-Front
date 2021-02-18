import React from 'react';

import PropTypes from 'prop-types';
import { Pokemon } from '../../type';

const DropBox = ({ pokemonSelected, index }: {pokemonSelected: Array<Pokemon>, index: number}) => {
  if (pokemonSelected[index] !== undefined) {
    const { sprite, name } = pokemonSelected[index];
    return (
      <div className="home-selection-drop">
        <div className="home-selection-drop-content">
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
  pokemonSelected: PropTypes.arrayOf(PropTypes.shape({
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default DropBox;
