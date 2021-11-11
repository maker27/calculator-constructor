import React from 'react';
import './Switcher.scss';
import classNames from 'classnames';

interface ISwitcherProps {
    constructorMode: boolean;
    onToggleMode: (mode: boolean) => void;
}

const Switcher: React.FC<ISwitcherProps> = ({ constructorMode, onToggleMode }) => {
    return (
        <div className="switcher">
            <div
                className={classNames(
                    'switcher__item',
                    'icon-eye',
                    constructorMode ? '' : 'switcher__item__active'
                )}
                onClick={() => onToggleMode(false)}>
                Runtime
            </div>
            <div
                className={classNames(
                    'switcher__item',
                    'icon-selector',
                    constructorMode ? 'switcher__item__active' : ''
                )}
                onClick={() => onToggleMode(true)}>
                Constructor
            </div>
        </div>
    );
};

export default Switcher;
