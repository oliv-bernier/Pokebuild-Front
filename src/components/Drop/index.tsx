import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import DropBox from '../../containers/Drop/DropBox';

import './style.scss';
import { Pokemon } from '../../type';

const Drop = (
  {
    pokemonSelected,
    clearPokemons,
    pokemonIds,
    sendTeam,
    toggleInputFav,
    isInputFav,
    changeInputFav,
    saveTeam,
    isLogged,
    generateTeam,
  }: {
    pokemonSelected: Array<Pokemon>,
    clearPokemons: Function,
    sendTeam: Function,
    pokemonIds: Array<number>,
    saveTeam: Function,
    toggleInputFav: Function,
    isInputFav: Boolean,
    changeInputFav: Function,
    isLogged: Boolean,
    generateTeam: Function,
  },
) => {
  const boxes = [];
  for (let index = 0; index < 6; index++) {
    boxes.push(<DropBox
      key={index}
      index={index}
    />);
  }

  if (pokemonIds.length > 0 && pokemonIds.length <= 6) {
    useEffect(() => {
      sendTeam(pokemonIds);
    });
  }

  const handleClearAll = () => {
    clearPokemons();
  };

  const handleFav = () => {
    toggleInputFav();
  };

  const handleChange = (evt: any): void => {
    changeInputFav(evt.target.value, 'name');
  };

  const handleAddTeam = () => {
    saveTeam();
    toggleInputFav();
  };

  const handleKey = (evt) => {
    if (evt.key === 'Enter') {
      saveTeam();
      toggleInputFav();
    }
  };

  if (pokemonSelected.length > 5 && isLogged) {
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
        <button
          type="button"
          className="home-selection-drop-fav"
          onClick={handleFav}
        >
          Ajouter la sélection aux favoris
        </button>
        {isInputFav && (
          <div className="home-selection-drop-add">
            <input
              type="name"
              className="home-selection-drop-add-input"
              placeholder="Donnez un nom à l'équipe"
              onChange={handleChange}
              onKeyDown={handleKey}
            />
            <button
              type="submit"
              className="home-selection-drop-add-submit"
              onClick={handleAddTeam}
            >
              OK
            </button>
          </div>
        )}
      </div>
    );
  } if (pokemonSelected.length > 1) {
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
        <button
          type="button"
          className="home-selection-drop-button"
          onClick={() => generateTeam()}
        >
          Générer une équipe
        </button>
      </div>
    );
  } return (
    <div className="home-selection">
      <div className="home-selection-drops">
        {boxes}
      </div>
      <button
        type="button"
        className="home-selection-drop-button"
        onClick={() => generateTeam()}
      >
        Générer une équipe
      </button>
    </div>
  );
};

Drop.propTypes = {
  pokemonSelected: PropTypes.arrayOf(PropTypes.object).isRequired,
  clearPokemons: PropTypes.func.isRequired,
  sendTeam: PropTypes.func.isRequired,
  pokemonIds: PropTypes.array.isRequired,
  saveTeam: PropTypes.func.isRequired,
  toggleInputFav: PropTypes.func.isRequired,
  isInputFav: PropTypes.bool.isRequired,
  changeInputFav: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  generateTeam: PropTypes.bool.isRequired,
};

export default Drop;
