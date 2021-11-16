import React from 'react';
import { Button } from '../Button';
import { ButtonBox } from './index';

interface IDisplayBoxProps {
    display: string;
    displayMaxLength: number;
}

export const DisplayBox: React.FC<IDisplayBoxProps> = ({ display, displayMaxLength }) => {
    return (
        <ButtonBox className="box-display">
            <Button label={display.slice(0, displayMaxLength)} className="button-display" />
        </ButtonBox>
    );
};
