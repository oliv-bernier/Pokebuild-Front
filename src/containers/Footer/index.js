import { connect } from 'react-redux';
import Footer from '../../components/Footer';

import { closeDrawer } from '../../actions/boolean';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  closeDrawer: () => {
    dispatch(closeDrawer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
