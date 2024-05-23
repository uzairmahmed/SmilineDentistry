import React from 'react';
import { RiToothFill } from "react-icons/ri";
import { title, subtitle, paragraph } from "@/components/primitives";

const ServiceGrid = () => {
    const featured_services = [
        {
            title: "Restorative",
            description: "Revitalize your oral health with treatments \
            that repair and restore damaged teeth, ensuring functionality \
            and aesthetic appeal.",
            icon: <RiToothFill className='w-16 h-16 text-default'/>,
        },
        {
            title: "Cosmetic",
            description: "Enhance your smile with services designed to \
            improve dental aesthetics, including whitening, veneers, and \
            shaping.",
            icon: <RiToothFill className='w-16 h-16 text-default'/>,
        },
        {
            title: "Orthodontic",
            description: "Achieve a perfectly aligned smile with our \
            advanced orthodontic solutions, including Invisalign and \
            Fastbraces for all ages.",
            icon: <RiToothFill className='w-16 h-16 text-default'/>,
        },
        {
            title: "Orthodontic",
            description: "Revitalize your oral health with treatments \
            that repair and restore damaged teeth, ensuring functionality \
            and aesthetic appeal.",
            icon: <RiToothFill className='w-16 h-16 text-default'/>,
        }
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-10'>
            {featured_services.map((service) => (
                <div className='flex flex-col px-16 py-16 rounded-3xl bg-white'>
                    {service.icon}
                    <h1 className={subtitle({size:'sm', color:'default'})}>{service.title}</h1>
                    <h1 className={paragraph({size:'sm'})}>{service.description}</h1>
                </div>
            ))}
        </div>
    );
}

export default ServiceGrid;
