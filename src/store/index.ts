import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';
import constructionReducer from './constructionSlice';

export const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
        construction: constructionReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
