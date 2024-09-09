import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { useFormContext } from '../../hooks/useFormContext';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactFormStandalone = () => {
    // const { isOpen, close } = useFormContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        const formData = {
            name,
            email,
            phone,
            message,
        };

        // Send formData as JSON to your email service provider
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Handle successful submission
            toast.success('Message sent successfully!');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');

            // close();
        } else {
            // Handle errors
            toast.error('Failed to send message.');
        }
    };

    return (
        <div className='flex flex-col pt-10 gap-8'>
            <Input variant='underlined' color='primary' type="text" label="Name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input variant='underlined' color='primary' type="email" label="Email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input variant='underlined' color='primary' type="tel" label="Phone Number" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Textarea
                variant='underlined'
                color='primary'
                label="Your Message"
                placeholder="Enter your concern/message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <Button color="primary" fullWidth onPress={handleSubmit}>
                Send
            </Button>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ContactFormStandalone;
