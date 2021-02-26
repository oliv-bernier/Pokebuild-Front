import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

const Suggestion = ({
  toggleSuggestion,
  pokemon,
}: {
  toggleSuggestion: Function,
  pokemon: Array<any>,
}) => (
  <div className="suggestion">
    <div className="suggestion-content">
      <h2>Les pokémon qui pourraient complêter merveille ton équipe...</h2>
      <button type="button" className="suggestion-content-close" onClick={() => toggleSuggestion()}>X</button>
      <div className="suggestion-content-pokemon">
        {pokemon.map((poke) => (
          <div className="suggestion-content-pokemon-div">
            <img className="suggestion-content-pokemon-image" src={poke.sprite} alt={poke.name} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

Suggestion.propTypes = {
  toggleSuggestion: PropTypes.func.isRequired,
  pokemon: PropTypes.array.isRequired,
};

export default Suggestion;
