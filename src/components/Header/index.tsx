import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = ({
  isLogged,
  toggleLogin,
}: {
  isLogged: boolean,
  toggleLogin: Function,
}) => {
  const handleClick = () => {
    toggleLogin();
  };

  return (
    <div className="header">
      <NavLink
        to="/"
        exact
      >
        <div className="header-div">
          <h1 className="header-div-title">Pokébuild</h1>
          <div className="header-div-connexion">
            {!isLogged && <p onClick={handleClick}>Se connecter</p>}
            {!isLogged && <p>|</p>}
            {!isLogged && <p onClick={handleClick}>S'inscrire</p>}
            {isLogged && <p>Bonjour Utilisateur</p>}
            {isLogged && <p>|</p>}
            {isLogged && <p>Déconnexion</p>}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired,
};

export default Header;
