import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dot, operations } from '../assets/constants';
import { TOperation } from '../assets/types';

interface ICalculatorState {
    lastNumber: number;
    action: TOperation | null;
    lastAction: boolean;
    display: string;
    displayMaxLength: number;
}

export const initialState: ICalculatorState = {
    lastNumber: 0,
    action: null,
    lastAction: false,
    display: '0',
    displayMaxLength: 10
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        changeDisplay: (state, action: PayloadAction<string>) => {
            const { display, lastAction } = state;
            let value = action.payload;
            const isComma = value === ',';
            if (isComma && display.includes(dot)) return;
            if (isComma) value = dot;
            state.display = (display === '0' && !isComma) || lastAction ? value : display + value;
            if (state.display.startsWith(dot)) state.display = '0' + state.display;
            state.lastAction = false;
        },
        operationAction: (state, action: PayloadAction<TOperation>) => {
            const { action: prevAction, lastNumber, display, lastAction } = state;
            if (prevAction && !lastAction) {
                const prevActionFunction = operations[prevAction];
                if (prevActionFunction) {
                    const result = prevActionFunction(lastNumber, +display);
                    state.display = isNaN(result) ? 'ERROR' : result.toString();
                }
            }
            state.lastNumber = +state.display || 0;
            state.action = action.payload;
            state.lastAction = true;
        }
    }
});

export const { changeDisplay, operationAction } = calculatorSlice.actions;

export default calculatorSlice.reducer;
