import { Pokemon } from '../type/index';

const pokemonFilter = (
  pokemons: Array<Pokemon>,
  type: Array<string>,
  input: string,
): Array<Pokemon> => {
  const filtered = pokemons.filter((pokemon) => {
    const testedName = pokemon.name.toLowerCase();
    const trimedInput = input.trim();
    return testedName.includes(trimedInput.toLowerCase());
  });
  return filtered;
};

export default pokemonFilter;
