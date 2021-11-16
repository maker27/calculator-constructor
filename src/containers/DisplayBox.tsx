import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { DisplayBox } from '../components/ButtonBox/DisplayBox';

const DisplayBoxContainer: React.FC = () => {
    const { display, displayMaxLength } = useSelector((state: RootState) => state.calculator);
    return <DisplayBox display={display} displayMaxLength={displayMaxLength} />;
};

export default DisplayBoxContainer;
