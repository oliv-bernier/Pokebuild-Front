import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Search from '../Search';
import PokemonList from '../../containers/PokemonList';

// eslint-disable-next-line import/extensions
import { Pokemon, DrawerProps } from '../../type';
import pokeball from '../../assets/pokeball-big.svg';

import './style.scss';

const Drawer = ({ pokemon, toggleDrawer, isDrawer }: DrawerProps) => {
  const handleDrawer = (): void => {
    toggleDrawer();
  };
  return (
    <section className={classNames('drawer', { 'drawer--open': isDrawer })}>
      <div className="drawer-button">
        <img onClick={handleDrawer} className="drawer-button-image" src={pokeball} alt="bouton tiroir" />
      </div>
      <div className="drawer-pokedex">
        <Search />
        <div className="drawer-list">
          <ul className="drawer-list--pokemon">
            {pokemon.map((currentPokemon: Pokemon) => (
              <PokemonList key={currentPokemon.id} {...currentPokemon} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

Drawer.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  isDrawer: PropTypes.bool.isRequired,
};

export default Drawer;
