import { connect } from 'react-redux';
import UserUpdate from '../../components/UserUpdate';

import { toggleUpdate } from '../../actions/boolean';
import { changeInput, updateUser, addError } from '../../actions/user';

const mapStateToProps = (state) => ({
  isDrawer: state.boolean.isDrawer,
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
  changeInput: (newValue, key) => {
    dispatch(changeInput(newValue, key));
  },
  updateUser: () => {
    dispatch(updateUser());
  },
  addError: (error) => {
    dispatch(addError(error));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
