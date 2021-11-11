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
import { DragDropWrapper, DraggableWrapper, DroppableWrapper, TOnDragEndResult } from '../DragAndDrop';

function App(): React.ReactElement {
    const { items, mode: constructorMode } = useSelector((state: RootState) => state.construction);
    const dispatch = useDispatch();
    const onToggleMode = (mode: boolean) => dispatch(toggleMode(mode));
    const onSetItems = (items: TBoxType[]) => dispatch(setItems(items));

    const handleOnDragEnd = (result: TOnDragEndResult) => {
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
            <DragDropWrapper onDragEnd={handleOnDragEnd}>
                <DroppableWrapper
                    droppableId="sidebar"
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
