import React from 'react';
import FeatureGrid from '../common/feature-grid';
import { RiToothFill } from 'react-icons/ri';

const FeaturesOne = () => {
    const features = [
        {
            text: "Providing emergency treatment",
            icon: <RiToothFill className='w-16 h-16 text-background'/>,
        },
        {
            text: "Accepting new patients and families",
            icon: <RiToothFill className='w-16 h-16 text-background'/>,
        },        {
            text: "Open on Saturdays and Sundays",
            icon: <RiToothFill className='w-16 h-16 text-background'/>,
        },
    ]

    return (
        <div className='flex flex-col items-center justify-center'>
            <FeatureGrid features={features} color='foreground'/>
        </div>
    );
}

export default FeaturesOne;
