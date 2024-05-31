import React from 'react';

import { Button } from "@nextui-org/react";
import { ArrowRightIcon } from "@nextui-org/shared-icons";
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import heroimg from '../../assets/images/1000_F_420249849_qMOY6cE7ojERSxItVrsAJomqZ9bC3H2j.jpg';

const Hero = () => {
    return (
        <section className="">
            <div className="flex flex-row w-full h-[80vh]">
                <div className="flex flex-col justify-center w-1/2">
                    <div className="flex flex-col md:text-left justify-end h-1/2">
                        <div className="flex flex-col mb-5">
                            <h1 className={subtitle({ size: 'lg' })}>Revitalize your smile, <br /></h1>
                            <h1 className={subtitle({ size: 'lg' })}>Renew your confidence. <br /></h1>
                        </div>
                        <h1 className={title({ color: "default", fullWidth: true })}>Smiline Family Dentistry</h1>
                    </div>
                    <div className="flex flex-col mt-10 w-2/3 justify-center h-1/3">
                        <Button variant="solid" color="default" fullWidth={false} size='lg' radius='full'>
                            Book an Appointment
                        </Button>
                        <h1 className={subtitle({ size: 'sm' })}>Or call us at (905) 405-1786. <br /></h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center w-1/2 p-5'>
                    <div className='flex w-full h-[500px] p-5 mt-20'>
                        {/* <NextImage alt='hero' src={heroimg} fill={true} className='object-cover rounded-3xl object-left' /> */}

                        <Image
                            // className='object-cover rounded-3xl object-left'
                            classNames={{
                                blurredImg: 'w-full h-full',
                                img: "w-full h-full object-cover object-left rounded-3xl",
                                wrapper: "w-full h-full",
                                zoomedWrapper: "w-full h-full"
                            }}
                            as={NextImage}
                            isBlurred
                            objectFit='contain'
                            height={600}
                            width={500}
                            src={heroimg.src}
                            alt="Hero Image"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Hero;
