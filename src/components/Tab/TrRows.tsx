import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Pokemon } from '../../type/index';

const TrRows = (
  {
    pokemon,
    index,
  }: {
    pokemon: Pokemon,
    index: number,
  },
) => {
  const [isTypeOver, setTypeOver] = useState(false);

  const mouseInOut = () => {
    setTypeOver(!isTypeOver);
  };

  return (
    <td
      className={`tab-head--def tab-head--def_${pokemon.apiResistances[index].damage_relation}`}
      onMouseOver={mouseInOut}
      onMouseOut={mouseInOut}
    >
      {pokemon.apiResistances[index].damage_multiplier}
      {isTypeOver && <span className="tab-head--def_name">{pokemon.apiResistances[index].damage_relation}</span>}
    </td>
  );
};

TrRows.propTypes = {
  pokemon: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TrRows;
