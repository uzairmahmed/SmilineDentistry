'use client'
import React, { useState } from 'react';
import { title, subtitle, paragraph, button } from "@/components/primitives";
import { Button } from '@nextui-org/button';
import { ToothIcon } from './icons';

const ServiceGrid = () => {
    const [hoveredElement, setHoveredElement] = useState(-1);

    const featured_services = [
        {
            key: "emergency",
            title: "Emergency Dentistry",
            description: "If you experience a dental emergency, contact us for immediate attention. We offer same-day appointments to address your urgent needs",
            icon: <ToothIcon className='w-16 h-16 mb-5 text-inherit' />,
        },
        {
            key: "orthodontic",
            title: "Braces and Invisalign",
            description: "Looking to straighten your teeth? We offer free consultations for braces and Invisalign. Book an appointment to explore your options today!",
            icon: <ToothIcon className='w-16 h-16 mb-5 text-inherit' />,
        },
        {
            key: "cosmetic",
            title: "Cosmetic Dentistry",
            description: "Enhance your smile with services designed to improve dental aesthetics, including whitening, veneers, and shaping.",
            icon: <ToothIcon className='w-16 h-16 mb-5 text-inherit' />,
        },
        {
            key: "implants",
            title: "Implant Dentistry",
            description: "Implants restore chewing function, boost oral health, and enhance your smile's appearance. Schedule a free consultation today!",
            icon: <ToothIcon className='w-16 h-16 mb-5 text-inherit' />,
        }
    ]

    return (
        <div className='flex flex-col justify-center gap-5 px-2 my-10 lg:flex-row lg:px-0'>
            {featured_services.map((service, index) => (
                <div key={service.key}
                    className={`flex flex-col bg-primary text-white py-10 rounded-3xl justify-start items-center px-10 basis-1/4 transition-colors`}>
                    <div className='flex flex-col items-center justify-start h-full'>
                        {service.icon}
                        <h1 className={subtitle({ size: 'sm', color: 'inherit'})}>{service.title}</h1>
                        <h1 className={paragraph({ size: 'sm', color: 'inherit' })}>{service.description}</h1>
                    </div>
                </div>
            ))}
        </div>


    );
}

export default ServiceGrid;


{/* <div className='flex flex-col justify-center gap-5 my-10 lg:flex-row'>
    {featured_services.map((service, index) => (
        <div key={service.key} onMouseEnter={() => setHoveredElement(index)} onMouseLeave={() => setHoveredElement(-1)}
            className={`flex flex-col ${hoveredElement == index ? 'bg-default text-white py-10' : 'bg-white text-default py-16'} rounded-3xl justify-center items-center px-10 basis-1/4 transition-colors`}>
            <div className='flex flex-col items-center justify-center'>
                {service.icon}
                <h1 className={subtitle({ size: 'sm', color: 'inherit' })}>{service.title}</h1>
                <h1 className={paragraph({ size: 'sm', color: 'inherit' })}>{service.description}</h1>

                <remove> <Button className={`${hoveredElement == index ? 'opacity-100 h-8' : 'opacity-10 h-0'} self-center rounded-full px-10 bg-background text-default transition-all mt-5`} size='lg'>
                Learn More
            </Button> </remove>
            </div>
        </div>
    ))}
</div> */}
