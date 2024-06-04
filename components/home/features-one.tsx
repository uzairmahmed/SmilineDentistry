import React from 'react';
import FeatureGrid from '../common/feature-grid';
import { RiToothFill } from 'react-icons/ri';

const FeaturesOne = () => {
    const features = [
        {
            key:'emergency-card',
            text: "Providing emergency treatment",
            icon: <RiToothFill className='w-16 h-16 text-background'/>,
        },
        {
            key:'new-patients',
            text: "Accepting new patients and families",
            icon: <RiToothFill className='w-16 h-16 text-background'/>,
        },        {
            key:'sunday-saturday',
            text: "Open on Saturdays and Sundays",
            icon: <RiToothFill className='w-16 h-16 text-background'/>,
        },
    ]

    return (
            <FeatureGrid features={features} color='foreground'/>
    );
}

export default FeaturesOne;
