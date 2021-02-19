import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Search from '../Search';
import PokemonList from '../../containers/PokemonList';

import { Pokemon } from '../../type';
import pokeball from '../../assets/pokeball-big.svg';
import pokemonFilter from '../../selectors/pokemonFilter';

import './style.scss';

const Drawer = ({
  pokemon,
  toggleDrawer,
  isDrawer,
  filterTypes,
  filterInput,
}: {
  pokemon: Array<Pokemon>,
  toggleDrawer: Function,
  isDrawer: boolean,
  filterTypes: Array<string>,
  filterInput: string,
}) => {
  const handleDrawer = (): void => {
    toggleDrawer();
  };
  const filteredPokemon = pokemonFilter(pokemon, filterTypes, filterInput);
  return (
    <section className={classNames('drawer', { 'drawer--open': isDrawer })}>
      <div className="drawer-button">
        <img onClick={handleDrawer} className="drawer-button-image" src={pokeball} alt="bouton tiroir" />
      </div>
      <div className="drawer-pokedex">
        <Search />
        <div className="drawer-list">
          <ul className="drawer-list--pokemon">
            {filteredPokemon.map((currentPokemon: Pokemon) => (
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
  filterTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterInput: PropTypes.string.isRequired,
};

export default Drawer;
