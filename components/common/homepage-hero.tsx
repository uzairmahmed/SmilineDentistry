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

            </div>
            <div className='hidden md:flex bubble absolute w-[450px] h-[450px] z-10 -bottom-48 -left-48 bg-background rounded-full border-5 border-default border-solid' data-speed="0"></div>
            <div className='hidden xl:flex bubble absolute w-48 h-48 z-10 bottom-32 left-14 bg-default rounded-full ' data-speed="0"></div>
            <div className='hidden md:flex bubble absolute w-12 h-12 z-10 bottom-80 left-10 bg-default rounded-full ' data-speed="0"></div>
            <div className='hidden xl:flex bubble absolute w-56 h-56 z-20 top-32 -right-24 bg-default rounded-full ' data-speed="0"></div>
            <div className='hidden md:flex bubble absolute w-72 h-72 z-10 -bottom-24 -right-24 bg-background rounded-full border-5 border-default border-solid ' data-speed="0"></div>
        </div>
    );
}

export default HomepageHero;
