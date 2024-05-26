import React from 'react';
import { paragraph, subtitle, title } from "@/components/primitives";
import Image from 'next/image';

interface IconCardProps {
    bg_color: any;
    txt_color: any;
    image: any;
    header_text: String;
}


const IconCard: React.FC<IconCardProps> = ({ bg_color, txt_color, image, header_text }) => {
    return (
        //UZAIR i need an SVG here
        <div className={`flex flex-col bg-${bg_color} px-8 py-10 gap-10 justify-center items-center rounded-3xl`}>
            <div className='flex relative w-40 h-40'>
                <Image fill={true} alt='card-image' src={image} className='object-contain '/>
            </div>
            <h1 className={subtitle({ color: txt_color })}>{header_text}</h1>
        </div>
    );
}

export default IconCard;
