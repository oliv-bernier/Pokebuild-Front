import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';

import {
  createUser,
  changeInput,
  loginUser,
  addErrorLogin,
  addErrorCreate,
  addError,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  error: state.user.error,
  isDrawer: state.boolean.isDrawer,
  isCreate: state.boolean.isCreate,
  isLogged: state.boolean.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: () => {
    dispatch(createUser());
  },
  changeField: (newValue, key) => {
    dispatch(changeInput(newValue, key));
  },
  loginUser: () => {
    dispatch(loginUser());
  },
  addErrorLogin: () => {
    dispatch(addErrorLogin());
  },
  addErrorCreate: () => {
    dispatch(addErrorCreate());
  },
  addError: (error) => {
    dispatch(addError(error));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
