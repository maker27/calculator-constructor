import { connect } from 'react-redux';
import { TRootState } from '../reducers';
import App from '../components/App';
import { setItems } from '../actions';

const mapState = ({ construction: { items, mode } }: TRootState) => ({
    items,
    mode
});

const mapDispatch = {
    setItems
};

export default connect(mapState, mapDispatch)(App);
