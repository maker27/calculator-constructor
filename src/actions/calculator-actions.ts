import * as types from './ActionTypes';
import { actionCreator } from './helpers';
import { TOperation } from '../assets/types';

export const changeDisplay = actionCreator<string>(types.CHANGE_DISPLAY);
export const operationAction = actionCreator<TOperation>(types.OPERATION_ACTION);
