import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div onClick={handleToggle} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ marginRight: '0.5rem' }}>{title}</h3>
                <FaPlus size={20} style={{ transform: isOpen ? 'rotate(135deg)' : null }} />
            </div>
            {isOpen && children}
        </div>
    );
};
export default Collapse;
