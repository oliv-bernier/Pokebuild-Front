import React from 'react';

import './style.scss';

const Drawer = () => (
    <section className="drawer">
        <button className="drawer-button"></button>
        <div className="drawer-search">
            <input 
                className="drawer-input" 
                type="text" 
                id="name" 
                placeholder="Chercher un Pokémon"
            />
            <select className="drawer-select" id="drawer-selectr">
                <option value="">----</option>
                <option value="dog">Par nom</option>
                <option value="cat">Par type</option>
            </select>
        </div>
        <div className="drawer-list">
            <div className="drawer-list--pokemon">
            
            </div>
        </div>
    </section>
);

export default Drawer;