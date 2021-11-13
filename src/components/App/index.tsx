import React from 'react';
import './App.scss';
import { Sidebar } from '../Sidebar';
import Switcher from '../Switcher';
import Calculator from '../Calculator';
import { TBoxType } from '../../assets/boxes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setItems, toggleMode } from '../../store/constructionSlice';
import { DragDropWrapper, TOnDragEndResult } from '../DragAndDrop';
import { CALCULATOR_DROPPABLE_ID } from '../../assets/constants';
import classNames from 'classnames';
import { Mode } from '../../assets/types';

function App(): React.ReactElement {
    const { items, mode } = useSelector((state: RootState) => state.construction);
    const dispatch = useDispatch();
    const onToggleMode = (mode: Mode) => dispatch(toggleMode(mode));
    const onSetItems = (items: TBoxType[]) => dispatch(setItems(items));

    const handleOnDragEnd = (result: TOnDragEndResult) => {
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

            onSetItems(newItems);
        }
    };

    return (
        <div className={classNames('container', { container_mode_runtime: mode === Mode.runtime })}>
            <DragDropWrapper onDragEnd={handleOnDragEnd}>
                <div className="aside">
                    <Sidebar items={items} />
                </div>
                <div className="main">
                    <Switcher mode={mode} onToggleMode={onToggleMode} />
                    <Calculator />
                </div>
            </DragDropWrapper>
        </div>
    );
}

export default App;
