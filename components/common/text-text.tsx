import Image from 'next/image';
import React from 'react';

interface PicTextProps {
    text1: any;
    text2: any;
}

const TextText: React.FC<PicTextProps> = ({ text1, text2 }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center w-full mt-0 gap-10 lg:gap-20 ">
            <div className={`flex flex-col w-full px-10 lg:p-0 lg:w-full justify-center text-left`}>
                {text1}
            </div>
            <div className={`flex flex-col w-full px-10 lg:p-0 lg:w-full justify-center text-left`}>
                {text2}
            </div>
        </div>
    );
}


export default TextText;
