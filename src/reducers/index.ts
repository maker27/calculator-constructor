import { combineReducers } from 'redux';

import { calculatorReducer } from './calculator-reducer';
import { constructionReducer } from './construction-reducer';

const reducer = combineReducers({
    calculator: calculatorReducer,
    construction: constructionReducer
});

export type TRootState = ReturnType<typeof reducer>;

export default reducer;
