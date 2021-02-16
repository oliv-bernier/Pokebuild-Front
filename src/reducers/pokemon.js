import {
  POKEMON_DETAILS,
  INPUT_SEARCH,
  DELETE_SEARCH_INPUT,
  ADD_FILTER_TYPES,
  DELETE_FILTER_TYPES,
} from '../actions/pokemon';

const initialState = {
  pokemonList: [
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
    },
    {
      id: 7,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
    {
      id: 8,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
    {
      id: 9,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
    {
      id: 10,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
    {
      id: 11,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
    {
      id: 12,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
    {
      id: 13,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
    {
      id: 14,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
    {
      id: 15,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
    {
      id: 16,
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
    },
    {
      id: 17,
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
    },
    {
      id: 18,
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
    },
    {
      id: 19,
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
    },
    {
      id: 20,
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
    },
    {
      id: 21,
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
    },
    {
      id: 22,
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
    },
    {
      id: 23,
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
    },
    {
      id: 24,
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
    },
    {
      id: 25,
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
    },
    {
      id: 26,
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
    },
    {
      id: 27,
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
    },
    {
      id: 28,
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
    },
    {
      id: 29,
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
    },
    {
      id: 30,
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
          image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765_1280.png',
        },
        {
          name: 'Plante',
          image: 'https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_1280.png',
        },
      ],
      apiGeneration: 1,
    },
  ],
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
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
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
      resistances: {
        Normal: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Combat: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Vol: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Poison: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Sol: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Roche: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Insecte: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Spectre: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Acier: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Feu: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Eau: {
          damage_multiplier: 2,
          damage_relation: 'vulnerable',
        },
        Plante: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Électrik: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Psy: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Glace: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
        Dragon: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Ténèbres: {
          damage_multiplier: 1,
          damage_relation: 'neutral',
        },
        Fée: {
          damage_multiplier: 0.5,
          damage_relation: 'resistant',
        },
      },
    },
  ],
  pokedetails: {},
  favorites: [],
  types: [
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_1280.png',
    },
    {
      name: 'Combat',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Vol',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414808_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
    {
      name: 'Normal',
      image: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806_1280.png',
    },
  ],
  searchInput: 'test',
  filterTypes: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
