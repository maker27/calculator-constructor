import React, { useState } from 'react';
import './App.scss';
import { Sidebar } from '../Sidebar';
import { Box } from '../ButtonBox';
import Switcher from '../Switcher';
import Canvas from '../Canvas';
import boxes, { TBoxType } from '../../boxes';

function App(): React.ReactElement {
    const [items, setItems] = useState<TBoxType[]>([]);

    return (
        <div className="container">
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
                                    setItems(prevItems => {
                                        return prevItems.includes(boxType)
                                            ? prevItems
                                            : prevItems.concat(boxType);
                                    });
                                }}
                            />
                        );
                    })}
                </Sidebar>
            </div>
            <div className="main">
                <Switcher />
                <Canvas
                    items={items}
                    onRemoveItem={(boxType: TBoxType) => {
                        setItems(prevItems => prevItems.filter(type => type !== boxType));
                    }}
                />
            </div>
        </div>
    );
}

export default App;
