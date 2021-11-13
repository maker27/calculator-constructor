import React from 'react';
import './ButtonBox.scss';
import { Button } from '../Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { operations } from '../../assets/constants';
import classNames from 'classnames';

interface IButtonBoxProps {
    className?: string;
    children: React.ReactNode;
}

export const ButtonBox: React.FC<IButtonBoxProps> = ({ className, children }) => {
    return <div className={classNames('button-box', className)}>{children}</div>;
};

export const DisplayBox: React.FC = () => {
    const { display, displayMaxLength } = useSelector((state: RootState) => state.calculator);
    return (
        <ButtonBox className="box-display">
            <Button label={display.slice(0, displayMaxLength)} className="button-display" />
        </ButtonBox>
    );
};

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

export const DigitsBox: React.FC = () => {
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

export const ResultBox: React.FC = () => {
    return (
        <ButtonBox className="box-result">
            <Button label="=" className="button-result" />
        </ButtonBox>
    );
};

interface IBoxProps {
    Node: React.FC;
    inactive?: boolean;
}

export const Box: React.FC<IBoxProps> = ({ Node, inactive }) => {
    return (
        <div className={classNames('box', inactive ? 'box_inactive' : '')}>
            <Node />
        </div>
    );
};
