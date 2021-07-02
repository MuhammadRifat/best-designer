import React from 'react';

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-red-500 text-white relative shadow-md font-mono lg:px-28 px-4" role="navigation">
            <h1 className="font-bold text-3xl">Happy Fly</h1>
            
            <div className="pr-8 md:block hidden text-xl">
                <a href="#" className="p-4">Home</a>
                <a href="#" className="p-4">Portfolio</a>
            </div>

            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            <button className="bg-white px-5 py-2 mr-2 rounded-lg text-black font-bold hidden md:block">Hire me</button>
        </nav>
    );
};

export default Navbar;