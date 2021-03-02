import { MEMORIZE_RESISTANCES } from '../actions/teamResistances';
import { REMOVE_ALL_POKEMON } from '../actions/pokemon';

const initialState = {
  Normal: {},
  Combat: {},
  Vol: {},
  Poison: {},
  Sol: {},
  Roche: {},
  Insecte: {},
  Spectre: {},
  Acier: {},
  Feu: {},
  Eau: {},
  Plante: {},
  Électrik: {},
  Psy: {},
  Glace: {},
  Dragon: {},
  Ténèbres: {},
  Fée: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MEMORIZE_RESISTANCES:
      return {
        ...state,
        [action.key]: action.value,
      };
    case REMOVE_ALL_POKEMON:
      return {
        ...state,
        Normal: {},
        Combat: {},
        Vol: {},
        Poison: {},
        Sol: {},
        Roche: {},
        Insecte: {},
        Spectre: {},
        Acier: {},
        Feu: {},
        Eau: {},
        Plante: {},
        Électrik: {},
        Psy: {},
        Glace: {},
        Dragon: {},
        Ténèbres: {},
        Fée: {},
      };
    default:
      return state;
  }
};

export default reducer;
