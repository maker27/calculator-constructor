import { connect } from 'react-redux';
import { TRootState } from '../reducers';
import { changeDisplay, operationAction, removeItem } from '../actions';
import Calculator from '../components/Calculator';

const mapState = ({ construction: { items, mode } }: TRootState) => ({
    items,
    mode
});

const mapDispatch = {
    removeItem,
    operationAction,
    changeDisplay
};

export default connect(mapState, mapDispatch)(Calculator);
