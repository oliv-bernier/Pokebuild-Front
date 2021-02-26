import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Pokemon } from '../../type';

import './style.scss';

const Favorites = ({
  isDrawer,
  toggleFav,
  teams,
  toggleConfirmDelete,
  isConfirmDelete,
  deleteTeam,
  fetchFav,
  analyzeTeam,
}: {
  isDrawer: Boolean,
  toggleFav: Function,
  teams: Array<any>,
  toggleConfirmDelete: Function,
  isConfirmDelete: Boolean,
  deleteTeam: Function,
  fetchFav: Function,
  analyzeTeam: Function,
}) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const handleClose = (): void => {
    setIsAnimation(true);
    setTimeout(() => {
      toggleFav();
    }, 250);
  };

  const handleDelete = (): void => {
    deleteTeam();
    setTimeout(() => {
      toggleConfirmDelete('');
    }, 150);
    setTimeout(() => {
      fetchFav();
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
                <p key={team.name} className="favorites-content-team-title">{team.name}</p>
                <div className="favories-content-team-infos-buttons">
                  <button
                    type="button"
                    className="favorites-content-team-infos-button"
                    onClick={() => {
                      analyzeTeam(team.pokemon, team.pokemon.map((each: Pokemon) => (each.id)));
                      toggleFav();
                    }}
                  >
                    Analyser
                  </button>
                  <button type="button" className="favorites-content-team-infos-button" onClick={() => toggleConfirmDelete(team.id)}>Supprimer</button>
                </div>
              </div>
              <div className="favorites-content-team-pokemon">
                {team.pokemon.map((poke: Pokemon) => (
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
  fetchFav: PropTypes.func.isRequired,
  analyzeTeam: PropTypes.func.isRequired,
};

export default Favorites;
