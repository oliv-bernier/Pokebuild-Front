import React from 'react';

import './style.scss';

const Drawer = () => (
    <section className="drawer">
        <button className="drawer-button"></button>
        <div className="drawer-search">
            <input type="text"/>
            <input type="checkbox" name="" id=""/>
        </div>
        <div className="drawer-list">
            <div className="drawer-list--pokemon"></div>
        </div>
    </section>
);

export default Drawer;