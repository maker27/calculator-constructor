import React from 'react';
import './Button.scss';
import { combineClassnames } from '../../utils';

interface IButtonProps {
    label: string;
    className?: string;
}

export const Button: React.FC<IButtonProps> = ({ label, className = '' }) => {
    return <div className={combineClassnames('button', className)}>{label}</div>;
};
