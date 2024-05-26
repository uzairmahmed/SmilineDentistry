import React from 'react';
import { paragraph, subtitle } from '../primitives';


interface TimelineProps {
    listofItems: string[];
    numItems:number,
    colortheme:any
}

const Timeline: React.FC<TimelineProps> = ({ listofItems, numItems, colortheme }) => {
    console.log(listofItems.length);
    return (
        <div className={`grid grid-cols-${numItems}`}>
            {listofItems.map((item: any, index: number) => (
                <div className='flex flex-col relative gap-1'>
                    <div className={`flex w-14 h-14 items-center rounded-full bg-${colortheme} z-10`}>
                        <h1 className={subtitle({ size: 'lg', alignment: 'center', color: 'background' })}>{index+1}</h1>
                    </div>
                    <div className=' ml-14'>
                        <h1 className={paragraph({ size: 'lg', alignment: 'left', color: 'foreground' })}>{item}</h1>
                    </div>
                    <div className={`h-1 w-[120%] bg-${colortheme} absolute top-7 -z-0 rounded-full`}></div>
                </div>
            ))}


        </div>
    );
}

export default Timeline;
