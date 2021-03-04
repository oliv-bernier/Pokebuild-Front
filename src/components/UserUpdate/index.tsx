import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ConfirmDelete from './ConfirmDelete';
import Email from './Email';
import Password from './Password';
import Total from './Total';

import './style.scss';

const UserUpdate = ({
  email,
  password,
  passwordUpdate,
  passwordConfirm,
  error,
  toggleUpdate,
  toggleDelete,
  toggleConfirm,
  changeInput,
  updateUser,
  deleteUser,
  addError,
  isDrawer,
  isDelete,
  isConfirm,
}: {
  email: string,
  password: string,
  passwordUpdate: string,
  passwordConfirm: string,
  error: string,
  toggleUpdate: Function,
  toggleDelete: Function,
  toggleConfirm: Function,
  changeInput: Function,
  updateUser: Function,
  deleteUser: Function,
  addError: Function,
  isDrawer: boolean,
  isDelete: boolean,
  isConfirm: boolean,
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
        <button
          className="login-form-button"
          type="button"
          onClick={() => {
            toggleDelete();
          }}
        >
          Supprimer mon compte
        </button>
      </div>
      )}
      {isEmail && !isPassword && (
        <Email
          email={email}
          password={password}
          error={error}
          handleClose={handleClose}
          addError={addError}
          updateUser={updateUser}
          changeInput={changeInput}
          setIsEmail={setIsEmail}
        />
      )}
      {isPassword && !isEmail && (
        <Password
          password={password}
          passwordUpdate={passwordUpdate}
          passwordConfirm={passwordConfirm}
          error={error}
          handleClose={handleClose}
          addError={addError}
          updateUser={updateUser}
          changeInput={changeInput}
          setIsPassword={setIsPassword}
        />
      )}
      {(isEmail && isPassword) && (
        <Total
          email={email}
          password={password}
          passwordUpdate={passwordUpdate}
          passwordConfirm={passwordConfirm}
          error={error}
          handleClose={handleClose}
          addError={addError}
          updateUser={updateUser}
          changeInput={changeInput}
          setIsEmail={setIsEmail}
          setIsPassword={setIsPassword}
        />
      )}
      {isDelete && (
        <ConfirmDelete
          password={password}
          error={error}
          isConfirm={isConfirm}
          changeInput={changeInput}
          toggleConfirm={toggleConfirm}
          toggleDelete={toggleDelete}
          deleteUser={deleteUser}
          handleClose={handleClose}
        />
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
  toggleDelete: PropTypes.func.isRequired,
  toggleConfirm: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
  isDrawer: PropTypes.bool.isRequired,
  isDelete: PropTypes.bool.isRequired,
  isConfirm: PropTypes.bool.isRequired,
};

export default UserUpdate;
