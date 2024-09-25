import React from 'react';

interface ImageRibbonCardProps {
    image: any;
    inside: any;
}


const ImageRibbonCard:React.FC<ImageRibbonCardProps> = ({image, inside}) => {
    return (
        <div className="flex h-full w-full justify-center py-16 px-2 lg:px-0">
            <img src={image.src} alt={'background'} className='absolute object-cover w-screen h-[700px] sm:h-[700px] lg:h-[600px] z-0' />
            <div className={`flex w-full h-[700px] z-10 justify-start items-center`}>
                <div className="relative flex flex-col w-auto lg:w-5/12 bg-default mt-10 lg:mt-72 p-10 lg:p-20 rounded-3xl gap-5">
                    <div className='bubble absolute w-32 h-32 z-20 top-32 -right-24 bg-secondary rounded-full ' data-speed="0.1"></div>
                    <div className='bubble absolute w-14 h-14 z-20 top-20 right-24 bg-secondary rounded-full ' data-speed="0.1"></div>
                    <div className='bubble absolute w-32 h-32 z-0 -bottom-48 -left-24 bg-secondary rounded-full ' data-speed="0.1"></div>
                    {inside}
                </div>
            </div>
        </div>

    );
}

export default ImageRibbonCard;
