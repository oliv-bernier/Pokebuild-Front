import React from 'react';

import Search from '../Search';
import PokemonList from '../PokemonList';


import pokeball from '../../assets/pokeball-big.svg'

import pokemon from '../../data/pokemon';

import './style.scss';

const Drawer = () => (
    <section className="drawer">
        <div className="drawer-button">
            <img className="drawer-button-image" src={pokeball} alt="bouton tiroir"/>
        </div>
        <Search />
        <div className="drawer-list">
            <ul className="drawer-list--pokemon">
                {pokemon.map((pokemon) => (
                    <PokemonList />
                ))}
            </ul>
        </div>
    </section>
);

export default Drawer;