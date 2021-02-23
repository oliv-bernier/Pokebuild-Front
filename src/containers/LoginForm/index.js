import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';

import { createUser, changeLoginInput, changeCreateInput } from '../../actions/user';

const mapStateToProps = (state) => ({
  username: state.user.username,
  pseudo: state.user.pseudo,
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  isLogged: state.boolean.isLogged,
  isDrawer: state.boolean.isDrawer,
  isCreate: state.boolean.isCreate,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (username, email, password) => {
    dispatch(createUser(username, email, password));
  },
  changeField: (newValue, key) => {
    dispatch(changeLoginInput(newValue, key));
  },
  changeCreate: (newValue, key) => {
    dispatch(changeCreateInput(newValue, key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
