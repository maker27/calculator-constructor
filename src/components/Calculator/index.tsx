import React from 'react';
import './Calculator.scss';
import boxes, { TBoxType } from '../../assets/boxes';
import { CALCULATOR_DROPPABLE_ID } from '../../assets/constants';
import { Mode, TOperation } from '../../assets/types';
import { DraggableWrapper, DroppableWrapper } from '../DragAndDrop';
import useRemoveItem from '../../hooks/useRemoveItem';
import useCalculatorClick from '../../hooks/useCalculatorClick';

interface ICalculatorProps {
    items: TBoxType[];
    mode: Mode;
    removeItem: (item: TBoxType) => void;
    operationAction: (action: TOperation) => void;
    changeDisplay: (display: string) => void;
}

const Calculator: React.FC<ICalculatorProps> = ({
    items,
    mode,
    removeItem,
    operationAction,
    changeDisplay
}) => {
    const onCalculatorClick = useCalculatorClick(mode, operationAction, changeDisplay);
    const onRemoveItem = useRemoveItem(mode, removeItem);

    return (
        <DroppableWrapper
            className="canvas"
            droppableId={CALCULATOR_DROPPABLE_ID}
            isDraggingClassname="canvas_droppable">
            <div
                className="canvas__container"
                data-fulled={mode === Mode.runtime || items.length === Object.keys(boxes).length}
                onClick={onCalculatorClick}
                onDoubleClick={onRemoveItem}>
                {items.map((boxType: TBoxType, index: number) => {
                    const Box = boxes[boxType];
                    return (
                        <DraggableWrapper key={boxType} draggableId={boxType} index={index}>
                            <Box key={boxType} />
                        </DraggableWrapper>
                    );
                })}
            </div>
        </DroppableWrapper>
    );
};

export default Calculator;
