import React from 'react';
import { paragraph, title } from '../primitives';

interface TextHeaderSectionProps {
    header: string;
    text: string;
}

const TextHeaderSection:React.FC<TextHeaderSectionProps> = ({header, text}) => {
    return (
        <div className="flex flex-col justify-center w-4/5 lg:w-2/3 text-left lg:text-center">
            <h1 className={title({ size: 'md' })}>{header}</h1>
            <h1 className={paragraph({ size: 'lg' })}>{text}</h1>
        </div>
    );
}

export default TextHeaderSection;
