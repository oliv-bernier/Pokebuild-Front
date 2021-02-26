import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoginField from '../LoginForm/LoginField';

const Total = ({
  email,
  password,
  passwordUpdate,
  passwordConfirm,
  error,
  handleClose,
  handleSend,
  changeInput,
  setIsEmail,
  setIsPassword,
}: {
  email: string,
  password: string,
  passwordUpdate: string,
  passwordConfirm: string,
  error: string,
  handleClose: Function,
  handleSend: Function,
  changeInput: Function,
  setIsEmail: Function,
  setIsPassword: Function,
}) => (
  <form className="update-form">
    <button
      type="button"
      className="update-close return"
      onClick={() => {
        setIsEmail();
        setIsPassword();
      }}
    >
      {'<'}
    </button>
    <button
      type="button"
      className="update-close"
      onClick={() => handleClose()}
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
      onClick={() => handleSend()}
    >
      Envoyer
    </button>
    <p className={classNames('login-error', { 'login-error_displayed': error !== '' })}>{error}</p>
  </form>
);

Total.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordUpdate: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  setIsEmail: PropTypes.func.isRequired,
  setIsPassword: PropTypes.func.isRequired,
};

export default Total;
