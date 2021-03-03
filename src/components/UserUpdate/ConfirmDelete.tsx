import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoginField from '../LoginForm/LoginField';

const ConfirmDelete = ({
  password,
  error,
  isConfirm,
  changeInput,
  toggleConfirm,
  toggleDelete,
  deleteUser,
}: {
  password: string,
  error: string,
  isConfirm: boolean,
  changeInput: Function,
  toggleConfirm: Function,
  toggleDelete: Function,
  deleteUser: Function,
}) => (
  <div className="favorites-confirm-delete">
    <div className="favorites-confirm-delete-content">
      <p className="favorites-confirm-delete-content-answer">Êtes vous-sûr de supprimer votre compte ?</p>
      <div className="favorites-confirm-delete-content-buttons">
        {!isConfirm && (
          <div>
            <button type="button" className="favorites-content-team-infos-button" onClick={() => toggleConfirm()}>Oui</button>
            <button type="button" className="favorites-content-team-infos-button" onClick={() => toggleDelete()}>Non</button>
          </div>
        )}
        {isConfirm && (
          <div className="confirmation">
            <p className="confirmation-answer">Merci de saisir ton e-mail pour confirmer la suppression</p>
            <form className="confirmation">
              <LoginField
                name="password"
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={changeInput}
              />
              <button
                type="button"
                className="favorites-content-team-infos-button"
                onSubmit={() => deleteUser()}
              >
                Confirmer la suppression de mon compte
              </button>
            </form>
            <button
              type="button"
              className="favorites-content-team-infos-button"
              onClick={() => toggleDelete()}
            >
              Non je le garde !
            </button>
            <p className={
              classNames('login-error confirmation-error',
                { 'login-error_displayed': error !== '' },
                { 'confirmation-error_displayed': error !== '' })
              }
            >
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);

ConfirmDelete.propTypes = {
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isConfirm: PropTypes.bool.isRequired,
  changeInput: PropTypes.func.isRequired,
  toggleConfirm: PropTypes.func.isRequired,
  toggleDelete: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default ConfirmDelete;
