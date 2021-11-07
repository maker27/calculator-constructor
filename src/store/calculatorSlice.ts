import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICalculatorState {
    lastNumber: number;
}

export const initialState: ICalculatorState = {
    lastNumber: 0
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {}
});

export const {} = calculatorSlice.actions;

export default calculatorSlice.reducer;
