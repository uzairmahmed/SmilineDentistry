import React from 'react';

interface ImageRibbonProps {
    image: any;
    inside: any;
}


const ImageRibbon: React.FC<ImageRibbonProps> = ({ image, inside }) => {
    return (
        <div className="flex w-full justify-center py-16">
            <img src={image.src} alt='backgroundimage' className='absolute object-cover w-screen h-[1200px] sm:h-[1050px] lg:h-[600px] z-0' />
            <div className={`flex flex-row w-full z-10 justify-center align-middle h-full lg:h-[600px]`}>
                <div className="relative grid grid-cols-1 lg:grid-cols-3 p-10 w-full h-1/2 self-center gap-16">
                    <div className='bubble absolute w-20 h-20 z-20 -top-24 -left-10 bg-default rounded-full ' data-speed="0"></div>
                    {inside}
                    <div className='bubble absolute w-32 h-32 z-20 -bottom-10 -right-48 bg-default rounded-full ' data-speed="0"></div>
                    <div className='bubble absolute w-14 h-14 z-20 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0"></div>
                </div>
            </div>
        </div>

    );
}
 
export default ImageRibbon;
