import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';

import {
  createUser,
  changeLoginInput,
  changeCreateInput,
  loginUser,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  isDrawer: state.boolean.isDrawer,
  isCreate: state.boolean.isCreate,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
