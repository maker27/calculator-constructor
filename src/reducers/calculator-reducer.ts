import * as types from '../actions/ActionTypes';
import { TOperation, TReducer } from '../assets/types';
import { dot, operations } from '../assets/constants';
import { AnyAction } from 'redux';

export interface ICalculatorState {
    lastNumber: number;
    action: TOperation | null;
    lastAction: boolean;
    display: string;
    readonly displayMaxLength: number;
}

export const initialState: ICalculatorState = {
    lastNumber: 0,
    action: null,
    lastAction: false,
    display: '0',
    displayMaxLength: 10
};

export const calculatorReducer: TReducer<ICalculatorState, AnyAction> = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case types.CHANGE_DISPLAY: {
            const { display, lastAction } = state;
            let value = payload;
            const isComma = value === ',';
            if (isComma && display.includes(dot)) return state;
            if (isComma) value = dot;
            let newDisplay = (display === '0' && !isComma) || lastAction ? value : display + value;
            if (state.display.startsWith(dot)) newDisplay = '0' + state.display;
            return {
                ...state,
                display: newDisplay,
                lastAction: false
            };
        }

        case types.OPERATION_ACTION: {
            const { action: prevAction, lastNumber, lastAction } = state;
            let { display } = state;
            if (prevAction && !lastAction) {
                const prevActionFunction = operations[prevAction];
                if (prevActionFunction) {
                    const result = prevActionFunction(lastNumber, +display);
                    display = isNaN(result) ? 'ERROR' : result.toString();
                }
            }
            return {
                ...state,
                lastNumber: +display || 0,
                display,
                action: payload,
                lastAction: true
            };
        }

        default:
            return state;
    }
};
