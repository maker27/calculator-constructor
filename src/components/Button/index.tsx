import React from 'react';
import './Button.scss';

interface IButtonProps {
    label: string;
    className?: string;
}

export const Button: React.FC<IButtonProps> = ({ label, className = '' }) => {
    return <div className={'button ' + className}>{label}</div>;
};
