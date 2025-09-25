import React from 'react';
import clsx from "clsx";
import { AltLogo } from "@/components/icons";
import { paragraph, title } from './primitives';
import { siteConfig } from '@/config/site';
import NextLink from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full py-2 shadow-md bg-primary">
            <div className='grid items-center w-full max-w-6xl grid-cols-1 grid-rows-3 py-10 lg:grid-cols-3 lg:grid-rows-1'>
                <div className='flex flex-col items-center'>
                    <AltLogo width={250} />
                    {/* <h1 className={title({ size: 'md', color: 'background' })}>Smiline Family Dentistry</h1> */}
                </div>
                <div className='flex flex-col items-center order-none gap-5 lg:items-start lg:order-first'>
                    {siteConfig.navItems.map((item) => (
                        <NextLink
                            key={item.label}
                            className={clsx(
                                "text-xl text-background text-center lg:text-left data-[active=true]:text-primary data-[active=true]:font-medium"
                            )}
                            color="background"
                            href={item.href}
                        >
                            {item.label}
                        </NextLink>
                    ))}
                </div>
                <div className='grid items-center grid-rows-3 text-center max-w-7xl lg:text-right lg:items-end'>
                    <h1 className={paragraph({ size: 'sm', color: 'background' })}>(905) 405-1786</h1>
                    <h1 className={paragraph({ size: 'sm', color: 'background' })}>1-885 Main St. E, Milton ON L9T5A7</h1>
                    <h1 className={paragraph({ size: 'sm', color: 'background' })}>contact@smilinedentistry.ca</h1>
                </div>
            </div>

            <div className='flex flex-col items-center my-10 text-center max-w-7xl'>
                <h1 className={paragraph({ size: 'sm', color: 'background' })}>®2024 Smiline Family Dentistry</h1>
                <h1 className={paragraph({ size: 'sm', color: 'background' })}>Invisalign®, the Invisalign logo, and iTero®, among others, are trademarks and/ or service marks of Align Technology, Inc. or one of its subsidiaries or affiliated companies and may be registered in the U.S. and/or other countries.</h1>
                <NextLink
                    className={paragraph({ size: 'sm', color: 'background' })}
                    href={'#'}
                >
                    Accessibility Statement
                </NextLink>
            </div>
        </footer>
    );
}

export default Footer;
