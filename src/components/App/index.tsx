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
import Favorites from '../../containers/Favorites';
import UserUpdate from '../../containers/UserUpdate';

import './style.scss';

const App = ({
  isDetails,
  isDrawer,
  isLogged,
  isLogin,
  isUpdate,
  getPokemon,
  getTypes,
  getUser,
  toggleLogin,
  toggleCreate,
  toggleLogged,
  toggleUpdate,
  pseudo,
  logout,
  toggleFav,
  isFav,
  fetchFav,
  isSuggestion,
}: {
    isDetails: boolean,
    isDrawer: boolean,
    isLogged: boolean,
    isLogin: boolean,
    isFav: boolean,
    isUpdate: boolean,
    getPokemon: Function,
    getTypes:Function,
    getUser: Function,
    toggleLogin: Function,
    toggleCreate: Function,
    toggleLogged: Function,
    toggleUpdate: Function,
    logout: Function,
    toggleFav: Function,
    fetchFav: Function,
    pseudo: string,
    isSuggestion: boolean,
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
        toggleFav={toggleFav}
        fetchFav={fetchFav}
        toggleUpdate={toggleUpdate}
      />
      <div className={classNames('container', { 'container_drawer-open': isDrawer })}>
        {isLogin && (
          <LoginForm
            toggleLogin={toggleLogin}
            toggleCreate={toggleCreate}
            toggleLogged={toggleLogged}
          />
        )}
        {isUpdate && <UserUpdate />}
        {isFav && <Favorites />}
        <Switch>
          <Route path="/" exact>
            <Home isDetails={isDetails} isSuggestion={isSuggestion} />
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
  isDrawer: PropTypes.bool.isRequired,
  isFav: PropTypes.bool.isRequired,
  isUpdate: PropTypes.bool.isRequired,
  getPokemon: PropTypes.func.isRequired,
  getTypes: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  toggleCreate: PropTypes.func.isRequired,
  toggleLogged: PropTypes.func.isRequired,
  toggleUpdate: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  toggleFav: PropTypes.func.isRequired,
  fetchFav: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
  isSuggestion: PropTypes.bool.isRequired,
};

export default App;
