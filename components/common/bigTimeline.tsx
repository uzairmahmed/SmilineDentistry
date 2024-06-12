import React from 'react';
import { paragraph, subtitle, title } from '../primitives';


interface BigTimelineProps {
    listofItems: object[];
    numItems: number,
    colortheme: any
}

const BigTimeline: React.FC<BigTimelineProps> = ({ listofItems, numItems, colortheme }) => {
    // console.log(listofItems.length);
    return (
        <div className={`grid items-start px-5 lg:px-10 w-full`}>
            {listofItems.map((item: any, index: number) => (
                <div key={item.key} className='flex flex-row relative w-full my-5 py-10 px-10 lg:px-16 bg-white rounded-3xl gap-5 lg:gap-10'>
                    <div className='z-20'>
                        <div className={`flex -ml-2 w-20 lg:w-28 h-20 lg:h-28 items-center rounded-full bg-${colortheme} z-20`}>
                            <h1 className={subtitle({ size: 'lg', alignment: 'center', color: 'background' })}>{index + 1}</h1>
                        </div>
                    </div>
                    <div className='align-middle text-left w-4/5'>
                        <h1 className={title({ size: 'sm', alignment: 'left', color: 'default' })}>{item.title}</h1>
                        <h1 className={paragraph({ size: 'md', alignment: 'left', color: 'default' })}>{item.desc}</h1>
                    </div>
                    <div className={`${index === listofItems.length - 1 ? "h-[100%]" : "h-[125%]"} w-1 bg-${colortheme} absolute left-[4.4rem] lg:left-28 top-0 z-10 rounded-b-full`}></div>
                </div>
            ))}


        </div>
    );
}

export default BigTimeline;
