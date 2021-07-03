import React from 'react';
import Package from './Package/Package';

const Packages = () => {
    // fake data for package section
    const packages = [
        {
            id: 1,
            tag: "Hello",
            title: "Singularity",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam esse tempora illo debitis odio porro nemo dignissimos accusantium. Assumenda repellat reiciendis corporis sunt eius nisi iure eos dolorem nemo!",
        },
        {
            id: 2,
            tag: "Hello",
            title: "Plurality",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam esse tempora illo debitis odio porro nemo dignissimos accusantium. Assumenda repellat reiciendis corporis sunt eius nisi iure eos dolorem nemo!",
        },
        {
            id: 3,
            tag: "Hello",
            title: "Professional",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam esse tempora illo debitis odio porro nemo dignissimos accusantium. Assumenda repellat reiciendis corporis sunt eius nisi iure eos dolorem nemo!",
        },
    ];

    return (
        <div className="md:px-28 px-4 mt-12">
            <div className="text-center">
                <span className="text-3xl pb-4 border-b-2 border-red-500 font-bold">Packages</span>
            </div>
            <div className="lg:grid lg:grid-cols-3 mt-10">
                {
                    packages.map(pkge => <Package pkge={pkge} key={pkge.id}></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;