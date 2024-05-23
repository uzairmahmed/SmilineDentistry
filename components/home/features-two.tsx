import React from 'react';
import FeatureGrid from '../common/feature-grid';
import { RiToothFill } from 'react-icons/ri';

const FeaturesTwo = () => {
    const features = [
        {
            text: "Free Invisalign and FastBraces Consultation",
            icon: <RiToothFill className='w-16 h-16 text-background'/>,
        },
        {
            text: "Direct Billing to all insurance Providers",
            icon: <RiToothFill className='w-16 h-16 text-background'/>,
        },        {
            text: "Located steps from Milton Go",
            icon: <RiToothFill className='w-16 h-16 text-background'/>,
        },
    ]

    return (
        <div className='flex flex-col items-center justify-center'>
            <FeatureGrid features={features} color='default'/>
        </div>
    );
}

export default FeaturesTwo;
