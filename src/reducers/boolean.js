import { TOGGLE_DETAILS, TOGGLE_DRAWER, CLOSE_DRAWER } from '../actions/boolean';

const initialState = {
  isDrawer: false,
  isDetails: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_DETAILS:
      return {
        ...state,
        isDetails: !state.isDetails,
      };
    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawer: !state.isDrawer,
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        isDrawer: false,
      };
    default:
      return state;
  }
};

export default reducer;
