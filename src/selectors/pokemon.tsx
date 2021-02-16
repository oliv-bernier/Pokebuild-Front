// @ts-ignore
import Pokemon from '../type/index.tsx';

/**
 * Looking for a specific Pokemon details
 * @param {object} state
 * @param {number} id
 */
// eslint-disable-next-line import/prefer-default-export
export function findPokemonDetails(state: any, id: number) {
  return state.pokemon.pokemonList.find((currentPokemon: Pokemon) => currentPokemon.id === id);
}
