import React from 'react';
import { paragraph, subtitle, title } from "@/components/primitives";
import Image from 'next/image';

interface ImageCardProps {
    bg_color: any;
    txt_color: any;
    image: any;
    header_text: String;
    desc_text: String;
}


const ImageCard: React.FC<ImageCardProps> = ({ bg_color, txt_color, image, header_text, desc_text }) => {
    return (
        <div className={`flex flex-col bg-${bg_color} px-8 py-10 gap-10 justify-center items-center rounded-3xl`}>
            <h1 className={subtitle({ color: txt_color })}>{header_text}</h1>
            <div className='flex relative w-56 h-56 rounded-full'>
                <Image fill={true} alt='card-image' src={image} className='rounded-full object-cover'/>
            </div>
            <h1 className={paragraph({ color: txt_color })}>{desc_text}</h1>
        </div>
    );
}

export default ImageCard;
