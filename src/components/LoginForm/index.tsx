import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoginField from './LoginField';

import './style.scss';

const LoginForm = ({
  username,
  pseudo,
  email,
  password,
  passwordConfirm,
  isLogged,
  isDrawer,
  isCreate,
  changeField,
  createUser,
  changeCreate,
  toggleLogin,
  loginUser,
  toggleLogged,
}: {
  username: string,
  pseudo: string,
  email: string,
  password: string,
  passwordConfirm: string,
  isLogged: boolean,
  isDrawer: boolean,
  isCreate: boolean,
  changeField: Function,
  createUser: Function,
  changeCreate: Function,
  toggleLogin: Function,
  loginUser: Function,
  toggleLogged: Function,
}) => {
  const handleSend = (evt: any): void => {
    evt.preventDefault();
    createUser(username, email, password);
  };

  const handleLogin = (evt: any): void => {
    evt.preventDefault();
    loginUser();
    toggleLogin();
    toggleLogged();
  };

  const [isAnimation, setIsAnimation] = useState(false);

  const handleClose = () => {
    setIsAnimation(true);
    setTimeout(() => {
      toggleLogin();
    }, 250);
  };

  return (
    <div className={classNames('login', { 'login_drawer-open': isDrawer }, { 'login--animation': isAnimation })}>
      {!isCreate && (
        <form className="login-form">
          <button type="button" className="login-form-close" onClick={handleClose}>X</button>
          <LoginField
            name="username"
            type="text"
            placeholder="Nom d'utilisateur"
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
            placeholder="Nom d'utilisateur"
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
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isDrawer: PropTypes.bool.isRequired,
  isCreate: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  changeCreate: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  toggleLogged: PropTypes.func.isRequired,
};

export default LoginForm;
