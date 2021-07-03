import React from 'react';

// Dropdown for mobile view
const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-2 px-1 bg-red-500 text-white' : 'hidden'} onClick={toggle}>
            <a href="#" className="p-4">Home</a>
            <a href="#" className="p-4">Portfolio</a>
        </div>
    );
};

export default Dropdown;