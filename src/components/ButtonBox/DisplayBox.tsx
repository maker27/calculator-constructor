import React from 'react';
import { Button } from '../Button';
import { ButtonBox } from './index';

export type IDisplayBoxProps = {
    display: string;
    displayMaxLength: number;
};

const DisplayBox: React.FC<IDisplayBoxProps> = ({ display, displayMaxLength }) => {
    return (
        <ButtonBox className="box-display">
            <Button label={display.slice(0, displayMaxLength)} className="button-display" />
        </ButtonBox>
    );
};

export default DisplayBox;
