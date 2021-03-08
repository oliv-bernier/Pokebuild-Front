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
  filterTypes,
  toggleDrawer,
  stopRoll,
  isDrawer,
  isRoll,
  isConfirmedRoll,
  filterInput,
  genValue,
}: {
  pokemon: Array<Pokemon>,
  filterTypes: Array<string>,
  toggleDrawer: Function,
  stopRoll: Function,
  isDrawer: boolean,
  isRoll: boolean,
  isConfirmedRoll: boolean,
  filterInput: string,
  genValue: number,
}) => {
  const [emptyList, setEmptyList] = useState(false);

  const handleDrawer = (): void => {
    toggleDrawer();
    stopRoll();
  };
  const filteredPokemon = pokemonFilter(pokemon, filterTypes, filterInput, genValue);
  useEffect(() => {
    if (filteredPokemon.length === 0) {
      setEmptyList(true);
    }
    else {
      setEmptyList(false);
    }
  });

  return (
    <section
      className={classNames('drawer',
        { 'drawer--open': isDrawer })}
    >
      <div className="drawer-button">
        <img
          onClick={handleDrawer}
          className={classNames('drawer-button-image',
            { 'drawer-button-image_roll': isRoll && isConfirmedRoll })}
          src={pokeball}
          alt="bouton tiroir"
        />
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
  filterTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  stopRoll: PropTypes.func.isRequired,
  isDrawer: PropTypes.bool.isRequired,
  isRoll: PropTypes.bool.isRequired,
  isConfirmedRoll: PropTypes.bool.isRequired,
  filterInput: PropTypes.string.isRequired,
  genValue: PropTypes.number.isRequired,
};

export default Drawer;
