import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBoxType } from '../assets/boxes';

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
