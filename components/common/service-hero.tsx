"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { subtitle, title } from '../primitives';
import useParallax from '../../hooks/useParallax'

import heroimg from '../../assets/heroimages/1.jpg';

const ServiceHero = () => {
    useParallax();
    return (
        <div className='relative h-[80vh]'>
            <Image alt='hero' src={heroimg} fill={true} className='object-cover' />
            <div className='absolute flex flex-col bottom-20 right-44 w-1/3 gap-3'>
                <div className='relative flex flex-col items-start p-16 z-20 rounded-3xl bg-white'>
                    <h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Dental Cleaning</h1>
                    <h1 className={subtitle({ size: 'md', alignment: 'left' })}>Smiline Family offers professional teeth cleaning services to help you maintain optimal oral health</h1>
                    <Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
                        Book an Appointment
                    </Button>
                </div>
                <div className='bubble absolute w-32 h-32 z-10 bottom-16 -left-24 bg-default rounded-full ' data-speed="0.1"></div>
                <div className='bubble absolute w-20 h-20 z-20 -top-10 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
                <div className='bubble absolute w-12 h-12 z-10 bottom-10 -right-20 bg-default rounded-full ' data-speed="0.1"></div>
                <div className='bubble absolute w-40 h-40 z-10 -bottom-20 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
            </div>
        </div>
    );
}

export default ServiceHero;
