import React from 'react';
import './Switcher.scss';
import classNames from 'classnames';
import { Mode } from '../../assets/types';

interface ISwitcherProps {
    mode: Mode;
    onToggleMode: (mode: Mode) => void;
}

const Switcher: React.FC<ISwitcherProps> = ({ mode, onToggleMode }) => {
    return (
        <div className="switcher">
            <div
                className={classNames(
                    'switcher__item',
                    'icon-eye',
                    mode === Mode.runtime && 'switcher__item__active'
                )}
                onClick={() => onToggleMode(Mode.constructor)}>
                Runtime
            </div>
            <div
                className={classNames(
                    'switcher__item',
                    'icon-selector',
                    mode === Mode.constructor && 'switcher__item__active'
                )}
                onClick={() => onToggleMode(Mode.runtime)}>
                Constructor
            </div>
        </div>
    );
};

export default Switcher;
