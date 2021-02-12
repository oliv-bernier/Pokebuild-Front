import React from 'react';

import pokemons from '../../data/pokemon';

import './style.scss';

const Pokestat = () => {
  const pokemon = pokemons[0];
  return (
    <div className="pokestat">
      <div className="pokestat-container">
        <img className="pokestat-image" src={pokemon.image} alt={`${pokemon.name}.png`} />
        <div className="pokestat-infos">
          <h2 className="pokestat-name">{`#${pokemon.id} ${pokemon.name}`}</h2>
          <h3 className="pokestat-details-title">Statistiques :</h3>
          <div className="pokestat-details">
            {Object.entries(pokemon.stats).map(([statname, stat]) => {
              const width = (stat / 255) * 100;
              return (
                <section key={statname} className="pokestat-details-unique">
                  <p className="pokestat-details-unique--name">{`${statname} : ${stat}`}</p>
                  <div className="pokestat-details-unique--barre-container">
                    <div
                      className="pokestat-details-unique--barre__progress"
                      style={{
                        width: `${width}%`,
                      }}
                    />
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
