import React from 'react';

import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = () => (
  <div className="header">
    <NavLink
      to="/"
      exact
    >
      <div className="header-div">
        <h1 className="header-div-title">Pokébuild</h1>
        <div className="header-div-connexion">
          <p>Se connecter</p>
          <p>S'inscrire</p>
          <p>Bonjour Utilisateur</p>
          <p>Déconnexion</p>
        </div>
      </div>
    </NavLink>
  </div>
);

export default Header;
