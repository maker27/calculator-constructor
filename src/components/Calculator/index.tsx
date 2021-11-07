import React from 'react';
import './Calculator.scss';
import boxes, { TBoxType } from '../../assets/boxes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { removeItem } from '../../store/constructionSlice';
import { operations } from '../../assets/constants';
import { changeDisplay, operationAction } from '../../store/calculatorSlice';
import { TOperation } from '../../assets/types';

export default function Calculator(): React.ReactElement {
    const { items, mode: constructorMode } = useSelector((state: RootState) => state.construction);
    const dispatch = useDispatch();
    const onRemoveItem = (item: TBoxType) => dispatch(removeItem(item));
    const onOperationAction = (action: TOperation) => dispatch(operationAction(action));
    const onChangeDisplay = (value: string) => dispatch(changeDisplay(value));

    const onClick = ({ target }: React.MouseEvent<HTMLElement>) => {
        if (constructorMode) return;
        const button = (target as HTMLElement).closest('.button');
        if (button && !button.classList.contains('button-display')) {
            const value = button.textContent;
            if (value) {
                if (value in operations) {
                    onOperationAction(value as TOperation);
                } else {
                    onChangeDisplay(value);
                }
            }
        }
    };

    const onDoubleClick = ({ target }: React.MouseEvent<HTMLElement>) => {
        if (!constructorMode) return;
        const box = (target as HTMLElement).closest('.button-box');
        if (box) {
            const [, boxType] = box.className.match(/box__(\w+)/) || [];
            onRemoveItem(boxType as TBoxType);
        }
    };

    return (
        <div
            className="canvas"
            data-fulled={!constructorMode || items.length === Object.keys(boxes).length}
            onClick={onClick}
            onDoubleClick={onDoubleClick}>
            {items.map((boxType: TBoxType) => {
                const Box = boxes[boxType];
                return <Box key={boxType} />;
            })}
        </div>
    );
}
