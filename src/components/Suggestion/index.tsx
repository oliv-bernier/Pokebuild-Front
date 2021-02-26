import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

const Suggestion = ({
  toggleSuggestion,
  pokemon,
  addSelectedPokemon,
}: {
  toggleSuggestion: Function,
  pokemon: Array<any>,
  addSelectedPokemon: Function,
}) => (
  <div className="suggestion">
    <div className="suggestion-content">
      <h2>Les pokémon qui pourraient complêter à merveille ton équipe...</h2>
      <button type="button" className="suggestion-content-close" onClick={() => toggleSuggestion()}>X</button>
      <div className="suggestion-content-pokemon">
        {pokemon.map((poke) => (
          <div
            className="suggestion-content-pokemon-div"
            onClick={() => {
              addSelectedPokemon(poke.id);
              toggleSuggestion();
            }}
          >
            <img className="suggestion-content-pokemon-image" src={poke.sprite} alt={poke.name} />
            <p className="suggestion-content-pokemon-name">{poke.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Suggestion.propTypes = {
  toggleSuggestion: PropTypes.func.isRequired,
  pokemon: PropTypes.array.isRequired,
  addSelectedPokemon: PropTypes.func.isRequired,
};

export default Suggestion;
