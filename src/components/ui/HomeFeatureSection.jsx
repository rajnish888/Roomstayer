import React from 'react';
import Image from 'next/image';

const HomeFeatureSection = ({ className = '', cardData = [], titleClassName = '' }) => {
    return (
        <div className={`container ${className}`}>
            <div className="border rounded-2xl p-10 border-[#D4D4D4]">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {cardData.map((item, index) => (
                        <div key={index} className="relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={210}
                                height={280}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className={titleClassName}>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeFeatureSection;
