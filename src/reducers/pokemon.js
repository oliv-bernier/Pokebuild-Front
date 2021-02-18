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
  pokemonSelected: [
    {
      id: 1,
      name: 'Bulbizzare',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        HP: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
      },
      apiTypes: [
        {
          name: 'Poison',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
        {
          name: 'Plante',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      ],
      apiGeneration: 1,
      apiResistances: [
        {
          name: 'Normal',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Combat',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Vol',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Poison',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Sol',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Roche',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Insecte',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Spectre',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Acier',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Feu',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Eau',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Plante',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Électrik',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Psy',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Glace',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Dragon',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Ténèbres',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Fée',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      ],
    },
    {
      id: 2,
      name: 'Bulbizzare',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        HP: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
      },
      apiTypes: [
        {
          name: 'Poison',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
        {
          name: 'Plante',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      ],
      apiGeneration: 1,
      apiResistances: [
        {
          name: 'Normal',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Combat',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Vol',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Poison',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Sol',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Roche',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Insecte',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Spectre',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Acier',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Feu',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Eau',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Plante',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Électrik',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Psy',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Glace',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Dragon',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Ténèbres',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Fée',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      ],
    },
    {
      id: 3,
      name: 'Bulbizzare',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        HP: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
      },
      apiTypes: [
        {
          name: 'Poison',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
        {
          name: 'Plante',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      ],
      apiGeneration: 1,
      apiResistances: [
        {
          name: 'Normal',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Combat',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Vol',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Poison',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Sol',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Roche',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Insecte',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Spectre',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Acier',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Feu',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Eau',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Plante',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Électrik',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Psy',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Glace',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Dragon',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Ténèbres',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Fée',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      ],
    },
    {
      id: 4,
      name: 'Bulbizzare',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        HP: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
      },
      apiTypes: [
        {
          name: 'Poison',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
        {
          name: 'Plante',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      ],
      apiGeneration: 1,
      apiResistances: [
        {
          name: 'Normal',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Combat',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Vol',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Poison',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Sol',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Roche',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Insecte',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Spectre',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Acier',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Feu',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Eau',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Plante',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Électrik',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Psy',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Glace',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Dragon',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Ténèbres',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Fée',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      ],
    },
    {
      id: 5,
      name: 'Bulbizzare',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        HP: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
      },
      apiTypes: [
        {
          name: 'Poison',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
        {
          name: 'Plante',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      ],
      apiGeneration: 1,
      apiResistances: [
        {
          name: 'Normal',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Combat',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Vol',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Poison',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Sol',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Roche',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Insecte',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Spectre',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Acier',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Feu',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Eau',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Plante',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Électrik',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Psy',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Glace',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Dragon',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Ténèbres',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Fée',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      ],
    },
    {
      id: 6,
      name: 'Bulbizzare',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        HP: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
      },
      apiTypes: [
        {
          name: 'Poison',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
        {
          name: 'Plante',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      ],
      apiGeneration: 1,
      apiResistances: [
        {
          name: 'Normal',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Combat',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Vol',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Poison',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Sol',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Roche',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Insecte',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Spectre',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Acier',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Feu',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Eau',
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        {
          name: 'Plante',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Électrik',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Psy',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Glace',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        {
          name: 'Dragon',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Ténèbres',
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        {
          name: 'Fée',
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      ],
    },
  ],
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
