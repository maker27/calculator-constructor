import OperationsBox from '../components/ButtonBox/OperationBox';
import DigitsBox from '../components/ButtonBox/DigitsBox';
import ResultBox from '../components/ButtonBox/ResultBox';
import DisplayBox from '../containers/DisplayBox';

const boxes = {
    display: DisplayBox,
    operations: OperationsBox,
    digits: DigitsBox,
    result: ResultBox
};

export type TBoxType = keyof typeof boxes;

export default boxes;
