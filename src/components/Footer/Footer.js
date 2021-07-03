import React from 'react';
import shape from '../../images/Shape_06.png';

// Footer of Home page
const Footer = () => {
    return (
        <div className="bg-red-500 w-full mt-24">
        <img className="w-full" src={shape} alt="" />
        <div className="flex justify-center py-12">
            <div className="text-center md:w-1/3">
                <span className="font-bold text-2xl pb-2 border-b-2 text-white">Start a project with me</span>
                <p className="text-white mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquam consequuntur quibusdam vitae labore dolores tenetur voluptatum ab, alias laudantium sequi unde!</p>
                <button className="bg-white px-4 py-1 rounded-md mt-6 font-bold">Hire me</button>
            </div>
            </div>
        </div>
    );
};

export default Footer;