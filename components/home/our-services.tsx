import React from 'react';
import { title, subtitle, button } from "@/components/primitives";
import ServiceGrid from '../common/service-grid';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

const OurServices = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full px-5'>
                <h1 className={title({ size: 'md', fullWidth: true, color:'primary' })}>Our Services</h1>
                {/* <h1 className={subtitle({ fullWidth: true })}>Whether you're seeking a permanent solution for missing teeth with dental implants or looking to enhance your smile with veneers and cosmetic */}
                {/* dentistry, our team is here to support you every step of the way.</h1> */}
            </div>
            <ServiceGrid />

            <Button
                className={button()}
                size='md'
                href={'/services'}
                as={Link}
                color="primary"
                variant="solid"
            >
                Discover our full list of offerings
            </Button>

        </div>
    );
}

export default OurServices;
