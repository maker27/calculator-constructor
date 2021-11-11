import React from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { combineClassnames } from '../../utils';

interface IDroppableWrapperProps {
    droppableId: string;
    className?: string;
    isDraggingClassname?: string;
    isDropDisabled?: boolean;
    isPlaceholderDisabled?: boolean;
    children: React.ReactNode;
}

const DroppableWrapper: React.FC<IDroppableWrapperProps> = ({
    droppableId,
    className,
    isDraggingClassname,
    isDropDisabled,
    isPlaceholderDisabled,
    children
}) => {
    return (
        <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
            {(provided: DroppableProvided, snapshot) => (
                <div
                    className={combineClassnames(className, snapshot.isDraggingOver && isDraggingClassname)}
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {children}
                    {!isPlaceholderDisabled && provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default DroppableWrapper;
