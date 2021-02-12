import React from 'react';

import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = () => (
  <div className="header">
    <NavLink
      to="/"
      exact
    >
      <h1 className="header-title">Pokébuild</h1>
    </NavLink>
  </div>
);

export default Header;
