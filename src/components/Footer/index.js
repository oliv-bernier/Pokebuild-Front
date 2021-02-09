import React from 'react';

import './style.scss';

const Footer = () => (
    <footer className="footer">
        <div className="footer--links">
            <a href="#"><p>Home</p></a>
            <a href="#"><p>About</p></a>
        </div>
        <p className="footer--copyright">
            Copyright © Pokémon Team Builder 2021
        </p>
    </footer>
);

export default Footer;