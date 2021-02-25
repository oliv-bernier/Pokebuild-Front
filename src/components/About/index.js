import React from 'react';

import Card from '../Card';
import TechnoItem from '../TechnoItem';

import about from '../../data/about';
import technos from '../../data/techno';

import './style.scss';

const About = () => (
  <div className="about">
    <div className="cards">
      {about.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
    <a
      className="api-link"
      href="http://ec2-3-83-51-192.compute-1.amazonaws.com/api/v1"
      target="blank"
    >
      Lien vers notre api custom
    </a>
    <div className="techno">
      <h2 className="techno-title">Liste des technos utilisées</h2>
      <ul className="techno-list">
        {technos.map((techno) => (
          <TechnoItem key={techno.id} {...techno} />
        ))}
      </ul>
    </div>
  </div>
);

export default About;
