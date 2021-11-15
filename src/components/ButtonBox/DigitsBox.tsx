import React from 'react';
import { Button } from '../Button';
import { ButtonBox } from './index';

const DigitsBox: React.FC = () => {
    return (
        <ButtonBox className="box-digits">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((digit: number) => (
                <Button key={digit} label={digit.toString()} />
            ))}
            <Button label="0" className="button-zero" />
            <Button label="," />
        </ButtonBox>
    );
};

export default DigitsBox;
