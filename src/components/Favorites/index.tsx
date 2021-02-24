import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Favorites = ({
  isDrawer,
  toggleFav,
  teams,
}: {
  isDrawer: Boolean,
  toggleFav: Function,
  teams: Array<any>,
}) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const handleClose = () => {
    setIsAnimation(true);
    setTimeout(() => {
      toggleFav();
    }, 250);
  };

  return (
    <div className={classNames('favorites', { 'favorites_drawer-open': isDrawer }, { 'favorites--animation': isAnimation })}>
      <div className="favorites-content">
        <button type="button" className="favorites-content-close" onClick={handleClose}>X</button>
        <h1 className="favorites-content-title">Équipes favorites</h1>
        <div className="favorites-user">
          {teams.map((team) => (
            <div className="favorites-content-team">
              <div className="favorites-content-team-infos">
                <p key={team.name} className="favorites-content-team-title">{console.log(team)}{team.name}</p>
                <button type="button" className="favorites-content-team-infos-button">Analyser</button>
                <button type="button" className="favorites-content-team-infos-button">Supprimer</button>
              </div>
              <div className="favorites-content-team-pokemon">
                {team.pokemon.map((poke) => (
                  <div className="favorites-content-team-pokemon-div">
                    <img className="favorites-content-team-pokemon-div-sprite" src={poke.sprite} alt={poke.name} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Favorites.propTypes = {
  isDrawer: PropTypes.bool.isRequired,
  teams: PropTypes.array.isRequired,
};

export default Favorites;
