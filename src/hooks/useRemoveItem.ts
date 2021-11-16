import React, { useCallback } from 'react';
import { TBoxType } from '../assets/boxes';
import { Mode } from '../assets/types';

type TRemoveItem = (event: React.MouseEvent<HTMLElement>) => void;

export default function useRemoveItem(mode: Mode, removeItem: (item: TBoxType) => void): TRemoveItem {
    const onRemoveItem: TRemoveItem = useCallback(
        ({ target }) => {
            if (mode === Mode.runtime) return;
            const box = (target as HTMLElement).closest('.button-box');
            if (box) {
                const [, boxType] = box.className.match(/box-(\w+)/) || [];
                removeItem(boxType as TBoxType);
            }
        },
        [mode, removeItem]
    );

    return onRemoveItem;
}
