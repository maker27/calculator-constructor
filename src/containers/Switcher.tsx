import { connect } from 'react-redux';
import { TRootState } from '../reducers';
import { toggleMode } from '../actions';
import Switcher from '../components/Switcher';

const mapState = ({ construction: { mode } }: TRootState) => ({
    mode
});

const mapDispatch = {
    toggleMode
};

export default connect(mapState, mapDispatch)(Switcher);
