import React from 'react';
import { operations } from '../../assets/constants';
import { Button } from '../Button';
import { ButtonBox } from './index';

export const OperationsBox: React.FC = () => {
    return (
        <ButtonBox className="box-operations">
            {Object.keys(operations)
                .filter(op => op !== '=')
                .map(op => (
                    <Button key={op} label={op} />
                ))}
        </ButtonBox>
    );
};
