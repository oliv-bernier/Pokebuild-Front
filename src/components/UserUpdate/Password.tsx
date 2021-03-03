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
  changeInput,
  setIsPassword,
  addError,
  updateUser,
}: {
  password: string,
  passwordUpdate: string,
  passwordConfirm: string,
  error: string,
  handleClose: Function,
  changeInput: Function,
  setIsPassword: Function,
  addError: Function,
  updateUser: Function,
}) => {
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
    <form className="update-form" onSubmit={handleSendPassword}>
      <button
        type="button"
        className="update-close return"
        onClick={() => setIsPassword()}
      >
        {'<'}
      </button>
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
      >
        Envoyer
      </button>
      <p className={classNames('login-error', { 'login-error_displayed': error !== '' })}>{error}</p>
    </form>
  );
};

Password.propTypes = {
  password: PropTypes.string.isRequired,
  passwordUpdate: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  setIsPassword: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default Password;
