import React from 'react';
import './Button.scss';
import classNames from 'classnames';

interface IButtonProps {
    label: string;
    className?: string;
}

export const Button: React.FC<IButtonProps> = ({ label, className }) => {
    return <div className={classNames('button', className)}>{label}</div>;
};
