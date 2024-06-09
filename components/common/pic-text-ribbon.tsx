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
        <div className={`flex ${imagefirst ? "justify-end" : "justify-start"} flex-row relative gap-5`}>
            <div className={`absolute top-1/2 ${imagefirst ? "left-0" : "right-0"} -translate-y-1/2`}>
                <div className="flex relative w-72 h-72">
                    <Image src={image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
                </div>
            </div>
            <div className={`flex flex-col bg-default p-10 align-middle justify-center w-11/12 self-end rounded-3xl text-left ${imagefirst ? "pl-56 pr-16" : "pr-56 pl-16"}`}>
                <h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>{header}</h1>
                <h1 className={paragraph({ size: 'md', alignment: 'left', color: 'background' })}>{text}</h1>
            </div>
        </div>
    );
}

export default PicTextRibbon;
