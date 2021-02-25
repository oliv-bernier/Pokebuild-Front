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
  toggleLogin: Function,
  loginUser: Function,
  addError: Function,
}) => {
  const handleSend = (evt: any): void => {
    evt.preventDefault();
    if (username === '' || password === '' || email === '' || passwordConfirm === '') {
      addError('Au moins un champ est manquant, merci de bien tous les remplir');
    }
    else if (password !== passwordConfirm) {
      addError('Les mots de passe ne sont pas identiques');
    }
    else {
      createUser();
    }
  };

  const handleLogin = (evt: any): void => {
    evt.preventDefault();
    if (username === '' && password === '') {
      addError('Le nom de dresseur et le mot de passe ne sont pas saisis');
    }
    else if (username === '') {
      addError('Le nom de dresseur n\'est pas saisi');
    }
    else if (password === '') {
      addError('Le mot de passe n\'est pas saisi');
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
          <p className={classNames('login-error', { 'login-error_displayed': error !== '' })}>{error}</p>
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
            onChange={changeField}
          />
          <LoginField
            name="email"
            type="email"
            placeholder="Addresse email"
            value={email}
            onChange={changeField}
          />
          <LoginField
            name="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={changeField}
          />
          <LoginField
            name="passwordConfirm"
            type="password"
            placeholder="Confirmer votre mot de passe"
            value={passwordConfirm}
            onChange={changeField}
          />
          <aside className="login-form_aside">
            (le mot de passe doit contenir 8 caractères dont 1 majuscule,
            1 minuscule, un chiffre et un caractère spéciale)
          </aside>
          <button
            className="login-form-button"
            type="submit"
            onClick={handleSend}
          >
            Envoyer
          </button>
          <p className={classNames('login-error', { 'login-error_displayed': error !== '' })}>{error}</p>
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
  toggleLogin: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
};

export default LoginForm;
