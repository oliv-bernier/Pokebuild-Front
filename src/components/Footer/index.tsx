import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = ({ closeDrawer }: {closeDrawer: Function}) => {
  const handleClick = () => {
    closeDrawer();
  };
  return (
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
          onClick={handleClick}
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
};

Footer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};

export default Footer;
