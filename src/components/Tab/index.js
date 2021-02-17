import React from 'react';
import PropTypes from 'prop-types';

import TdHead from './TdHead';

import './style.scss';

const Tab = (
  { types, pokemonSelected },
) => (
  <div className="tab-container">
    <p className="tab-title"> Forces et faiblesses de votre séléction</p>
    <table className="tab">
      <thead className="tab-head">
        <tr className="tab-head--tr">
          <td className="tab-head--type">Types / Pokemons</td>
          {types.map((currentType) => (
            <TdHead key={currentType.name} {...currentType} />
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {pokemonSelected.map((chosenPokemon) => (
            <td className="tab-head--sprites">
              <img className="tab-head--sprites_image" src={chosenPokemon.image} alt={chosenPokemon.name} />
            </td>
          ))}
          <td className="tab-head--sprites">S</td>
        </tr>
        {types.map((currentType, index) => (
          <tr key={currentType.name}>
            {pokemonSelected.map((resist) => (
              <td key={resist.apiResistances[index].name} className="tab-head--def">{resist.apiResistances[index].damage_multiplier}</td>
            ))}
            <td className="tab-head--def">S</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Tab.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  pokemonSelected: PropTypes.arrayOf(PropTypes.shape({
    apiResistances: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      damage_multiplier: PropTypes.number.isRequired,
      damage_relation: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default Tab;
