import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoginField from '../LoginForm/LoginField';

const Password = ({
  password,
  passwordUpdate,
  passwordConfirm,
  error,
  handleClose,
  handleSendPassword,
  changeInput,
}: {
  password: string,
  passwordUpdate: string,
  passwordConfirm: string,
  error: string,
  handleClose: Function,
  handleSendPassword: Function,
  changeInput: Function,
}) => (
  <form className="update-form">
    <h2 className="update-form-title">Modification de mon mot de passe</h2>
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
      onClick={() => handleSendPassword()}
    >
      Envoyer
    </button>
    <p className={classNames('login-error', { 'login-error_displayed': error !== '' })}>{error}</p>
  </form>
);

Password.propTypes = {
  password: PropTypes.string.isRequired,
  passwordUpdate: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSendPassword: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
};

export default Password;