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

export const GET_POKEMON = 'GET_POKEMON';
export const getPokemon = () => ({
  type: GET_POKEMON,
});

export const MEMORIZE_POKEMON = 'MEMORIZE_POKEMON';
export const memorizePokemon = (pokemon) => ({
  type: MEMORIZE_POKEMON,
  pokemon,
});

export const GET_TYPES = 'GET_TYPES';
export const getTypes = () => ({
  type: GET_TYPES,
});

export const MEMORIZE_TYPES = 'MEMORIZE_TYPES';
export const memorizeTypes = (types) => ({
  type: MEMORIZE_TYPES,
  types,
});

export const ADD_SELECTED_POKEMON = 'ADD_SELECTED_POKEMON';
export const addSelectedPokemon = (id) => ({
  type: ADD_SELECTED_POKEMON,
  id,
});

export const REMOVE_SELECTED_POKEMON = 'REMOVE_SELECTED_POKEMON';
export const removeSelectedPokemon = (index) => ({
  type: REMOVE_SELECTED_POKEMON,
  index,
});

export const REMOVE_ALL_POKEMON = 'REMOVE_ALL_POKEMON';
export const removeAllPokemon = () => ({
  type: REMOVE_ALL_POKEMON,
});

export const SEND_TEAM = 'SEND_TEAM';
export const sendTeam = (team) => ({
  type: SEND_TEAM,
  team,
});

export const MEMORIZE_RESISTANCES = 'MEMORIZE_RESISTANCES';
export const memorizeResitances = (resistances) => ({
  type: MEMORIZE_RESISTANCES,
  resistances,
});

export const GENERATE_TEAM = 'GENERATE_TEAM';
export const generateTeam = () => ({
  type: GENERATE_TEAM,
});

export const MEMORIZE_RANDOM_TEAM = 'MEMORIZE_RANDOM_TEAM';
export const memorizeRandomTeam = (team) => ({
  type: MEMORIZE_RANDOM_TEAM,
  team,
});
