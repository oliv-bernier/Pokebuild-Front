export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = () => ({
  type: LOGIN_USER,
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logout = () => ({
  type: LOGOUT_USER,
});

export const MEMORIZE_USER = 'MEMORIZE_USER';
export const memorizeUser = (pseudo, token) => ({
  type: MEMORIZE_USER,
  pseudo,
  token,
});

export const CHANGE_INPUT = 'CHANGE_INPUT';
export const changeInput = (newValue, key) => ({
  type: CHANGE_INPUT,
  newValue,
  key,
});

export const CREATE_USER = 'CREATE_USER';
export const createUser = () => ({
  type: CREATE_USER,
});

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = () => ({
  type: UPDATE_USER,
});

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = () => ({
  type: DELETE_USER,
});

export const GET_USER = 'GET_USER';
export const getUser = () => ({
  type: GET_USER,
});

export const ADD_ERROR = 'ADD_ERROR';
export const addError = (error) => ({
  type: ADD_ERROR,
  error,
});

export const ADD_ERROR_LOGIN = 'ADD_ERROR_LOGIN';
export const addErrorLogin = () => ({
  type: ADD_ERROR_LOGIN,
});

export const ADD_ERROR_CREATE = 'ADD_ERROR_CREATE';
export const addErrorCreate = () => ({
  type: ADD_ERROR_CREATE,
});

export const FETCH_FAV = 'FETCH_FAV';
export const fetchFav = () => ({
  type: FETCH_FAV,
});

export const SAVE_TEAM = 'SAV_TEAM';
export const saveTeam = () => ({
  type: SAVE_TEAM,
});

export const CLEAR_LOG = 'CLEAR_LOG';
export const clearLog = () => ({
  type: CLEAR_LOG,
});
