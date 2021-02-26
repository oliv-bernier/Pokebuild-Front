import { connect } from 'react-redux';
import UserUpdate from '../../components/UserUpdate';

import {
  toggleUpdate,
  toggleDelete,
  toggleDeletePass,
} from '../../actions/boolean';

import {
  changeInput,
  updateUser,
  deleteUser,
  addError,
  logout,
} from '../../actions/user';

const mapStateToProps = (state: any) => ({
  isDrawer: state.boolean.isDrawer,
  isDelete: state.boolean.isDelete,
  isConfirm: state.boolean.isDeletePassword,
  email: state.user.email,
  password: state.user.password,
  passwordUpdate: state.user.passwordUpdate,
  passwordConfirm: state.user.passwordConfirm,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleUpdate: () => {
    dispatch(toggleUpdate());
  },
  toggleDelete: () => {
    dispatch(toggleDelete());
  },
  toggleConfirm: () => {
    dispatch(toggleDeletePass());
  },
  changeInput: (newValue: string, key: string) => {
    dispatch(changeInput(newValue, key));
  },
  updateUser: () => {
    dispatch(updateUser());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  },
  logout: () => {
    dispatch(logout());
  },
  addError: (error: string) => {
    dispatch(addError(error));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
