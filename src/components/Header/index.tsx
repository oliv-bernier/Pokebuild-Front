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
}: {
  isLogged: boolean,
  toggleLogin: Function,
  toggleCreate: Function,
  pseudo: string,
  logout: Function,
  toggleLogged: Function,
  toggleFav: Function,
}) => {
  const handleClick = () => {
    toggleLogin();
  };

  const handleClickCreate = () => {
    toggleCreate();
  };

  const handleClickFav = () => {
    toggleFav();
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
          {!isLogged && <p onClick={handleClick}>Se connecter</p>}
          {!isLogged && <p>|</p>}
          {!isLogged && <p onClick={handleClickCreate}>S'inscrire</p>}
          {isLogged && <p>Bonjour {pseudo}</p>}
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
};

export default Header;
