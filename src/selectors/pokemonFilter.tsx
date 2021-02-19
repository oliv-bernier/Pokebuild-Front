/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import { Pokemon } from '../type/index';
import slugifyText from '../utils/slugify';

const pokemonFilterByName = (
  pokemons: Array<Pokemon>,
  type: Array<string>,
  input: string,
): Array<Pokemon> => {
  const filtered = pokemons.filter((pokemon) => {
    const testedName = pokemon.slug.toLowerCase();
    const trimedInput = input.trim();
    return testedName.includes(slugifyText(trimedInput));
  });
  return filtered;
};

const pokemonFilter = (
  pokemons: Array<Pokemon>,
  type: Array<string>,
  input: string,
): Array<Pokemon> => {
  let filtered = pokemons;
  if (type.length !== 0) {
    filtered = pokemons.filter((pokemon: Pokemon): boolean => {
      return pokemon.apiTypes.some((currentApiType) => (
        type.join().includes(currentApiType.name)
      ));
    });
    filtered = pokemonFilterByName(filtered, type, input);
    return filtered;
  }
  filtered = pokemonFilterByName(filtered, type, input);
  return filtered;
};

export default pokemonFilter;
