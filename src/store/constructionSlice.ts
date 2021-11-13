import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBoxType } from '../assets/boxes';
import { Mode } from '../assets/types';

interface IConstructionState {
    items: TBoxType[];
    mode: Mode;
}

export const initialState: IConstructionState = {
    items: [],
    mode: Mode.constructor
};

export const constructionSlice = createSlice({
    name: 'construction',
    initialState,
    reducers: {
        toggleMode: (state, action: PayloadAction<Mode>) => {
            state.mode = action.payload;
        },
        setItems: (state, action: PayloadAction<TBoxType[]>) => {
            state.items = action.payload;
        },
        removeItem: (state, action: PayloadAction<TBoxType>) => {
            const removedItem = action.payload;
            const removedItemIndex = state.items.indexOf(removedItem);
            state.items.splice(removedItemIndex, 1);
        }
    }
});

export const { toggleMode, setItems, removeItem } = constructionSlice.actions;

export default constructionSlice.reducer;
