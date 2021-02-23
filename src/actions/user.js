export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = () => ({
  type: LOGIN_USER,
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logout = () => ({
  type: LOGOUT_USER,
});

export const MEMORYSE_USER = 'MEMORYZE_USER';
export const memoryseUser = (pseudo) => ({
  type: MEMORYSE_USER,
  pseudo,
});

export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const changeLoginInput = (newValue, key) => ({
  type: CHANGE_LOGIN_INPUT,
  newValue,
  key,
});

export const CREATE_USER = 'CREATE_USER';
export const createUser = (username, email, password) => ({
  type: CREATE_USER,
  username,
  email,
  password,
});

export const CHANGE_CREATE_INPUT = 'CHANGE_CREATE_INPUT';
export const changeCreateInput = (newValue, key) => ({
  type: CHANGE_CREATE_INPUT,
  newValue,
  key,
});
