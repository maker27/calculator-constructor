import React from 'react';
import { Button } from '../Button';
import { ButtonBox } from './index';

const ResultBox: React.FC = () => {
    return (
        <ButtonBox className="box-result">
            <Button label="=" className="button-result" />
        </ButtonBox>
    );
};

export default ResultBox;
