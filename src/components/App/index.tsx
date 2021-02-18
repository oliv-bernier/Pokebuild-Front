import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Drawer from '../../containers/Drawer';
import About from '../About';
import NotFound from '../NotFound';

import Pokestat from '../../containers/Pokestat';

import './style.scss';

const App = ({
  isDetails,
  getPokemon,
  getTypes,
  isDrawer,
}: {
    isDetails: boolean,
    getPokemon: Function,
    getTypes:Function,
  }) => {
  useEffect(() => {
    getPokemon();
  }, []);
  useEffect(() => {
    getTypes();
  }, []);
  return (
    <div className="app">
      <Header />
      <div className={classNames('container', { 'container_drawer-open': isDrawer })}>
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
  getPokemon: PropTypes.func.isRequired,
  getTypes: PropTypes.func.isRequired,
  isDrawer: PropTypes.bool.isRequired,
};

export default App;
