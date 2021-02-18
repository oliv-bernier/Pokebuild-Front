import React from 'react';
import PropTypes from 'prop-types';

import corner from '../../assets/cornertab.png';

import TdHead from './TdHead';
import TrRows from './TrRows';

import './style.scss';

const Tab = (
  { types, pokemonSelected },
) => (
  <div className="tab-container">
    {/* <p className="tab-title"> Forces et faiblesses de votre séléction</p> */}
    <table className="tab">
      <thead className="tab-head">
        <tr className="tab-head--tr">
          <td className="tab-head--type">
            <img className="tab-head--corner" src={corner} alt="corner" />
            <div className="tab-head--type-def1">Types</div>
            <div className="tab-head--type-def2">Pokémon</div>
          </td>
          {types.map((currentType) => (
            <TdHead key={currentType.name} {...currentType} />
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {pokemonSelected.map((chosenPokemon) => (
            <td key={chosenPokemon.name} className="tab-head--sprites">
              <img key={chosenPokemon.image} className="tab-head--sprites_image" src={chosenPokemon.image} alt={chosenPokemon.name} />
            </td>
          ))}
          <td className="tab-head--sprites">S</td>
        </tr>
        {types.map((currentType, index) => (
          <tr key={currentType.name}>
            {pokemonSelected.map((resist) => (
              <TrRows key={currentType.image} resist={resist} index={index} />
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
