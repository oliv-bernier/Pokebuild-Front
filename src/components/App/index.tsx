import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from '../Header';
import Home from '../Home';
import About from '../About';
import NotFound from '../NotFound';

import Footer from '../../containers/Footer';
import Drawer from '../../containers/Drawer';
import LoginForm from '../../containers/LoginForm';
import Pokestat from '../../containers/Pokestat';

import './style.scss';

const App = ({
  isDetails,
  getPokemon,
  getTypes,
  isDrawer,
  isLogged,
  isLogin,
  toggleLogin,
  toggleCreate,
  toggleLogged,
  pseudo,
  logout,
  getUser,
}: {
    isDetails: boolean,
    getPokemon: Function,
    getTypes:Function,
    isDrawer: boolean,
    isLogged: boolean,
    isLogin: boolean,
    toggleLogin: Function,
    toggleCreate: Function,
    toggleLogged: Function,
    pseudo: string,
    logout: Function,
    getUser: Function,
  }) => {
  useEffect(() => {
    getPokemon();
    if (localStorage.getItem('user') !== null) {
      getUser();
    }
  }, []);
  useEffect(() => {
    getTypes();
  }, []);
  return (
    <div className="app">
      <Header
        isLogged={isLogged}
        toggleLogin={toggleLogin}
        toggleCreate={toggleCreate}
        pseudo={pseudo}
        logout={logout}
        toggleLogged={toggleLogged}
      />
      <div className={classNames('container', { 'container_drawer-open': isDrawer })}>
        {isLogin && (
          <LoginForm
            toggleLogin={toggleLogin}
            toggleCreate={toggleCreate}
            toggleLogged={toggleLogged}
          />
        )}
        <Switch>
          <Route path="/" exact>
            <Home isDetails={isDetails} />
            <Drawer />
            {isDetails && <Pokestat />}
          </Route>
          <Route path="/test" exact>
            <Pokestat />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  isDetails: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  getPokemon: PropTypes.func.isRequired,
  getTypes: PropTypes.func.isRequired,
  isDrawer: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  toggleCreate: PropTypes.func.isRequired,
  toggleLogged: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

export default App;
