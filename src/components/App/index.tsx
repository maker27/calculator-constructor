import React from 'react';
import './App.scss';
import { Sidebar } from '../Sidebar';
import { Box } from '../ButtonBox';
import Switcher from '../Switcher';
import Canvas from '../Canvas';
import boxes, { TBoxType } from '../../boxes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addItem, removeItem, toggleMode } from '../../store/constructionSlice';
import { combineClassnames } from '../../utils';

function App(): React.ReactElement {
    const { items, mode: constructorMode } = useSelector((state: RootState) => state.construction);
    const dispatch = useDispatch();
    const onToggleMode = (mode: boolean) => dispatch(toggleMode(mode));
    const onAddItem = (item: TBoxType) => dispatch(addItem(item));
    const onRemoveItem = (item: TBoxType) => dispatch(removeItem(item));

    return (
        <div className={combineClassnames('container', constructorMode ? '' : 'runtime-mode')}>
            <div className="aside">
                <Sidebar>
                    {Object.entries(boxes).map(([type, Node]) => {
                        const boxType = type as TBoxType;
                        return (
                            <Box
                                key={type}
                                Node={Node}
                                inactive={items.includes(boxType)}
                                onClick={() => {
                                    onAddItem(boxType);
                                }}
                            />
                        );
                    })}
                </Sidebar>
            </div>
            <div className="main">
                <Switcher constructorMode={constructorMode} onToggleMode={onToggleMode} />
                <Canvas items={items} runtimeMode={!constructorMode} onRemoveItem={onRemoveItem} />
            </div>
        </div>
    );
}

export default App;