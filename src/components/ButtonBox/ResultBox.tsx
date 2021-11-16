import React from 'react';
import { Button } from '../Button';
import { ButtonBox } from './index';

export const ResultBox: React.FC = () => {
    return (
        <ButtonBox className="box-result">
            <Button label="=" className="button-result" />
        </ButtonBox>
    );
};
