import * as types from '../actions/ActionTypes';
import { TBoxType } from '../assets/boxes';
import { Mode, TReducer } from '../assets/types';
import { AnyAction } from 'redux';

interface IConstructionState {
    items: TBoxType[];
    mode: Mode;
}

export const initialState: IConstructionState = {
    items: [],
    mode: Mode.constructor
};

export const constructionReducer: TReducer<IConstructionState, AnyAction> = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case types.TOGGLE_MODE:
            return {
                ...state,
                mode: payload
            };

        case types.SET_ITEMS:
            return {
                ...state,
                items: payload
            };

        case types.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item !== payload)
            };

        default:
            return state;
    }
};
