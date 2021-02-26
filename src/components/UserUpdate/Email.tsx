import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoginField from '../LoginForm/LoginField';

const Email = ({
  email,
  password,
  error,
  handleClose,
  handleSendMail,
  changeInput,
  setIsEmail,
}: {
  email: string,
  password: string,
  error: string,
  handleClose: Function,
  handleSendMail: Function,
  changeInput: Function,
  setIsEmail: Function,
}) => (
  <form className="update-form">
    <button
      type="button"
      className="update-close return"
      onClick={() => setIsEmail()}
    >
      {'<'}
    </button>
    <h2 className="update-form-title">Modification de mon adresse E-mail</h2>
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
    <button
      className="login-form-button"
      type="submit"
      onClick={() => handleSendMail()}
    >
      Envoyer
    </button>
    <p className={classNames('login-error', { 'login-error_displayed': error !== '' })}>{error}</p>
  </form>
);

Email.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSendMail: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  setIsEmail: PropTypes.func.isRequired,
};

export default Email;
