import React from 'react';

import { Button, Link, Chip, Snippet } from "@nextui-org/react";
import { ArrowRightIcon } from "@nextui-org/shared-icons";
import { title, subtitle } from "@/components/primitives";

const Hero = () => {
    return (
        <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
            <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10 h-full">

                <div className="flex flex-col text-center leading-8 md:leading-10 md:text-left justify-center h-full">
                    <div className="inline-block mb-5">
                        <h1 className={subtitle({ size: 'lg' })}>Revitalize your smile, <br /></h1>
                        <h1 className={subtitle({ size: 'lg' })}>Renew your confidence. <br /></h1>
                    </div>
                    <h1 className={title({ color: "blue", fullWidth: true })}>Smiline Family Dentistry</h1>
                </div>
                <div className="inline-block mt-10 w-1/2">
                    <Button variant="solid" color="default" fullWidth={true} size='lg' radius='full'>
                        Book an Appointment
                    </Button>
                    <h1 className={subtitle({ size: 'sm' })}>Or call us at (905) 405-1786. <br /></h1>
                </div>

            </div>
        </section >
    );
}

export default Hero;
