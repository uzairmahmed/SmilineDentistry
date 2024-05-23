import React from 'react';
import { title, subtitle, button } from "@/components/primitives";
import ServiceGrid from '../common/service-grid';
import { Button } from "@nextui-org/react";

const OurServices = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full px-5'>
                <h1 className={title({ size: 'sm', fullWidth: true })}>Our Services</h1>
                <h1 className={subtitle({ fullWidth: true })}>We offer a diverse range of services tailored to your dental needs.</h1>
            </div>
            <ServiceGrid />
            <Button className={button()} size='lg' color="default">
                Discover our full list of offerings
            </Button>

        </div>
    );
}

export default OurServices;
