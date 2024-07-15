'use client'

import React from 'react';
import { paragraph, subtitle, title } from '../primitives';

const TimeClock = () => {
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

	function isCurrentHour(hourDot: number) {
		const today = new Date()
		const currentHour = (today.getHours() + 24) % 12 || 12

		if (currentHour === hourDot) {
			return true
		} else {
			return false
		}
	}

    return (
        <div className="h-64 w-64">
            <div className="relative flex w-full h-full rounded-full border-2 border-default items-center justify-center">
                <div className={`hour-12 absolute w-4 h-4 ${isCurrentHour(12) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-1  absolute w-4 h-4 ${isCurrentHour(1) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-2  absolute w-4 h-4 ${isCurrentHour(2) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-3  absolute w-4 h-4 ${isCurrentHour(3) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-4  absolute w-4 h-4 ${isCurrentHour(4) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-5  absolute w-4 h-4 ${isCurrentHour(5) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-6  absolute w-4 h-4 ${isCurrentHour(6) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-7  absolute w-4 h-4 ${isCurrentHour(7) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-8  absolute w-4 h-4 ${isCurrentHour(8) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-9  absolute w-4 h-4 ${isCurrentHour(9) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-10 absolute w-4 h-4 ${isCurrentHour(10) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`hour-11 absolute w-4 h-4 ${isCurrentHour(11) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>

                <div className="flex flex-col w-5/12 h-5/12 bg-default rounded-3xl">
                    <h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'center', fullWidth: true })}>{weekday[new Date().getDay()]}</h1>
                    <div className="flex flex-col w-auto h-full bg-background rounded-3xl border-2 border-default pb-5">
                        <h1 className={subtitle({ size: 'md', color: 'default', alignment: 'center', fullWidth: true })}>{month[new Date().getMonth()]}</h1>
                        <h1 className={title({ size: 'lg', color: 'default', alignment: 'center', fullWidth: true })}>{new Date().getDate()}</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TimeClock;
