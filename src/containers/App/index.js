import { connect } from 'react-redux';
import App from '../../components/App/index.tsx';

import { toggleDetails } from '../../actions/boolean';

const mapStateToProps = (state) => ({
  isDetails: state.boolean.isDetails,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
