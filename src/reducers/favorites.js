import {
  MEMORIZE_TEAMS,
  CHANGE_NAME_INPUT,
  TOGGLE_CONFIRM_DELETE,
  DELETE_TEAM,
} from '../actions/favorites';

const initialState = {
  name: '',
  teams: [],
  id: '',
  isConfirmDelete: false,
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
    case TOGGLE_CONFIRM_DELETE:
      return {
        ...state,
        isConfirmDelete: !state.isConfirmDelete,
        id: action.id,
      };
    case DELETE_TEAM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
