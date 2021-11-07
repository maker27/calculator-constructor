import { DigitsBox, DisplayBox, OperationsBox, ResultBox } from './components/ButtonBox';

const boxes = {
    display: DisplayBox,
    operations: OperationsBox,
    digits: DigitsBox,
    result: ResultBox
};

export type TBoxType = keyof typeof boxes;

export default boxes;
