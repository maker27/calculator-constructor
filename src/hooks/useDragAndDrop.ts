import { useCallback } from 'react';
import { TOnDragEndResult } from '../components/DragAndDrop';
import { CALCULATOR_DROPPABLE_ID } from '../assets/constants';
import { TBoxType } from '../assets/boxes';

type TDragEnd = (result: TOnDragEndResult) => void;

export default function useDragAndDrop(items: TBoxType[], setItems: (items: TBoxType[]) => void): TDragEnd {
    const onDragEnd: TDragEnd = useCallback(
        result => {
            const { destination, source, draggableId } = result;
            if (!destination || !source || destination.droppableId !== CALCULATOR_DROPPABLE_ID) return;

            const boxType = draggableId as TBoxType;
            const isMovingInCanvas = source.droppableId === CALCULATOR_DROPPABLE_ID;
            if (!items.includes(boxType) || isMovingInCanvas) {
                const newItems = [...items];
                if (isMovingInCanvas) newItems.splice(source.index, 1);
                newItems.splice(destination.index, 0, boxType);

                const displayItem = 'display';
                const displayPosition = newItems.indexOf(displayItem);
                if (displayPosition > 0) {
                    newItems.splice(displayPosition, 1);
                    newItems.unshift(displayItem);
                }

                setItems(newItems);
            }
        },
        [items, setItems]
    );

    return onDragEnd;
}
