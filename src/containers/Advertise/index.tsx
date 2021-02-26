import { connect } from 'react-redux';
import Advertise from '../../components/Advertise';

import { toggleAdvertise } from '../../actions/boolean';

const mapStateToProps = (state: any) => ({
  isAdvertise: state.boolean.isAdvertise,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleAdvertise: () => {
    dispatch(toggleAdvertise());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Advertise);
