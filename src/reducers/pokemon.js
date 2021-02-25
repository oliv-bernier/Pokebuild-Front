import { ANALYZE_TEAM } from '../actions/favorites';
import {
  POKEMON_DETAILS,
  INPUT_SEARCH,
  DELETE_SEARCH_INPUT,
  ADD_FILTER_TYPES,
  DELETE_FILTER_TYPES,
  MEMORIZE_POKEMON,
  MEMORIZE_TYPES,
  ADD_SELECTED_POKEMON,
  REMOVE_SELECTED_POKEMON,
  REMOVE_ALL_POKEMON,
} from '../actions/pokemon';

const initialState = {
  pokemonList: [],
  pokemonSelected: [],
  pokemonSelectedIds: [],
  teamResistance: [],
  pokedetails: {},
  favorites: [],
  types: [],
  searchInput: '',
  filterTypes: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MEMORIZE_POKEMON:
      return {
        ...state,
        pokemonList: [...action.pokemon],
      };
    case MEMORIZE_TYPES:
      return {
        ...state,
        types: [...action.types],
      };
    case POKEMON_DETAILS:
      return {
        ...state,
        pokedetails: action.pokeDetails,
      };
    case INPUT_SEARCH:
      return {
        ...state,
        searchInput: action.value,
      };
    case DELETE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: '',
      };
    case ADD_FILTER_TYPES:
      return {
        ...state,
        filterTypes: [...state.filterTypes, action.value],
      };
    case DELETE_FILTER_TYPES:
      return {
        ...state,
        filterTypes: [...state.filterTypes.filter((type) => type !== action.value)],
      };
    case ADD_SELECTED_POKEMON:
      if (state.pokemonSelected.length >= 6) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        pokemonSelected: [...state.pokemonSelected, state.pokemonList.find((pokemon) => (
          pokemon.id === action.id
        ))],
        pokemonSelectedIds: [...state.pokemonSelectedIds, action.id],
      };
    case REMOVE_SELECTED_POKEMON: {
      if (state.pokemonSelected.length <= 0) {
        return {
          ...state,
        };
      }
      const newArray = [...state.pokemonSelected];
      const newArrayIds = [...state.pokemonSelectedIds];
      newArray.splice(action.index, 1);
      newArrayIds.splice(action.index, 1);
      return {
        ...state,
        pokemonSelected: [...newArray],
        pokemonSelectedIds: [...newArrayIds],
      };
    }
    case REMOVE_ALL_POKEMON:
      return {
        ...state,
        pokemonSelected: [],
        pokemonSelectedIds: [],
      };
    case ANALYZE_TEAM:
      return {
        ...state,
        pokemonSelected: action.team,
      };
    default:
      return state;
  }
};

export default reducer;
