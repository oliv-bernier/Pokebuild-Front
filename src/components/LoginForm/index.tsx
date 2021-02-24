import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoginField from './LoginField';

import './style.scss';

const LoginForm = ({
  username,
  email,
  password,
  passwordConfirm,
  error,
  isDrawer,
  isCreate,
  isLogged,
  changeField,
  createUser,
  changeCreate,
  toggleLogin,
  loginUser,
  addError,
}: {
  username: string,
  email: string,
  password: string,
  passwordConfirm: string,
  error: string,
  isDrawer: boolean,
  isCreate: boolean,
  isLogged: boolean,
  changeField: Function,
  createUser: Function,
  changeCreate: Function,
  toggleLogin: Function,
  loginUser: Function,
  addError: Function,
}) => {
  const handleSend = (evt: any): void => {
    evt.preventDefault();
    createUser();
  };

  const handleLogin = (evt: any): void => {
    evt.preventDefault();
    if (username === '' || password === '') {
      addError();
    }
    else {
      loginUser();
    }
  };

  const [isAnimation, setIsAnimation] = useState(false);

  const handleClose = () => {
    setIsAnimation(true);
    setTimeout(() => {
      toggleLogin();
    }, 250);
  };

  useEffect(() => {
    if (isLogged) {
      handleClose();
    }
  }, [isLogged]);

  return (
    <div className={classNames('login', { 'login_drawer-open': isDrawer }, { 'login--animation': isAnimation })}>
      <p className="login-error">{error}</p>
      {!isCreate && (
        <form className="login-form">
          <button type="button" className="login-form-close" onClick={handleClose}>X</button>
          <LoginField
            name="username"
            type="text"
            placeholder="Nom de dresseur"
            value={username}
            onChange={changeField}
          />
          <LoginField
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={changeField}
          />
          <button
            className="login-form-button"
            type="submit"
            onClick={handleLogin}
          >
            Envoyer
          </button>
        </form>
      )}
      {isCreate && (
        <form className="login-form">
          <button type="button" className="login-form-close" onClick={handleClose}>X</button>
          <LoginField
            name="username"
            type="text"
            placeholder="Nom de dresseur"
            value={username}
            onChange={changeCreate}
          />
          <LoginField
            name="email"
            type="email"
            placeholder="Addresse email"
            value={email}
            onChange={changeCreate}
          />
          <LoginField
            name="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={changeCreate}
          />
          <LoginField
            name="passwordConfirm"
            type="password"
            placeholder="Confirmer votre mot de passe"
            value={passwordConfirm}
            onChange={changeCreate}
          />
          <button
            className="login-form-button"
            type="submit"
            onClick={handleSend}
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isDrawer: PropTypes.bool.isRequired,
  isCreate: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  changeCreate: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
};

export default LoginForm;
