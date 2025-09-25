import React from 'react';
import { subtitle, title } from '../primitives';
import { MailIcon, MapIcon, PhoneIcon } from './icons';

const ContactGrid = () => {
    return (
        <div className='grid grid-cols-1 gap-10 my-10 lg:grid-cols-3'>
            <div className={`flex flex-col px-16 py-16 rounded-3xl bg-white items-center text-center gap-5`}>
                <MailIcon className='w-16 h-16 text-primary' />
                <h1 className={title({ size: 'md', color: 'primary' })}>Email</h1>
                <h1 className={subtitle({ size: 'sm', color: 'foreground' })}>contact@smilinedentistry.ca</h1>
            </div>

            <div className={`flex flex-col px-16 py-16 rounded-3xl bg-white items-center text-center gap-5`}>
                <PhoneIcon className='w-16 h-16 text-primary' />
                <h1 className={title({ size: 'md', color: 'primary' })}>Phone</h1>
                <h1 className={subtitle({ size: 'sm', color: 'foreground' })}>(905) 405-1786</h1>
            </div>

            <div className={`flex flex-col px-16 py-16 rounded-3xl bg-white items-center text-center gap-5`}>
                <MapIcon className='w-16 h-16 text-primary' />
                <h1 className={title({ size: 'md', color: 'primary' })}>Address</h1>
                <h1 className={subtitle({ size: 'sm', color: 'foreground' })}>1-885 Main St. E<br />Milton ON L9T0A3</h1>
            </div>
        </div>
    );
}

export default ContactGrid;
