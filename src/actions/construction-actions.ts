import * as types from './ActionTypes';
import { TBoxType } from '../assets/boxes';
import { Mode } from '../assets/types';
import { actionCreator } from './helpers';

export const toggleMode = actionCreator<Mode>(types.TOGGLE_MODE);
export const setItems = actionCreator<TBoxType[]>(types.SET_ITEMS);
export const removeItem = actionCreator<TBoxType>(types.REMOVE_ITEM);
