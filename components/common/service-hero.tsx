"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { subtitle, title } from '../primitives';
import useParallax from '../../hooks/useParallax'

import heroimg from '../../assets/heroimages/1.jpg';

interface ServiceHeroProps {
    image: any;
    main_section: any;
    bubbles: any;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ main_section, bubbles, image }) => {
    useParallax();
    return (
        <div className='relative h-[85vh] overflow-x-clip'>
            <Image alt='hero' src={image} fill={true} className='object-cover' />
            <div className='
                absolute flex flex-col bottom-20 
                right-0 lg:right-[15%] 
                left-0 lg:left-auto 
                mx-5 sm:mx-auto lg:mx-auto 
                w-auto lg:w-1/3 max-w-[500px] 
                gap-3
            '>
                {main_section}
                {bubbles}
            </div>
        </div>
    );
}

export default ServiceHero;
