import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import dark from '../../assets/moon.svg';
import light from '../../assets/sun.svg';

import './style.scss';

const Header = ({
  isLogged,
  pseudo,
  toggleLogin,
  toggleCreate,
  logout,
  toggleLogged,
  toggleFav,
  toggleUpdate,
  fetchFav,
}: {
  isLogged: boolean,
  pseudo: string,
  toggleLogin: Function,
  toggleCreate: Function,
  logout: Function,
  toggleLogged: Function,
  toggleFav: Function,
  toggleUpdate: Function,
  fetchFav: Function,
}) => {
  const [burger, setBurger] = useState(false);

  const [isDark, setDark] = useState(true);

  const [isLight, setLight] = useState(false);

  const handleClickFav = () => {
    toggleFav();
    fetchFav();
    setBurger(!burger);
  };

  const handleLogout = () => {
    logout();
    toggleLogged();
    setBurger(!burger);
  };

  const handleBurger = () => {
    setBurger(!burger);
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
        <div className="light-dark">
          {isDark && (
            <img
              className="darkmode"
              src={dark}
              alt="dark mode"
              onClick={() => {
                setLight(!isLight);
                setDark(!isDark);
              }}
            />
          )}
          {isLight && (
            <img
              className="lightmode"
              src={light}
              alt="dark mode"
              onClick={() => {
                setDark(!isDark);
                setLight(!isLight);
              }}
            />
          )}
        </div>
        <div className="header-div-mobile" onClick={handleBurger}>
          <i className="fas fa-bars" />
        </div>
        {burger
        && (
          <div className="header-div-mobile-open">
            {!isLogged && (
            <p onClick={() => {
              toggleLogin();
              setBurger(!burger);
            }}
            >
              Se connecter
            </p>
            )}
            {!isLogged && (
            <p onClick={() => {
              toggleCreate();
              setBurger(!burger);
            }}
            >
              S'inscrire
            </p>
            )}
            {isLogged && (
              <div className="trick">
                <div className="trick-box">
                  <div className="trick-visible">
                    <p>Bonjour {pseudo}</p>
                  </div>
                  <div className="trick-invisible">
                    <p onClick={() => {
                      toggleUpdate();
                      setBurger(!burger);
                    }}
                    >
                      Modifier mes infos
                    </p>
                  </div>
                </div>
              </div>
            )}
            {isLogged && <p onClick={handleClickFav}>Favoris</p>}
            {isLogged && <p onClick={handleLogout}>Déconnexion</p>}
          </div>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  toggleCreate: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  toggleLogged: PropTypes.func.isRequired,
  toggleFav: PropTypes.func.isRequired,
  toggleUpdate: PropTypes.func.isRequired,
  fetchFav: PropTypes.func.isRequired,
};

export default Header;
