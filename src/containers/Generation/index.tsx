import { connect } from 'react-redux';
import Generation from '../../components/Generation';

import { setGenValue } from '../../actions/pokemon';

const mapStateToProps = (state: any) => null;

const mapDispatchToProps = (dispatch: Function) => ({
  setGenValue: (value: number) => {
    dispatch(setGenValue(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Generation);
