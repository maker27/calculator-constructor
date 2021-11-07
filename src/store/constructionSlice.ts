import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBoxType } from '../boxes';

interface IConstructionState {
    items: TBoxType[];
    mode: boolean;
}

const initialState: IConstructionState = {
    items: [],
    mode: true
};

export const constructionSlice = createSlice({
    name: 'construction',
    initialState,
    reducers: {
        toggleMode: (state, action: PayloadAction<boolean>) => {
            state.mode = action.payload;
        },
        addItem: (state, action: PayloadAction<TBoxType>) => {
            const addedItem = action.payload;
            if (!state.items.includes(addedItem)) state.items.push(addedItem);
        },
        removeItem: (state, action: PayloadAction<TBoxType>) => {
            const removedItem = action.payload;
            const removedItemIndex = state.items.indexOf(removedItem);
            state.items.splice(removedItemIndex, 1);
        }
    }
});

export const { toggleMode, addItem, removeItem } = constructionSlice.actions;

export default constructionSlice.reducer;
