import React from 'react';
import PropTypes from 'prop-types';

import { Resistances } from '../../type/Resistances';

import './style.scss';

const Advices = ({
  advice,
  teamResistance,
  pokemonSelected,
}: {
  advice: string,
  pokemonSelected: Array<any>,
  teamResistance: Resistances,
}) => {
  console.log(teamResistance);

  if (pokemonSelected.length > 5) {
    return (
      <div className="advices">
        <div className="advices-style">
          {advice}
        </div>
      </div>
    );
  } return (
    <div className="advices">
      <div className="advices-style">
        Coucou, je suis un algorythme qui va te conseiller sur la composition de ton équipe.
        Composes-la avec le tiroir en cliquant sur la pokeball !!
      </div>
    </div>
  );
};

Advices.propTypes = {
  advice: PropTypes.string.isRequired,
  pokemonSelected: PropTypes.array.isRequired,
  teamResistance: PropTypes.object.isRequired,
};

export default Advices;
