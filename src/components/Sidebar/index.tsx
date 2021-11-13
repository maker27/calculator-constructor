import React from 'react';
import './Sidebar.scss';
import { SIDEBAR_DROPPABLE_ID } from '../../assets/constants';
import { DraggableWrapper, DroppableWrapper } from '../DragAndDrop';
import boxes, { TBoxType } from '../../assets/boxes';
import { Box } from '../ButtonBox';

interface ISidebarProps {
    items: TBoxType[];
}

export const Sidebar: React.FC<ISidebarProps> = ({ items }) => {
    return (
        <DroppableWrapper
            droppableId={SIDEBAR_DROPPABLE_ID}
            className="sidebar"
            isDropDisabled={true}
            isPlaceholderDisabled={true}>
            {Object.entries(boxes).map(([type, Node], index) => {
                const boxType = type as TBoxType;
                const inactive = items.includes(boxType);
                return (
                    <DraggableWrapper
                        key={type}
                        draggableId={inactive ? type + '-inactive' : type}
                        index={index}
                        isDragDisabled={inactive}
                        isDraggingClassname="box_dragging"
                        isDraggableClassname="box_inactive">
                        <Box key={type} Node={Node} inactive={inactive} />
                    </DraggableWrapper>
                );
            })}
        </DroppableWrapper>
    );
};
