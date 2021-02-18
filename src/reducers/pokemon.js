import {
  POKEMON_DETAILS,
  INPUT_SEARCH,
  DELETE_SEARCH_INPUT,
  ADD_FILTER_TYPES,
  DELETE_FILTER_TYPES,
  MEMORIZE_POKEMON,
  MEMORIZE_TYPES,
} from '../actions/pokemon';

const initialState = {
  pokemonList: [],
  pokemonSelected: [],
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
    default:
      return state;
  }
};

export default reducer;
