"use client";

import React from 'react';
import Image from 'next/image';
import { subtitle, title } from '../primitives';
import { fontCursive } from "@/config/fonts";

import heroimage from '../../assets/images/AdobeStock_420249849_Hero.jpg'
import clsx from 'clsx';
import ContactFormButton from './contact-form-button';

const HomepageHero = () => {
    return (
        <div className='relative h-[95vh] overflow-x-clip'>
            <Image alt='hero' src={heroimage} fill={true} className='object-cover' />
            <div className='
                absolute flex flex-col gap-3
                top-[25%] 
                right-auto lg:right-auto 
                left-[50%] lg:left-[7.5%] 
                mx-5 sm:mx-auto lg:mx-auto 
                w-auto lg:w-1/3 max-w-[500px] 
                bg-opacity-70 rounded-3xl 
                bg-white lg:bg-transparent 
                -translate-x-1/2 lg:translate-x-0
            '>
                <div className='relative flex flex-col items-center lg:items-center p-16 z-20'>
                    <h1 className={
                        clsx(
                            title({ size: 'BIG', fullWidth: true, alignment: 'center' }),
                            fontCursive.variable
                        )
                    }>Smiline</h1>
                    <h1 className={title({ size: 'md', fullWidth: true, alignment: 'center' })}>Family Dentistry</h1>
                    <h1 className={subtitle({ size: 'md', fullWidth: true, alignment: 'center' })}>Revitalize your smile, <br />Renew your confidence.</h1>
                    <ContactFormButton />
                </div>
                {/* <div className='bubble absolute w-32 h-32 z-10 bottom-16 -left-24 bg-default rounded-full ' data-speed="0.1"></div> */}
                {/* <div className='bubble absolute w-20 h-20 z-20 -top-10 -right-10 bg-default rounded-full ' data-speed="0.1"></div> */}
                {/* <div className='bubble absolute w-12 h-12 z-10 bottom-10 -right-20 bg-default rounded-full ' data-speed="0.1"></div> */}
                {/* <div className='bubble absolute w-40 h-40 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div> */}

            </div>
        </div>
    );
}

export default HomepageHero;
