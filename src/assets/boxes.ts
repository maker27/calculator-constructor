import DisplayBox from '../containers/DisplayBox';
import { OperationsBox } from '../components/ButtonBox/OperationsBox';
import { DigitsBox } from '../components/ButtonBox/DigitsBox';
import { ResultBox } from '../components/ButtonBox/ResultBox';

const boxes = {
    display: DisplayBox,
    operations: OperationsBox,
    digits: DigitsBox,
    result: ResultBox
};

export type TBoxType = keyof typeof boxes;

export default boxes;
