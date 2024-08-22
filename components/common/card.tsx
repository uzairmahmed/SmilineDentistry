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
        <div className={`flex flex-col lg:flex-row w-full ${separated ? " gap-16 bg-opacity-0 px-2 lg:px-0" : ` gap-10 px-10 py-20 lg:p-20 rounded-none lg:rounded-3xl`} bg-${bgcolor}`}>
            <div className={`flex lg:w-1/2 flex-col ${separated ? "px-10 py-20 lg:p-20 rounded-3xl" : ""} bg-${bgcolor}`}>
                {left}
            </div>
            <div className={`flex lg:w-1/2 flex-col ${separated ? "px-10 py-20 lg:p-20 rounded-3xl" : ""} bg-${bgcolor}`}>
                {right}
            </div>
        </div>
    );
}

export default SplitCard;
