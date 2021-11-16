import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setItems } from '../store/constructionSlice';
import { TBoxType } from '../assets/boxes';
import App from '../components/App';

const AppContainer: React.FC = () => {
    const { items, mode } = useSelector((state: RootState) => state.construction);
    const dispatch = useDispatch();
    const onSetItems = (items: TBoxType[]) => dispatch(setItems(items));
    return <App items={items} mode={mode} setItems={onSetItems} />;
};

export default AppContainer;
