import { store } from '../src/store';
import constructionReducer, {
    initialState,
    removeItem,
    setItems,
    toggleMode
} from '../src/store/constructionSlice';
import { TBoxType } from '../src/assets/boxes';

describe('constructorReducer', () => {
    const boxes: TBoxType[] = ['display', 'operations', 'digits', 'result'];

    test('returns initial state', () => {
        const updatedState = constructionReducer(undefined, { type: 'nothing' });
        expect(updatedState).toEqual(initialState);
    });

    test('toggle mode to runtime', () => {
        const updatedState = constructionReducer(initialState, toggleMode(false));
        expect(updatedState).toEqual({
            ...initialState,
            mode: false
        });
    });

    test('add box to calculator', () => {
        const testBoxes = [boxes[1], boxes[2]];
        const updatedState = constructionReducer({ ...initialState, items: [boxes[0]] }, setItems(testBoxes));
        expect(updatedState).toEqual({ ...initialState, items: testBoxes });
    });

    test('remove box from calculator', () => {
        const updatedState = constructionReducer(
            { ...initialState, items: [...boxes] },
            removeItem(boxes[0])
        );
        expect(updatedState).toEqual({
            ...initialState,
            items: boxes.slice(1)
        });
    });

    test('check default construction mode and empty boxes', () => {
        const state = store.getState().construction;
        expect(state.items).toEqual([]);
        expect(state.mode).toBeTruthy();
    });
});
