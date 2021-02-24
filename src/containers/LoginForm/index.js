import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';

import {
  createUser,
  changeLoginInput,
  changeCreateInput,
  loginUser,
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
    dispatch(changeLoginInput(newValue, key));
  },
  changeCreate: (newValue, key) => {
    dispatch(changeCreateInput(newValue, key));
  },
  loginUser: () => {
    dispatch(loginUser());
  },
  addError: () => {
    dispatch(addError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
