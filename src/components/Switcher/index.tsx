import React from 'react';
import './Switcher.scss';

function Switcher(): React.ReactElement {
    return (
        <div className="switcher">
            <div className="switcher__item icon-eye">Runtime</div>
            <div className="switcher__item switcher__item__active icon-selector">Constructor</div>
        </div>
    );
}

export default Switcher;
