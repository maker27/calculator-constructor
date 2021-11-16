import React from 'react';
import { Mode } from '../assets/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleMode } from '../store/constructionSlice';
import Switcher from '../components/Switcher';

const SwitcherContainer: React.FC = () => {
    const { mode } = useSelector((state: RootState) => state.construction);
    const dispatch = useDispatch();
    const onToggleMode = (mode: Mode) => dispatch(toggleMode(mode));

    return <Switcher mode={mode} onToggleMode={onToggleMode} />;
};

export default SwitcherContainer;
