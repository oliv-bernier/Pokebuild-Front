import React from 'react';

import PropTypes from 'prop-types';

import pokemons from '../../data/pokemon';
// @ts-ignore
import translation from '../../utils/translation.tsx';
// @ts-ignore
import { PokestatProps } from '../../type/index.tsx';

import './style.scss';

const Pokestat = ({ toggleDetails }: PokestatProps) => {
  const pokemon = pokemons[0];
  const handleClose = () => {
    toggleDetails();
  };
  return (
    <div className="pokestat">
      <div className="pokestat-container">
        <button type="button" className="pokestat-container--button" onClick={handleClose}>X</button>
        <div className="pokestat-container--image">
          <h2 className="pokestat-name">{`#${pokemon.id} ${pokemon.name}`}</h2>
          <img className="pokestat-image" src={pokemon.image} alt={`${pokemon.name}.png`} />
        </div>
        <div className="pokestat-infos">
          <div className="pokestat-details">
            {Object.entries(pokemon.stats).map(([statName, statValue]) => {
              const width = (statValue / 255) * 100;
              return (
                <section key={statName} className="pokestat-details-unique">
                  <p className="pokestat-details-unique--name">{`${translation(statName)}: `}</p>
                  <div className="pokestat-details--right">
                    <p className="pokestat-details-unique--value">{statValue}</p>
                    <div className="pokestat-details-unique--barre-container">
                      <div
                        className="pokestat-details-unique--barre__progress"
                        style={{
                          width: `${width}%`,
                        }}
                      />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Pokestat.propTypes = {
  toggleDetails: PropTypes.func.isRequired,
};

export default Pokestat;
