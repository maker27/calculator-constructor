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
import { combineClassnames } from '../../utils';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DraggableProvided,
    DropResult
} from 'react-beautiful-dnd';

function App(): React.ReactElement {
    const { items, mode: constructorMode } = useSelector((state: RootState) => state.construction);
    const dispatch = useDispatch();
    const onToggleMode = (mode: boolean) => dispatch(toggleMode(mode));
    const onSetItems = (items: TBoxType[]) => dispatch(setItems(items));

    const handleOnDragEnd = (result: DropResult) => {
        const { destination, draggableId } = result;
        if (!destination) return;
        const boxType = draggableId as TBoxType;
        if (destination.droppableId === 'calculator' && !items.includes(boxType)) {
            const newItems = [...items];
            newItems.splice(destination.index, 0, boxType);
            onSetItems(newItems);
        }
    };

    return (
        <div className={combineClassnames('container', constructorMode ? '' : 'runtime-mode')}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="sidebar" isDropDisabled={true}>
                    {(provided: DroppableProvided) => (
                        <div className="aside" ref={provided.innerRef} {...provided.droppableProps}>
                            <Sidebar>
                                {Object.entries(boxes).map(([type, Node], index) => {
                                    const boxType = type as TBoxType;
                                    const inactive = items.includes(boxType);
                                    return (
                                        <Draggable
                                            key={type}
                                            draggableId={inactive ? type + '-inactive' : type}
                                            index={index}
                                            isDragDisabled={inactive}>
                                            {(draggableProvided: DraggableProvided, snapshot) => (
                                                <React.Fragment>
                                                    <div
                                                        ref={draggableProvided.innerRef}
                                                        {...draggableProvided.draggableProps}
                                                        {...draggableProvided.dragHandleProps}
                                                        className={snapshot.isDragging ? 'dragging' : ''}>
                                                        <Box key={type} Node={Node} inactive={inactive} />
                                                    </div>
                                                    {snapshot.isDragging && (
                                                        <Box key={type} Node={Node} inactive={true} />
                                                    )}
                                                </React.Fragment>
                                            )}
                                        </Draggable>
                                    );
                                })}
                            </Sidebar>
                        </div>
                    )}
                </Droppable>
                <div className="main">
                    <Switcher constructorMode={constructorMode} onToggleMode={onToggleMode} />
                    <Calculator />
                </div>
            </DragDropContext>
        </div>
    );
}

export default App;
