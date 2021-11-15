import React from 'react';
import './Calculator.scss';
import boxes, { TBoxType } from '../../assets/boxes';
import { CALCULATOR_DROPPABLE_ID, operations } from '../../assets/constants';
import { Mode, TOperation } from '../../assets/types';
import { DraggableWrapper, DroppableWrapper } from '../DragAndDrop';

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
    const isRuntimeMode = mode === Mode.runtime;

    const onClick = ({ target }: React.MouseEvent<HTMLElement>) => {
        if (!isRuntimeMode) return;
        const button = (target as HTMLElement).closest('.button');
        if (button && !button.classList.contains('button-display')) {
            const value = button.textContent;
            if (value) {
                if (value in operations) {
                    operationAction(value as TOperation);
                } else {
                    changeDisplay(value);
                }
            }
        }
    };

    const onDoubleClick = ({ target }: React.MouseEvent<HTMLElement>) => {
        if (isRuntimeMode) return;
        const box = (target as HTMLElement).closest('.button-box');
        if (box) {
            const [, boxType] = box.className.match(/box-(\w+)/) || [];
            removeItem(boxType as TBoxType);
        }
    };

    return (
        <DroppableWrapper
            className="canvas"
            droppableId={CALCULATOR_DROPPABLE_ID}
            isDraggingClassname="canvas_droppable">
            <div
                className="canvas__container"
                data-fulled={isRuntimeMode || items.length === Object.keys(boxes).length}
                onClick={onClick}
                onDoubleClick={onDoubleClick}>
                {items.map((boxType: TBoxType, index: number) => {
                    const Box = boxes[boxType];
                    return (
                        <DraggableWrapper key={boxType} draggableId={boxType} index={index}>
                            <Box />
                        </DraggableWrapper>
                    );
                })}
            </div>
        </DroppableWrapper>
    );
};

export default Calculator;
