import React, { useState } from 'react';

import Search from '../Search';
import PokemonList from '../PokemonList';
import  classNames from 'classnames';

import pokeball from '../../assets/pokeball-big.svg'

import pokemon from '../../data/pokemon';

import './style.scss';

const Drawer = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const handleDrawer = () => {
        setIsOpen(!isOpen);
       return isOpen;
    }
    return (
        <section className={classNames('drawer', {'drawer--open' : isOpen})}>
            <div className="drawer-button">
                <img onClick={handleDrawer} className="drawer-button-image" src={pokeball} alt="bouton tiroir"/>
            </div>
            <div className="drawer-pokedex">
                <Search />
                <div className="drawer-list">
                    <ul className="drawer-list--pokemon">
                        {pokemon.map((currentPokemon) => (
                                <PokemonList key={currentPokemon.id} {...currentPokemon}/>
                            ))}
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Drawer;