import React from 'react';
import './ButtonBox.scss';
import { Button } from '../Button';
import { combineClassnames } from '../../utils';

interface IButtonBoxProps {
    className?: string;
    children: React.ReactNode;
}

export const ButtonBox: React.FC<IButtonBoxProps> = ({ className = '', children }) => {
    return <div className={combineClassnames('button-box', className)}>{children}</div>;
};

export const DisplayBox: React.FC = () => {
    return (
        <ButtonBox className="box__display">
            <Button label="0" className="button-display" />
        </ButtonBox>
    );
};

export const OperationsBox: React.FC = () => {
    return (
        <ButtonBox className="box__operations">
            <Button label="/" />
            <Button label="х" />
            <Button label="-" />
            <Button label="+" />
        </ButtonBox>
    );
};

export const DigitsBox: React.FC = () => {
    return (
        <ButtonBox className="box__digits">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((digit: number) => (
                <Button key={digit} label={digit.toString()} />
            ))}
            <Button label="0" className="button-zero" />
            <Button label="," />
        </ButtonBox>
    );
};

export const ResultBox: React.FC = () => {
    return (
        <ButtonBox className="box__result">
            <Button label="=" className="button-result" />
        </ButtonBox>
    );
};

interface IBoxProps {
    Node: React.FC;
    inactive?: boolean;
    onClick?: () => void;
}

export const Box: React.FC<IBoxProps> = ({ Node, inactive, onClick }) => {
    return (
        <div className={combineClassnames('box', inactive ? ' box__inactive' : '')} onClick={onClick}>
            <Node />
        </div>
    );
};
