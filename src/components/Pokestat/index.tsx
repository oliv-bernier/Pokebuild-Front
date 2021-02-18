import React, { useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import translation from '../../utils/translation';
import StatDetails from './StatDetails';

import './style.scss';

const Pokestat = ({ toggleDetails, pokemon }: {toggleDetails: Function, pokemon: {
  id: number,
  name: string,
  image: string,
  sprite: string,
  stats: Array<number>,
  apiTypes: Array<{
    name: string,
    image: string,
  }>,
  apiGeneration: number,
}}) => {
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
            <section className="pokestat-container--image_section">
              {apiTypes.map((type: {name: string, image: string}) => (
                <img
                  key={type.name}
                  className="pokestat-container--image_type"
                  src={type.image}
                  alt={`${type.name}.png`}
                />
              ))}
            </section>
          </div>
          <img className="pokestat-image" src={image} alt={`${name}.png`} />
        </div>
        <div className="pokestat-infos">
          <div className="pokestat-details">
            {
            Object.entries(stats).map(([statName, statValue]: [string, number]) => {
              const width = (statValue / 255) * 100;
              return (
                <StatDetails
                  statName={statName}
                  statValue={statValue}
                  width={width}
                />
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
