import React from 'react';
import './App.scss';
import { Sidebar } from '../Sidebar';
import { Box } from '../ButtonBox';
import Switcher from '../Switcher';
import Calculator from '../Calculator';
import boxes, { TBoxType } from '../../assets/boxes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setItems, toggleMode } from '../../store/constructionSlice';
import { DragDropWrapper, DraggableWrapper, DroppableWrapper, TOnDragEndResult } from '../DragAndDrop';
import { CALCULATOR_DROPPABLE_ID, SIDEBAR_DROPPABLE_ID } from '../../assets/constants';
import classNames from 'classnames';

function App(): React.ReactElement {
    const { items, mode: constructorMode } = useSelector((state: RootState) => state.construction);
    const dispatch = useDispatch();
    const onToggleMode = (mode: boolean) => dispatch(toggleMode(mode));
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
        <div className={classNames('container', constructorMode ? '' : 'runtime-mode')}>
            <DragDropWrapper onDragEnd={handleOnDragEnd}>
                <DroppableWrapper
                    droppableId={SIDEBAR_DROPPABLE_ID}
                    className="aside"
                    isDropDisabled={true}
                    isPlaceholderDisabled={true}>
                    <Sidebar>
                        {Object.entries(boxes).map(([type, Node], index) => {
                            const boxType = type as TBoxType;
                            const inactive = items.includes(boxType);
                            return (
                                <DraggableWrapper
                                    key={type}
                                    draggableId={inactive ? type + '-inactive' : type}
                                    index={index}
                                    isDragDisabled={inactive}
                                    isDraggingClassname="dragging"
                                    isDraggableClassname="box__inactive">
                                    <Box key={type} Node={Node} inactive={inactive} />
                                </DraggableWrapper>
                            );
                        })}
                    </Sidebar>
                </DroppableWrapper>
                <div className="main">
                    <Switcher constructorMode={constructorMode} onToggleMode={onToggleMode} />
                    <Calculator />
                </div>
            </DragDropWrapper>
        </div>
    );
}

export default App;
