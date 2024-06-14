import React from 'react';
import { paragraph, title } from '../primitives';

interface SplitCardProps {
    left: any;
    right: any;
    separated: boolean;
    bgcolor: any;
}

const SplitCard: React.FC<SplitCardProps> = ({ left, right, separated, bgcolor }) => {
    return (
        <div className={`flex flex-col lg:flex-row w-full ${separated ? " gap-16 bg-opacity-0" : ` gap-10 p-20 rounded-3xl`} bg-${bgcolor}`}>
            <div className={`flex lg:w-1/2 flex-col ${separated ? "p-20 rounded-3xl" : ""} bg-${bgcolor}`}>
                {left}
            </div>
            <div className={`flex lg:w-1/2 flex-col ${separated ? "p-20 rounded-3xl" : ""} bg-${bgcolor}`}>
                {right}
            </div>
        </div>
    );
}

export default SplitCard;
