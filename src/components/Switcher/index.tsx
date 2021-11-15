import React from 'react';
import './Switcher.scss';
import classNames from 'classnames';
import { Mode } from '../../assets/types';

interface ISwitcherProps {
    mode: Mode;
    toggleMode: (mode: Mode) => void;
}

const Switcher: React.FC<ISwitcherProps> = ({ mode, toggleMode }) => {
    return (
        <div className="switcher">
            <div
                className={classNames(
                    'switcher__item',
                    'icon-eye',
                    mode === Mode.runtime && 'switcher__item_active'
                )}
                onClick={() => toggleMode(Mode.runtime)}>
                Runtime
            </div>
            <div
                className={classNames(
                    'switcher__item',
                    'icon-selector',
                    mode === Mode.constructor && 'switcher__item_active'
                )}
                onClick={() => toggleMode(Mode.constructor)}>
                Constructor
            </div>
        </div>
    );
};

export default Switcher;
