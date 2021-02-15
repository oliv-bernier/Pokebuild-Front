import React from 'react';

import pokemons from '../../data/pokemon';

import translation from '../../utils/translation.tsx';

import './style.scss';

const Pokestat = () => {
  const pokemon = pokemons[0];
  return (
    <div className="pokestat">
      <div className="pokestat-container">
        <button type="button" className="pokestat-container--button">X</button>
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

export default Pokestat;
