import React from 'react';
import { subtitle } from "@/components/primitives";

interface Feature {
    key: string;
    text: string;
    icon: React.ReactElement;
}

interface FeatureGridProps {
    features: Feature[];
    color: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, color }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
            {features.map((feature) => (
                <div className={`flex flex-col px-16 py-16 rounded-3xl bg-${color} items-center text-center gap-5`}>
                    {feature.icon}
                    <h1 className={subtitle({ size: 'sm', color: 'background' })}>{feature.text}</h1>
                </div>
            ))}
        </div>
    );
}

export default FeatureGrid;
