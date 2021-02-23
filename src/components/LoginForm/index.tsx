import React from 'react';
import PropTypes from 'prop-types';

import LoginField from './LoginField';

const LoginForm = ({
  username,
  pseudo,
  email,
  password,
  passwordConfirm,
  isLogged,
  isCreate,
  changeField,
  createUser,
  changeCreate,
}: {
  username: string,
  pseudo: string,
  email: string,
  password: string,
  passwordConfirm: string,
  isLogged: boolean,
  isCreate: boolean,
  changeField: Function,
  createUser: Function,
  changeCreate: Function,
}) => {
  const handleSend = (evt) => {
    evt.preventDefault();
    createUser(username, email, password);
  };

  return (
    <div className="login">
      {!isCreate && (
        <form className="login-form">
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
        </form>
      )}
      {isCreate && (
        <form className="login-form">
          <LoginField
            name="username"
            type="text"
            placeholder="Votre nom"
            value={username}
            onChange={changeCreate}
          />
          <LoginField
            name="email"
            type="email"
            placeholder="Votre email"
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
            name="password-confirm"
            type="password"
            placeholder="Confirmer votre mot de passe"
            value={passwordConfirm}
            onChange={changeCreate}
          />
          <button
            className="login-form-new-button"
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
  isCreate: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  changeCreate: PropTypes.func.isRequired,
};

export default LoginForm;
