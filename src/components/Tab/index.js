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
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Acier.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Combat.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Dragon.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Eau.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Feu.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Fée.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Glace.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Insecte.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Normal.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Plante.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Poison.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Psy.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Roche.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Sol.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Spectre.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Ténèbres.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Vol.damage_multiplier}</td>
          ))}
          <td className="tab-head--def">S</td>
        </tr>
        <tr>
          {pokemonSelected.map((resist) => (
            <td className="tab-head--def">{resist.resistances.Électrik.damage_multiplier}</td>
          ))}
          <td className="tab-head--def--last">S</td>
        </tr>
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
    resistances: PropTypes.objectOf(PropTypes.shape({
      damage_multiplier: PropTypes.number.isRequired,
      damage_relation: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default Tab;
