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
            <h1 className={paragraph({alignment:'left', color:'background'})}>{day}</h1>
            {/* <div className='border-b-1'></div> */}
            <h1 className={paragraph({alignment:'right', color:'background'})}>{times}</h1>
        </div>
    )
}
const TimingGrid = () => {
    return (
            <div className='flex flex-col rounded-3xl items-center text-center gap-5 mt-10'>
                <TimingRow day='Sunday' times='11:00AM - 4:00PM'/>
                <TimingRow day='Monday' times='10:00AM - 7:00PM'/>
                <TimingRow day='Tuesday' times='CLOSED'/>
                <TimingRow day='Wednesday' times='10:00AM - 7:00PM'/>
                <TimingRow day='Thursday' times='10:00AM - 7:00PM'/>
                <TimingRow day='Friday' times='CLOSED'/>
                <TimingRow day='Saturday' times='10:00AM - 4:00PM'/>
            </div>
    );
}

export default TimingGrid;
