import React from 'react';
import './App.scss';
import Sidebar from '../../containers/Sidebar';
import Switcher from '../../containers/Switcher';
import Calculator from '../../containers/Calculator';
import { TBoxType } from '../../assets/boxes';
import { DragDropWrapper, TOnDragEndResult } from '../DragAndDrop';
import { CALCULATOR_DROPPABLE_ID } from '../../assets/constants';
import classNames from 'classnames';
import { Mode } from '../../assets/types';

interface IAppProps {
    items: TBoxType[];
    mode: Mode;
    setItems: (items: TBoxType[]) => void;
}

const App: React.FC<IAppProps> = ({ items, mode, setItems }) => {
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

            setItems(newItems);
        }
    };

    return (
        <div className={classNames('container', { container_mode_runtime: mode === Mode.runtime })}>
            <DragDropWrapper onDragEnd={handleOnDragEnd}>
                <div className="aside">
                    <Sidebar />
                </div>
                <div className="main">
                    <Switcher />
                    <Calculator />
                </div>
            </DragDropWrapper>
        </div>
    );
};

export default App;
