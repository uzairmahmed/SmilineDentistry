import Image from 'next/image';
import React from 'react';
import { paragraph, subtitle, title } from '../primitives';
import { Button } from '@nextui-org/button';


interface FullProfileCardProps {
    image: any;
    header: string;
    subheader: string;
    text: any;
}

const FullProfileCard: React.FC<FullProfileCardProps> = ({ header, image, text, subheader }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center w-full justify-between bg-white rounded-3xl mx-2 lg:mx-0 px-10 py-14 gap-10">
            <div className='relative h-[250px] lg:h-full w-full lg:w-1/2'>
                <Image src={image} alt="itero" fill={true} className="rounded-3xl object-cover" />
                {/* <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full">
                    <div className='bubble absolute w-48 h-48 z-10 top-48 right-0 bg-default rounded-full ' data-speed="0.1"></div>
                    <div className='bubble absolute w-20 h-20 z-10 top-80 -right-48 bg-default rounded-full ' data-speed="0.1"></div>
                    <div className='bubble absolute w-20 h-20 z-10 -bottom-48 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
                </div> */}
            </div>
            <div className="flex flex-col w-full justify-center text-left">
                <div className='flex flex-col lg:flex-row w-full justify-between items-center'>
                    <div className='flex flex-col w-full lg:w-auto'>
                        <h1 className={title({ size: 'md', alignment: 'left', color: 'default' })}>{header}</h1>
                        <h1 className={subtitle({ size: 'sm', alignment: 'left', color: 'default' })}>{subheader}</h1>
                    </div>
                    <div className='flex justify-end w-full lg:w-auto'>
                        <Button variant="solid" color="default" fullWidth={false} size={'lg'} radius='full' className={``}>
                            Reach Out
                        </Button>
                    </div>
                </div>
                <h1 className={paragraph({ size: 'md', color: 'default' })}>{text}</h1>
            </div>
        </div>
    );
}

export default FullProfileCard;
