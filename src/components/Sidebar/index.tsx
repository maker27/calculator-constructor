import React from 'react';
import './Sidebar.scss';

interface ISidebarProps {
    children: React.ReactNode;
}

export const Sidebar: React.FC<ISidebarProps> = ({ children }) => {
    return <div className="sidebar">{children}</div>;
};
