import React from 'react';
import { operations } from '../assets/constants';
import { Mode, TOperation } from '../assets/types';

type TCalculatorClick = (event: React.MouseEvent<HTMLElement>) => void;

export default function useCalculatorClick(
    mode: Mode,
    operationAction: (action: TOperation) => void,
    changeDisplay: (display: string) => void
): TCalculatorClick {
    const onCalculatorClick: TCalculatorClick = ({ target }) => {
        if (mode === Mode.constructor) return;
        const button = (target as HTMLElement).closest('.button');
        if (button && !button.classList.contains('button-display')) {
            const value = button.textContent;
            if (value) {
                if (value in operations) {
                    operationAction(value as TOperation);
                } else {
                    changeDisplay(value);
                }
            }
        }
    };

    return onCalculatorClick;
}
