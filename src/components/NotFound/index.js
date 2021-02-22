import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/404.svg';

import './style.scss';

const NotFound = () => (
  <div className="notfound">
    <img className="notfound-image" src={logo} alt="404" />
    <div className="notfound-text">
      <h2 className="notfound-text--title">Oups ! Tu t'es perdu dans un champ de Pikachu sauvage</h2>
      <h3 className="notfound-text--sub">Danger d'éléctrocution</h3>
      <NavLink
        className="notfound-text--button"
        to="/"
        exact
      >
        Retour à l'arène
      </NavLink>
    </div>
  </div>
);

export default NotFound;
