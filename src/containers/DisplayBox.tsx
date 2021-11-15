import { connect } from 'react-redux';
import { TRootState } from '../reducers';
import DisplayBox, { IDisplayBoxProps } from '../components/ButtonBox/DisplayBox';

const mapState = ({ calculator: { display, displayMaxLength } }: TRootState): IDisplayBoxProps => ({
    display,
    displayMaxLength
});

export default connect(mapState)(DisplayBox);
