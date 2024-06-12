"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { subtitle, title } from '../primitives';

import heroimg from '../../assets/heroimages/1.jpg';

interface ServiceHeroProps {
    image: any;
    main_section: any;
    bubbles: any;
    div_side: any;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ main_section, bubbles, image, div_side }) => {
    return (
        <div className='relative h-screen lg:h-[85vh] overflow-x-clip'>
            <Image alt='hero' src={image} fill={true} className='object-cover' />
            <div className={`
                absolute flex flex-col bottom-20 
                ${div_side === "right" ?
                    "right-0 lg:right-[15%] left-0 lg:left-auto " :
                    "right-0 lg:right-auto left-0 lg:left-[15%]"
                }
                mx-5 sm:mx-auto lg:mx-auto 
                w-auto lg:w-1/3 max-w-[500px] 
                gap-3
            `}>
                {main_section}
                {bubbles}
            </div>
        </div>
    );
}

export default ServiceHero;
