import React from 'react';
import image from '../../images/image_03.png';
import shape from '../../images/Shape_03.png';

// Header section of home page
const Header = () => {
    return (
        <div className="bg-red-500 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:px-28 px-4 pt-24">
                <div>
                    <div className="text-white my-12">
                        <p className="text-xl">What Business are you?</p>
                        <h1 className="text-5xl font-bold my-5">Get the most efficient<br />
                            UI design for your<br />
                            Business now!
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatum impedit molestiae sapiente eaque quam.</p>
                        <button className="bg-white rounded-lg text-black border-2 py-1 px-5 font-bold mt-8">Hire me</button>
                        <button className="rounded-lg text-white border-2 ml-4 hover:bg-white hover:text-black py-1 px-5 font-bold mt-8">Portfolio</button>
                    </div>
                </div>
                <div className="pt-4">
                    <img className="w-4/5" src={image} alt="" />
                </div>
            </div>
            <img className="bg-cover w-full" src={shape} alt="" />
        </div>
    );
};

export default Header;