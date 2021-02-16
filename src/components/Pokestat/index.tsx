import React, { useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

// @ts-ignore
import translation from '../../utils/translation.tsx';
// @ts-ignore
import { PokestatProps, ApiTypes } from '../../type/index.tsx';

import './style.scss';

const Pokestat = ({ toggleDetails, pokemon }: PokestatProps) => {
  const {
    id,
    name,
    image,
    stats,
    apiTypes,
  } = pokemon;
  const [isAnimation, setIsAnimation] = useState(false);
  const handleClose = (): void => {
    setIsAnimation(true);
    setTimeout(toggleDetails, 250);
  };
  return (
    <div className={classNames('pokestat', { 'pokestat--animation': isAnimation })}>
      <div className="pokestat-container">
        <button type="button" className="pokestat-container--button" onClick={handleClose}>X</button>
        <div className="pokestat-container--image">
          <div className="pokestat-container--image_infos">
            <h2 className="pokestat-name">{`#${id} ${name}`}</h2>
            {apiTypes.map((type: ApiTypes) => (
              <img className="pokestat-container--image_type" src={type.image} alt={`${type.name}.png`} />
            ))}
          </div>
          <img className="pokestat-image" src={image} alt={`${name}.png`} />
        </div>
        <div className="pokestat-infos">
          <div className="pokestat-details">
            {// @ts-ignore
            Object.entries(stats).map(([statName, statValue]: [string, number]) => {
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
            })
            }
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
