import React from 'react';
import './App.scss';
import { Sidebar } from '../Sidebar';
import { Calculator, Switcher } from '../../containers';
import { TBoxType } from '../../assets/boxes';
import { DragDropWrapper } from '../DragAndDrop';
import classNames from 'classnames';
import { Mode } from '../../assets/types';
import useDragAndDrop from '../../hooks/useDragAndDrop';

interface IAppProps {
    items: TBoxType[];
    mode: Mode;
    setItems: (items: TBoxType[]) => void;
}

const App: React.FC<IAppProps> = ({ items, mode, setItems }) => {
    const onDragEnd = useDragAndDrop(items, setItems);

    return (
        <div className={classNames('container', { container_mode_runtime: mode === Mode.runtime })}>
            <DragDropWrapper onDragEnd={onDragEnd}>
                <div className="aside">
                    <Sidebar items={items} />
                </div>
                <div className="main">
                    <Switcher />
                    <Calculator />
                </div>
            </DragDropWrapper>
        </div>
    );
};

export default App;
