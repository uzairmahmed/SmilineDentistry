import Image from 'next/image';
import React from 'react';

interface PicTextProps {
    image: any;
    inside: any;
}


const PicText: React.FC<PicTextProps> = ({ image, inside }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center w-full mt-28 gap-5 lg:gap-20">
            <div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] lg:mr-10 rounded-full">
                <Image src={image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
                {/* <div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div> */}
                {/* <div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div> */}
            </div>
            <div className="flex flex-col w-full p-10 lg:p-0 lg:w-1/2 justify-center text-left">
                {inside}
            </div>
        </div>
    );
}

export default PicText;
