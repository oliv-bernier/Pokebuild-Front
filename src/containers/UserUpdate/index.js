import { connect } from 'react-redux';
import UserUpdate from '../../components/UserUpdate';

import {
  toggleUpdate,
  toggleDelete,
} from '../../actions/boolean';

import {
  changeInput,
  updateUser,
  deleteUser,
  addError,
  logout,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  isDrawer: state.boolean.isDrawer,
  isDelete: state.boolean.isConfirmDelete,
  email: state.user.email,
  password: state.user.password,
  passwordUpdate: state.user.passwordUpdate,
  passwordConfirm: state.user.passwordConfirm,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  toggleUpdate: () => {
    dispatch(toggleUpdate());
  },
  toggleDelete: () => {
    dispatch(toggleDelete());
  },
  changeInput: (newValue, key) => {
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
  addError: (error) => {
    dispatch(addError(error));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
