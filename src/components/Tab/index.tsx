import React from 'react';
import PropTypes from 'prop-types';

import corner from '../../assets/cornertab.png';

import TdHead from './TdHead';
import TrRows from './TrRows';

import { Pokemon } from '../../type/index';

import randomKey from '../../utils/randomizer';
import './style.scss';

const Tab = (
  {
    types,
    pokemonSelected,
  }: {
    types: Array<{
      name: string,
      image: string,
   }>, pokemonSelected: Array<Pokemon> },
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
            <td key={randomKey(0, 1000000)} className="tab-head--sprites">
              <img className="tab-head--sprites_image" src={chosenPokemon.image} alt={chosenPokemon.name} />
            </td>
          ))}
          <td className="tab-head--sprites">S</td>
        </tr>
        {types.map((currentType: {name: string, image: string}, index: number) => (
          <tr key={randomKey(1000000, 2000000)}>
            {pokemonSelected.map((pokemon: Pokemon) => (
              <TrRows key={randomKey(1000000, 3000000)} pokemon={pokemon} index={index} />
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
