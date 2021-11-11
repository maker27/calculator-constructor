import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

interface IDraggableWrapperProps {
    draggableId: string;
    index: number;
    isDragDisabled?: boolean;
    isDraggingClassname?: string;
    isDraggableClassname?: string;
    children: React.ReactNode;
}

const DraggableWrapper: React.FC<IDraggableWrapperProps> = ({
    draggableId,
    index,
    isDragDisabled,
    isDraggingClassname,
    isDraggableClassname,
    children
}) => {
    return (
        <Draggable draggableId={draggableId} index={index} isDragDisabled={isDragDisabled}>
            {(draggableProvided: DraggableProvided, snapshot) => (
                <>
                    <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        className={snapshot.isDragging ? isDraggingClassname : ''}>
                        {children}
                    </div>
                    {snapshot.isDragging && isDraggableClassname && (
                        <div className={isDraggableClassname}>{children}</div>
                    )}
                </>
            )}
        </Draggable>
    );
};

export default DraggableWrapper;
