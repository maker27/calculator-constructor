import React from 'react';
import './Canvas.scss';
import boxes, { TBoxType } from '../../boxes';

interface ICanvasProps {
    items: TBoxType[];
    onRemoveItem: (boxType: TBoxType) => void;
}

function Canvas({ items, onRemoveItem }: ICanvasProps): React.ReactElement {
    const onDoubleClick = ({ target }: React.MouseEvent<HTMLElement>) => {
        const box = (target as HTMLElement).closest('.button-box');
        if (box) {
            const [, boxType] = box.className.match(/box__(\w+)/) || [];
            onRemoveItem(boxType as TBoxType);
        }
    };

    return (
        <div
            className="canvas"
            data-fulled={items.length === Object.keys(boxes).length}
            onDoubleClick={onDoubleClick}>
            {items.map((boxType: TBoxType) => {
                const Box = boxes[boxType];
                return <Box key={boxType} />;
            })}
        </div>
    );
}

export default Canvas;
