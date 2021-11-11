import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

interface IDragDropWrapperProps {
    children: React.ReactNode;
    onDragEnd: (result: DropResult) => void;
}

const DragDropWrapper: React.FC<IDragDropWrapperProps> = ({ children, onDragEnd }) => {
    return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};

export type TOnDragEndResult = DropResult;

export default DragDropWrapper;
