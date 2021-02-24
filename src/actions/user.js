export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = () => ({
  type: LOGIN_USER,
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logout = () => ({
  type: LOGOUT_USER,
});

export const MEMORIZE_USER = 'MEMORIZE_USER';
export const memorizeUser = (pseudo) => ({
  type: MEMORIZE_USER,
  pseudo,
});

export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const changeLoginInput = (newValue, key) => ({
  type: CHANGE_LOGIN_INPUT,
  newValue,
  key,
});

export const CREATE_USER = 'CREATE_USER';
export const createUser = () => ({
  type: CREATE_USER,
});

export const CHANGE_CREATE_INPUT = 'CHANGE_CREATE_INPUT';
export const changeCreateInput = (newValue, key) => ({
  type: CHANGE_CREATE_INPUT,
  newValue,
  key,
});

export const GET_USER = 'GET_USER';
export const getUser = () => ({
  type: GET_USER,
});

export const ADD_ERROR_LOGIN = 'ADD_ERROR_LOGIN';
export const addErrorLogin = () => ({
  type: ADD_ERROR_LOGIN,
});

export const ADD_ERROR_CREATE = 'ADD_ERROR_CREATE';
export const addErrorCreate = () => ({
  type: ADD_ERROR_CREATE,
});
