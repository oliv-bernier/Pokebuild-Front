import React from 'react';
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
) => (
  <td
    className={`tab-head--def tab-head--def_${pokemon.apiResistances[index].damage_relation}`}
  >
    {pokemon.apiResistances[index].damage_multiplier}
  </td>
);

TrRows.propTypes = {
  pokemon: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TrRows;
