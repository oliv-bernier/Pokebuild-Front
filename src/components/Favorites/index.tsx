import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Favorites = ({
  isDrawer,
  toggleFav,
  teams,
  toggleConfirmDelete,
  isConfirmDelete,
  deleteTeam,
}: {
  isDrawer: Boolean,
  toggleFav: Function,
  teams: Array<any>,
  toggleConfirmDelete: Function,
  isConfirmDelete: Boolean,
  deleteTeam: Function,
}) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const handleClose = () => {
    setIsAnimation(true);
    setTimeout(() => {
      toggleFav();
    }, 250);
  };

  const handleDelete = () => {
    deleteTeam();
    toggleConfirmDelete('');
  };

  return (
    <div className={classNames('favorites', { 'favorites_drawer-open': isDrawer }, { 'favorites--animation': isAnimation })}>
      <div className="favorites-content">
        <button type="button" className="favorites-content-close" onClick={handleClose}>X</button>
        <h1 className="favorites-content-title">Équipes favorites</h1>
        <div className="favorites-user">
          {teams.map((team, index) => (
            <div className="favorites-content-team">
              <div className="favorites-content-team-infos">
                <p key={team.name} className="favorites-content-team-title">{team.name}</p>
                <button type="button" className="favorites-content-team-infos-button">Analyser</button>
                <button type="button" className="favorites-content-team-infos-button" onClick={() => toggleConfirmDelete(index)}>Supprimer</button>
              </div>
              <div className="favorites-content-team-pokemon">
                {team.pokemon.map((poke) => (
                  <div className="favorites-content-team-pokemon-div">
                    <img className="favorites-content-team-pokemon-div-sprite" src={poke.sprite} alt={poke.name} />
                    <p className="favorites-content-team-pokemon-div-name">{poke.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {isConfirmDelete && (
            <div className="favorites-confirm-delete">
              <div className="favorites-confirm-delete-content">
                <p className="favorites-confirm-delete-content-answer">Êtes vous-sûr de supprimer cette équipe ?</p>
                <div className="favorites-confirm-delete-content-buttons">
                  <button type="button" className="favorites-content-team-infos-button" onClick={handleDelete}>Oui</button>
                  <button type="button" className="favorites-content-team-infos-button" onClick={() => toggleConfirmDelete('')}>Non</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Favorites.propTypes = {
  isDrawer: PropTypes.bool.isRequired,
  teams: PropTypes.array.isRequired,
  toggleConfirmDelete: PropTypes.func.isRequired,
  isConfirmDelete: PropTypes.bool.isRequired,
  deleteTeam: PropTypes.func.isRequired,
};

export default Favorites;
