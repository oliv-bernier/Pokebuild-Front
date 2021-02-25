import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoginField from '../LoginForm/LoginField';

import './style.scss';

const UserUpdate = ({
  email,
  password,
  passwordUpdate,
  passwordConfirm,
  error,
  toggleUpdate,
  changeInput,
  updateUser,
  addError,
  isDrawer,
}: {
  email: string,
  password: string,
  passwordUpdate: string,
  passwordConfirm: string,
  error: string,
  toggleUpdate: Function,
  changeInput: Function,
  updateUser: Function,
  addError: Function,
  isDrawer: boolean,
}) => {
  const [isAnimation, setIsAnimation] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const handleClose = () => {
    setIsAnimation(true);
    setTimeout(() => {
      toggleUpdate();
    }, 250);
  };

  const handleSend = (evt: any): void => {
    evt.preventDefault();
    if (passwordUpdate === '' || password === '' || email === '' || passwordConfirm === '') {
      addError('Au moins un champ est manquant, merci de bien tous les remplir');
    }
    else if (password !== passwordConfirm) {
      addError('Les mots de passe ne sont pas identiques');
    }
    else {
      updateUser();
    }
  };

  const handleSendMail = (evt: any): void => {
    evt.preventDefault();
    if (email === '' || password === '') {
      addError('Au moins un champ est manquant, merci de bien tous les remplir');
    }
    else {
      updateUser();
    }
  };

  const handleSendPassword = (evt: any): void => {
    evt.preventDefault();
    if (passwordUpdate === '' || password === '' || passwordConfirm === '') {
      addError('Au moins un champ est manquant, merci de bien tous les remplir');
    }
    else if (password.length < 8) {
      addError('Le mot de passe saisi ne contient pas 8 caractères');
    }
    else if (passwordUpdate !== passwordConfirm) {
      addError('Les mots de passe ne sont pas identiques');
    }
    else {
      updateUser();
    }
  };

  return (
    <div className={classNames('update', { 'update_drawer-open': isDrawer }, { 'update--animation': isAnimation })}>
      {!isEmail && !isPassword && (
      <div className="update-form">
        <button
          type="button"
          className="update-close"
          onClick={handleClose}
        >
          X
        </button>
        <h2 className="update-form-title">Modification de mes données de dresseur</h2>
        <button
          className="login-form-button"
          type="button"
          onClick={() => {
            setIsPassword(true);
          }}
        >
          Modifier mon mot de passe
        </button>
        <button
          className="login-form-button"
          type="button"
          onClick={() => {
            setIsEmail(true);
          }}
        >
          Modifier mon adresse E-mail
        </button>
        <button
          className="login-form-button"
          type="button"
          onClick={() => {
            setIsEmail(true);
            setIsPassword(true);
          }}
        >
          Modifier E-mail et mot de passe
        </button>
      </div>
      )}
      {isEmail && !isPassword && (
        <form action="" className="update-form">
          <h2 className="update-form-title">Modification de mon adresse E-mail</h2>
          <button
            type="button"
            className="update-close"
            onClick={handleClose}
          >
            X
          </button>
          <LoginField
            name="password"
            type="password"
            placeholder="Votre mot de passe actuel"
            value={password}
            onChange={changeInput}
          />
          <LoginField
            name="email"
            type="email"
            placeholder="Nouvelle Email"
            value={email}
            onChange={changeInput}
          />
          <button
            className="login-form-button"
            type="submit"
            onClick={handleSendMail}
          >
            Envoyer
          </button>
          <p className={classNames('login-error', { 'login-error_displayed': error !== '' })}>{error}</p>
        </form>
      )}
      {isPassword && !isEmail && (
        <form action="" className="update-form">
          <h2 className="update-form-title">Modification de mon mot de passe</h2>
          <button
            type="button"
            className="update-close"
            onClick={handleClose}
          >
            X
          </button>
          <LoginField
            name="password"
            type="password"
            placeholder="Votre mot de passe actuel"
            value={password}
            onChange={changeInput}
          />
          <LoginField
            name="passwordUpdate"
            type="password"
            placeholder="Nouveau mot de passe"
            value={passwordUpdate}
            onChange={changeInput}
          />
          <LoginField
            name="passwordConfirm"
            type="password"
            placeholder="Confirmer mot de passe"
            value={passwordConfirm}
            onChange={changeInput}
          />
          <aside className="update_aside">
            (le mot de passe doit contenir 8 caractères dont 1 majuscule,
            1 minuscule, un chiffre et un caractère spéciale)
          </aside>
          <button
            className="login-form-button"
            type="submit"
            onClick={handleSendPassword}
          >
            Envoyer
          </button>
          <p className={classNames('login-error', { 'login-error_displayed': error !== '' })}>{error}</p>
        </form>
      )}
      {(isEmail && isPassword) && (
      <form action="" className="update-form">
        <button
          type="button"
          className="update-close"
          onClick={handleClose}
        >
          X
        </button>
        <LoginField
          name="password"
          type="password"
          placeholder="Votre mot de passe actuel"
          value={password}
          onChange={changeInput}
        />
        <LoginField
          name="email"
          type="email"
          placeholder="Nouvelle Email"
          value={email}
          onChange={changeInput}
        />
        <LoginField
          name="passwordUpdate"
          type="password"
          placeholder="Nouveau mot de passe"
          value={passwordUpdate}
          onChange={changeInput}
        />
        <LoginField
          name="passwordConfirm"
          type="password"
          placeholder="Confirmer mot de passe"
          value={passwordConfirm}
          onChange={changeInput}
        />
        <aside className="update_aside">
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

UserUpdate.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordUpdate: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  toggleUpdate: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
  isDrawer: PropTypes.bool.isRequired,
};

export default UserUpdate;
