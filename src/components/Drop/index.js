import React from 'react';

import './style.scss';

const Drop = () => (
    <div className="home--selection">
        <p className="home--selection-title">
            Choisissez 6 pokémons depuis le tiroir
        </p>
        <div className="home--selection-drops">
            <div className="home--selection-drop"></div>
            <div className="home--selection-drop"></div>
            <div className="home--selection-drop"></div>
            <div className="home--selection-drop"></div>
            <div className="home--selection-drop"></div>
            <div className="home--selection-drop"></div>
        </div>
    </div>
);

export default Drop;