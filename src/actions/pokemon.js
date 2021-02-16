export const POKEMON_DETAILS = 'POKEMON_DETAILS';
export const pokemonDetails = (pokeDetails) => ({
  type: POKEMON_DETAILS,
  pokeDetails,
});

export const INPUT_SEARCH = 'INPUT_SEARCH';
export const inputSearch = (value) => ({
  type: INPUT_SEARCH,
  value,
});

export const DELETE_SEARCH_INPUT = 'DELETE_SEARCH_INPUT';
export const deleteSearchInput = () => ({
  type: DELETE_SEARCH_INPUT,
});

export const ADD_FILTER_TYPES = 'ADD_FILTER_TYPES';
export const addFilterTypes = (value) => ({
  type: ADD_FILTER_TYPES,
  value,
});

export const DELETE_FILTER_TYPES = 'DELETE_FILTER_TYPES';
export const deleteFilterTypes = (value) => ({
  type: DELETE_FILTER_TYPES,
  value,
});