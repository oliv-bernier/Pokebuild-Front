import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer--links">
      <NavLink
        className="footer-navlink"
        activeClassName="footer-navlink--active"
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        className="footer-navlink"
        activeClassName="footer-navlink--active"
        to="/about"
        exact
      >
        About
      </NavLink>
    </div>
    <p className="footer--copyright">
      Copyright © Pokébuild 2021
    </p>
  </footer>
);

export default Footer;
