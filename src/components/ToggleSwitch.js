

import React, { useState } from 'react';


const ToggleSwitch = () => {

    const [isChecked, setIsChecked] = useState(false);

    function handleToggle() {
        setIsChecked(!isChecked);
    }

    return (
        <label className="toggle-switch">
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className="toggle-switch-slider" />
        </label>
    );
}

export default ToggleSwitch;
