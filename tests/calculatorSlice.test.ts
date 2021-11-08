import calculatorReducer, {
    initialState,
    changeDisplay,
    operationAction
} from '../src/store/calculatorSlice';
import { dot, operations } from '../src/assets/constants';
import { TOperation } from '../src/assets/types';

describe('calculatorReducer', () => {
    const testDigit = '8';

    test('returns initial state', () => {
        const updatedState = calculatorReducer(undefined, { type: 'nothing' });
        expect(updatedState).toEqual(initialState);
    });

    test('press button comma', () => {
        const updatedState = calculatorReducer(initialState, changeDisplay(','));
        expect(updatedState).toEqual({
            ...initialState,
            display: '0' + dot
        });
    });

    test('enter digit after digit', () => {
        const operationValues = Object.keys(operations) as TOperation[];
        const displayStartValue = '23';
        const updatedState = calculatorReducer(
            { ...initialState, action: operationValues[2], lastAction: false, display: displayStartValue },
            changeDisplay(testDigit)
        );
        expect(updatedState).toEqual({
            ...initialState,
            action: operationValues[2],
            lastAction: false,
            display: displayStartValue + testDigit
        });
    });

    test('enter digit after operation', () => {
        const operationValues = Object.keys(operations) as TOperation[];
        const updatedState = calculatorReducer(
            { ...initialState, action: operationValues[2], lastAction: true },
            changeDisplay(testDigit)
        );
        expect(updatedState).toEqual({
            ...initialState,
            action: operationValues[2],
            lastAction: false,
            display: testDigit
        });
    });

    test('addition operation', () => {
        const startValue = 12;
        const resultValue = 20;
        const updatedState = calculatorReducer(
            { ...initialState, lastNumber: startValue, action: '+', lastAction: false, display: testDigit },
            operationAction('=')
        );
        expect(updatedState).toEqual({
            ...initialState,
            lastNumber: resultValue,
            action: '=',
            lastAction: true,
            display: resultValue.toString()
        });
    });
});
