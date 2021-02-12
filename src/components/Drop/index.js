import React from 'react';

import './style.scss';

const Drop = () => (
  <div className="home--selection">
    <h2 className="home--selection-title">
      Choisissez 6 pokémons depuis le tiroir
    </h2>
    <div className="home--selection-drops">
      <div className="home--selection-drop" />
      <div className="home--selection-drop" />
      <div className="home--selection-drop" />
      <div className="home--selection-drop" />
      <div className="home--selection-drop" />
      <div className="home--selection-drop" />
    </div>
  </div>
);

export default Drop;
