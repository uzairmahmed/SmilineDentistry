import React from 'react';
import { paragraph, subtitle } from '../primitives';


interface TimelineProps {
    listofItems: string[];
    numItems:number,
    colortheme:any
}

const Timeline: React.FC<TimelineProps> = ({ listofItems, numItems, colortheme }) => {
    // console.log(listofItems.length);
    return (
        <div className={`flex flex-col lg:flex-row items-start px-10 lg:px-0`}>
            {listofItems.map((item: any, index: number) => (
                <div key={index} className='flex flex-col relative gap-1 w-auto lg:w-1/5 flex-wrap'>
                    <div className={`flex w-14 h-14 items-center rounded-full bg-${colortheme} z-10`}>
                        <h1 className={subtitle({ size: 'lg', alignment: 'center', color: 'background' })}>{index+1}</h1>
                    </div>
                    <div className='ml-14 pb-5'>
                        <h1 className={paragraph({ size: 'md', alignment: 'left', color: 'foreground' })}>{item}</h1>
                    </div>
                    <div className={`${index === listofItems.length - 1 ? "h-[100%] lg:h-1 w-1 lg:w-[100%]" : "h-[120%] lg:h-1 w-1 lg:w-[120%]"} bg-${colortheme} absolute left-7 lg:left-0 top-0 lg:top-7 -z-0 rounded-full`}></div>
                </div>
            ))}


        </div>
    );
}

export default Timeline;
