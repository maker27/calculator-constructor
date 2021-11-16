import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Sidebar } from '../components/Sidebar';

const SidebarContainer: React.FC = () => {
    const { items } = useSelector((state: RootState) => state.construction);

    return <Sidebar items={items} />;
};

export default SidebarContainer;
