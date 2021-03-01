import React, { useState, useEffect } from 'react';

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
  const [emptyList, setEmptyList] = useState(false);
  const handleDrawer = (): void => {
    toggleDrawer();
  };
  const filteredPokemon = pokemonFilter(pokemon, filterTypes, filterInput);
  useEffect(() => {
    if (filteredPokemon.length === 0) {
      setEmptyList(true);
    }
    else {
      setEmptyList(false);
    }
  });

  let style: string;
  if (window.innerHeight <= 850) {
    style = 'style="top: calc(100% - 2.9rem"';
  }
  return (
    <section
      className={classNames('drawer', { 'drawer--open': isDrawer })}
    >
      <div className="drawer-button">
        <img onClick={handleDrawer} className="drawer-button-image" src={pokeball} alt="bouton tiroir" />
      </div>
      <div className="drawer-pokedex">
        <Search />
        <div className="drawer-list">
          {!emptyList && (
            <ul className="drawer-list--pokemon">
              {filteredPokemon.map((currentPokemon: Pokemon) => (
                <PokemonList key={currentPokemon.id} {...currentPokemon} />
              ))}
            </ul>
          )}
          {emptyList && (
            <p className="drawer-list--nopokemon">Aucun pokemon ne correspond à cette recherche</p>
          )}
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
