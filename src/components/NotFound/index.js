import React from 'react';

import logo from '../../assets/404.svg';

import './style.scss';

const NotFound = () => (
  <div className="notfound">
    <img className="notfound-image" src={logo} alt="404"/>
    <div className="notfound-text">
      <h2 className="notfound-text--title">Erreur <span className="notfound-text--title-404">404</span> - Page non trouvée</h2>
      <h3 className="notfound-text--sub">Danger d'éléctrocution</h3>
    </div>
  </div>
);

export default NotFound;