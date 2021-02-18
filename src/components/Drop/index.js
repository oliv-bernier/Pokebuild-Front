import React from 'react';

import PropTypes from 'prop-types';

import DropBox from '../../containers/Drop/DropBox';

import './style.scss';

const Drop = ({ pokemonSelected, clearPokemons }) => {
  const boxes = [];
  for (let index = 0; index < 6; index++) {
    boxes.push(<DropBox
      key={index}
      index={index}
    />);
  }

  const handleClearAll = () => {
    clearPokemons();
  };

  if (pokemonSelected.length > 1) {
    return (
      <div className="home-selection">
        <div className="home-selection-drops">
          {boxes}
        </div>
        <button
          type="button"
          className="home-selection-drop-button"
          onClick={handleClearAll}
        >
          Vider la sélection
        </button>
      </div>
    );
  } return (
    <div className="home-selection">
      <div className="home-selection-drops">
        {boxes}
      </div>
    </div>
  );
};

Drop.propTypes = {
  pokemonSelected: PropTypes.arrayOf(PropTypes.object).isRequired,
  clearPokemons: PropTypes.func.isRequired,
};

export default Drop;
