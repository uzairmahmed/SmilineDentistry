import React from 'react';
import { title, subtitle } from "@/components/primitives";
import ContactGrid from '../common/contact-grid';
import TimingGrid from '../common/timing-grid';

const ContactUs = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full px-5'>
                <h1 className={title({ size: 'sm', fullWidth: true })}>Get in Touch</h1>
                <h1 className={subtitle({ fullWidth: true })}>Ready to transform your smile? Reach out and let's start the conversation.</h1>
            </div>
            <ContactGrid />
            <TimingGrid />

        </div>
    );
}

export default ContactUs;
