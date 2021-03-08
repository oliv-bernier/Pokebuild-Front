/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import { Pokemon } from '../type/index';
import slugifyText from '../utils/slugify';

/**
 * This function filters pokemon by name
 * @param {Array} pokemons - array of pokemon prefiltered by types and gen
 * @param {String} input - name of the pokemon the user wants to filter
 */
const pokemonFilterByName = (
  pokemons: Array<Pokemon>,
  input: string,
): Array<Pokemon> => {
  const filtered = pokemons.filter((pokemon) => {
    const testedName = pokemon.slug.toLowerCase();
    const trimedInput = input.trim();
    return testedName.includes(slugifyText(trimedInput));
  });
  return filtered;
};

/**
 * This function filters pokemons by generation
 * @param {Array} pokemons - array of pokemon prefiltered by types
 * @param {number} genValue - generation the user wants to filter
 */
const pokemonFilterByGen = (
  pokemons: Array<Pokemon>,
  genValue: number,
): Array<Pokemon> => {
  let filtered: Array<Pokemon>;
  const value = Number(genValue);
  if (value === 0) {
    filtered = pokemons;
  }
  else {
    filtered = pokemons.filter((pokemon) => {
      return pokemon.apiGeneration === value;
    });
  }
  return filtered;
};

/**
 * This function filters Pokemons through types and gen values
 * passing through 2 other functions
 * @param {Array} pokemons - The array of pokemons
 * @param {Array} type - The Array of types to filter
 * @param {string} input - The search the user made
 * @param {number} genValue - The gen the user wants to filter
 */
const pokemonFilter = (
  pokemons: Array<Pokemon>,
  type: Array<string>,
  input: string,
  genValue: number,
): Array<Pokemon> => {
  let filtered = pokemons;
  if (type.length !== 0) {
    filtered = pokemons.filter((pokemon: Pokemon): boolean => {
      return pokemon.apiTypes.some((currentApiType) => (
        type.join().includes(currentApiType.name)
      ));
    });
    filtered = pokemonFilterByGen(filtered, genValue);
    filtered = pokemonFilterByName(filtered, input);
    return filtered;
  }
  filtered = pokemonFilterByGen(filtered, genValue);
  filtered = pokemonFilterByName(filtered, input);
  return filtered;
};

export default pokemonFilter;
