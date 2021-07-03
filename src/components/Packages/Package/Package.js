import React from 'react';

// Package component
const Package = ({pkge}) => {
    const {tag, title, description} = pkge;
    
    return (
        <div className="p-3">
            <div className="p-3 shadow-md">
            <p className="text-red-500">{tag}</p>
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
            <button className="bg-red-400 rounded-md px-3 py-1 text-white mt-4">Read more</button>
            </div>
        </div>
    );
};

export default Package;