import React from 'react';
import { paragraph, title } from '../primitives';

interface TextHeaderSectionProps {
    header: string;
    text: string;
}

const TextHeaderSection:React.FC<TextHeaderSectionProps> = ({header, text}) => {
    return (
        <div className="flex flex-col mt-28 justify-center w-1/2">
            <h1 className={title({ size: 'md', alignment: 'center' })}>{header}</h1>
            <h1 className={paragraph({ size: 'lg' })}>{text}</h1>
        </div>
    );
}

export default TextHeaderSection;
