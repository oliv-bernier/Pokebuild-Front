import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = ({
  isLogged,
  toggleLogin,
  toggleCreate,
  pseudo,
  logout,
  toggleLogged,
  toggleFav,
  toggleUpdate,
  fetchFav,
}: {
  isLogged: boolean,
  toggleLogin: Function,
  toggleCreate: Function,
  pseudo: string,
  logout: Function,
  toggleLogged: Function,
  toggleFav: Function,
  toggleUpdate: Function,
  fetchFav: Function,
}) => {
  const handleClickFav = () => {
    toggleFav();
    fetchFav();
  };

  const handleLogout = () => {
    logout();
    toggleLogged();
  };

  return (
    <div className="header">
      <div className="header-div">
        <NavLink
          to="/"
          exact
        >
          <h1 className="header-div-title">Pokébuild</h1>
        </NavLink>
        <div className="header-div-connexion">
          {!isLogged && <p onClick={() => toggleLogin()}>Se connecter</p>}
          {!isLogged && <p>|</p>}
          {!isLogged && <p onClick={() => toggleCreate()}>S'inscrire</p>}
          {isLogged && (
            <div className="trick">
              <div className="trick-box">
                <div className="trick-visible">
                  <p>Bonjour {pseudo}</p>
                </div>
                <div className="trick-invisible">
                  <p onClick={() => toggleUpdate()}>Modifier mes infos</p>
                </div>
              </div>
            </div>
          )}
          {isLogged && <p>|</p>}
          {isLogged && <p onClick={handleClickFav}>Favoris</p>}
          {isLogged && <p>|</p>}
          {isLogged && <p onClick={handleLogout}>Déconnexion</p>}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  toggleCreate: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  toggleLogged: PropTypes.func.isRequired,
  toggleFav: PropTypes.func.isRequired,
  toggleUpdate: PropTypes.func.isRequired,
  fetchFav: PropTypes.func.isRequired,
};

export default Header;
