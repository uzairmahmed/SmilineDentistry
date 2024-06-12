import Image from 'next/image';
import React from 'react';
import { paragraph, title } from '../primitives';

interface PicTextRibbonProps {
    image: any;
    header: any;
    text: any;
    imagefirst: boolean;
}

const PicTextRibbon: React.FC<PicTextRibbonProps> = ({ image, header, text, imagefirst }) => {
    return (
        <div className={`flex ${imagefirst ? "lg:justify-end" : "lg:justify-start"} flex-col lg:flex-row relative gap-5 bg-default lg:bg-transparent rounded-3xl`}>
            <div className={`lg:absolute lg:top-1/2 ${imagefirst ? "lg:left-0" : "lg:right-0"} lg:-translate-y-1/2 mt-10 lg:mt-0 mx-auto`}>
                <div className="flex relative w-72 h-72">
                    <Image src={image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
                </div>
            </div>
            <div className={`flex flex-col lg:bg-default p-10 align-middle justify-center w-full lg:w-11/12 self-end rounded-3xl text-left ${imagefirst ? "lg:pl-56 lg:pr-16" : "lg:pr-56 lg:pl-16"}`}>
                <h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>{header}</h1>
                <h1 className={paragraph({ size: 'md', alignment: 'left', color: 'background' })}>{text}</h1>
            </div>
        </div>
    );
}

export default PicTextRibbon;
