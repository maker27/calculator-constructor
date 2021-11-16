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
