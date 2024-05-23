import React from 'react';
import { RiMailFill, RiMapFill, RiPhoneFill } from 'react-icons/ri';
import { paragraph, subtitle, title } from '../primitives';
import Image from 'next/image';

interface TimingRowProps {
    day: string;
    times: string;
}

const TimingRow:React.FC<TimingRowProps> = ({day, times}) => {
    return (
        <div className='flex flex-row justify-between w-full'>
            <h1 className={paragraph({alignment:'left'})}>{day}</h1>
            <h1 className={paragraph({alignment:'right'})}>{times}</h1>
        </div>
    )
}
const TimingMapGrid = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 w-full'>
            <div className='flex flex-col px-16 py-16 rounded-3xl bg-white items-center text-center gap-5'>
                <TimingRow day='Sunday' times='11:00AM - 4:00PM'/>
                <TimingRow day='Monday' times='10:00AM - 7:00PM'/>
                <TimingRow day='Tuesday' times='CLOSED'/>
                <TimingRow day='Wednesday' times='10:00AM - 7:00PM'/>
                <TimingRow day='Thursday' times='10:00AM - 7:00PM'/>
                <TimingRow day='Friday' times='CLOSED'/>
                <TimingRow day='Saturday' times='10:00AM - 4:00PM'/>
            </div>

            <div className={`flex flex-col px-16 py-16 rounded-3xl bg-white items-center text-center gap-5`}>
                <div className='flex w-full h-full bg-slate-300 rounded-3xl'>

                </div>
                {/* <Image alt='map' height='200' width={300} src={"https://geology.com/world/the-united-states-of-america-map.gif"} /> */}
            </div>
        </div>
    );
}

export default TimingMapGrid;
