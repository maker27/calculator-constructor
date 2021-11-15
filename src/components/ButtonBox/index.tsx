import React from 'react';
import './ButtonBox.scss';
import classNames from 'classnames';

interface IButtonBoxProps {
    className?: string;
    children: React.ReactNode;
}

export const ButtonBox: React.FC<IButtonBoxProps> = ({ className, children }) => {
    return <div className={classNames('button-box', className)}>{children}</div>;
};

interface IBoxProps {
    children: React.ReactNode;
    inactive?: boolean;
}

export const Box: React.FC<IBoxProps> = ({ children, inactive }) => {
    return <div className={classNames('box', inactive ? 'box_inactive' : '')}>{children}</div>;
};
