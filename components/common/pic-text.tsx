import Image from 'next/image';
import React from 'react';

interface PicTextProps {
    image: any;
    inside: any;
    hasCustomImage?: boolean;
    customImageDiv?: any
}

const defaultProps: PicTextProps = {
    image: '',
    inside: (<></>),
    hasCustomImage: false,
    customImageDiv: (<></>)

}

const PicText: React.FC<PicTextProps> = ({ image, inside, hasCustomImage = false, customImageDiv = (<></>) }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center w-full mt-0 gap-10 lg:gap-20 ">
            {image ? (<div>
                <div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full ">
                    {hasCustomImage ?
                        customImageDiv :
                        <Image src={image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
                    }
                    <div className='hidden lg:flex bubble absolute w-48 h-48 z-10 -top-5 -left-16 bg-default rounded-full ' data-speed="0"></div>
                    <div className='hidden lg:flex bubble absolute w-20 h-20 z-10 -bottom-12 -right-0 bg-default rounded-full ' data-speed="0"></div>
                    <div className='flex lg:hidden bubble absolute w-32 h-32 z-10 -top-5 -left-16 bg-default rounded-full ' data-speed="0"></div>
                    <div className='flex lg:hidden bubble absolute w-10 h-10 z-10 -bottom-0 -right-0 bg-default rounded-full ' data-speed="0"></div>

                </div>
            </div>) : (<></>)}
            <div className={`flex flex-col w-full px-10 lg:p-0 ${image ? "lg:w-1/2" : "lg:w-full"} justify-center text-left`}>
                {inside}
            </div>
        </div>
    );
}

PicText.defaultProps = defaultProps

export default PicText;
