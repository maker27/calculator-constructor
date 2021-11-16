import React from 'react';
import { TBoxType } from '../assets/boxes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeItem } from '../store/constructionSlice';
import { changeDisplay, operationAction } from '../store/calculatorSlice';
import { TOperation } from '../assets/types';
import Calculator from '../components/Calculator';

const CalculatorContainer: React.FC = () => {
    const { items, mode } = useSelector((state: RootState) => state.construction);
    const dispatch = useDispatch();
    const onRemoveItem = (item: TBoxType) => dispatch(removeItem(item));
    const onOperationAction = (action: TOperation) => dispatch(operationAction(action));
    const onChangeDisplay = (value: string) => dispatch(changeDisplay(value));

    return (
        <Calculator
            items={items}
            mode={mode}
            removeItem={onRemoveItem}
            operationAction={onOperationAction}
            changeDisplay={onChangeDisplay}
        />
    );
};

export default CalculatorContainer;
