import { connect } from 'react-redux';
import Pokestat from '../../components/Pokestat/index.tsx';

import { toggleDetails } from '../../actions/boolean';

const mapStateToProp = () => ({});

const mapDispatchToProps = (dispatch) => ({
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(Pokestat);
