'use client'
import React, { useState } from 'react';
import { RiToothFill } from "react-icons/ri";
import { title, subtitle, paragraph, button } from "@/components/primitives";
import { Button } from '@nextui-org/button';

const ServiceGrid = () => {
    const [hoveredElement, setHoveredElement] = useState(-1);

    const featured_services = [
        {
            title: "Restorative",
            description: "Revitalize your oral health with treatments \
            that repair and restore damaged teeth, ensuring functionality \
            and aesthetic appeal.",
            icon: <RiToothFill className='w-16 h-16 text-inherit mb-5' />,
        },
        {
            title: "Cosmetic",
            description: "Enhance your smile with services designed to \
            improve dental aesthetics, including whitening, veneers, and \
            shaping.",
            icon: <RiToothFill className='w-16 h-16 text-inherit mb-5' />,
        },
        {
            title: "Orthodontic",
            description: "Achieve a perfectly aligned smile with our \
            advanced orthodontic solutions, including Invisalign and \
            Fastbraces for all ages.",
            icon: <RiToothFill className='w-16 h-16 text-inherit mb-5' />,
        },
        {
            title: "Orthodontic",
            description: "Revitalize your oral health with treatments \
            that repair and restore damaged teeth, ensuring functionality \
            and aesthetic appeal.",
            icon: <RiToothFill className='w-16 h-16 text-inherit mb-5' />,
        }
    ]

    return (
        <div className='flex flex-row gap-5 my-5'>
            {featured_services.map((service, index) => (
                <div onMouseEnter={() => setHoveredElement(index)} onMouseLeave={() => setHoveredElement(-1)}
                    className={`flex flex-col p-10 rounded-3xl items-center justify-center
                bg-white text-default hover:bg-default hover:text-background transition-all
                `}>
                    {service.icon}
                    <h1 className={subtitle({ size: 'sm', color: 'inherit' })}>{service.title}</h1>
                    <h1 className={paragraph({ size: 'sm', color: 'inherit' })}>{service.description}</h1>

                    <Button className={`${hoveredElement == index ? 'opacity-100' : 'opacity-0 h-0'} self-center rounded-full px-10 bg-background text-default transition-all`} size='lg'>
                        Learn More
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default ServiceGrid;
