import { MEMORIZE_TEAMS, CHANGE_NAME_INPUT } from '../actions/favorites';

const initialState = {
  name: '',
  teams: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MEMORIZE_TEAMS:
      return {
        ...state,
        teams: [...action.teams],
      };
    case CHANGE_NAME_INPUT:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
