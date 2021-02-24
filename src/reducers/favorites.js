import { MEMORIZE_TEAMS } from '../actions/favorites';

const initialState = {
  teams: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MEMORIZE_TEAMS:
      return {
        ...state,
        teams: [...action.teams],
      };
    default:
      return state;
  }
};

export default reducer;
