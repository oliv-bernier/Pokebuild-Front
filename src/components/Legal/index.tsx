import React from 'react';

import './style.scss';

import legal from '../../data/legal';

const Legal = () => (
  <div className="legal">
    <div className="legal-container">
      {/* <h1 className="legal-grandTitle">Mentions Légales :</h1> */}
      {legal.map((currentLegal) => (
        <section className="legal-section">
          <h2 className="legal-title">{currentLegal.title}</h2>
          <p className="legal-text">{currentLegal.text}</p>
        </section>
      ))}
    </div>
  </div>
);

export default Legal;
