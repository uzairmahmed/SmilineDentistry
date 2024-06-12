import React from 'react';
import clsx from "clsx";
import { Logo } from "@/components/icons";
import { paragraph, title } from './primitives';
import { siteConfig } from '@/config/site';
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center py-2 bg-primary shadow-md">
            <div className='grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 w-full max-w-6xl items-center py-10'>
                <div className='flex flex-col items-center'>
                    <Logo width={350} height={350} />
                    {/* <h1 className={title({ size: 'md', color: 'background' })}>Smiline Family Dentistry</h1> */}
                </div>
                <div className='flex flex-col gap-5 items-center lg:items-start order-none lg:order-first'>
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
                <div className='grid grid-rows-3 max-w-7xl text-center lg:text-right items-center lg:items-end'>
                    <h1 className={paragraph({ size: 'sm', color: 'background' })}>(905) 405-1786</h1>
                    <h1 className={paragraph({ size: 'sm', color: 'background' })}>1-885 Main St. E, Milton ON L9T5A7</h1>
                    <h1 className={paragraph({ size: 'sm', color: 'background' })}>contact@smilinedentistry.com</h1>
                </div>
            </div>

            <div className='flex flex-col my-10 items-center max-w-7xl text-center'>
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
