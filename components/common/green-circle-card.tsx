import Image from 'next/image';
import React from 'react';
import { paragraph, title } from '../primitives';


interface GreenCircleCardProps {
    image: any;
    header: string;
    text: any;
}

const GreenCircleCard: React.FC<GreenCircleCardProps> = ({ header, image, text }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center w-full justify-between bg-primary rounded-none lg:rounded-3xl">
            <div className="flex flex-col w-full justify-center text-left py-10 lg:py-20 px-10 lg:px-20">
                <h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>{header}</h1>
                <h1 className={paragraph({ size: 'lg', color: 'background' })}>{text}</h1>
            </div>
            <div>
                <div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full">
                    <Image src={image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
                    <div className='bubble absolute w-48 h-48 z-10 top-40 right-0 bg-default rounded-full ' data-speed="0.1"></div>
                    <div className='bubble absolute w-20 h-20 z-10 top-80 -right-48 bg-default rounded-full ' data-speed="0.1"></div>
                    <div className='bubble absolute w-20 h-20 z-10 -bottom-48 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
                </div>
            </div>
        </div>
    );
}

export default GreenCircleCard;
