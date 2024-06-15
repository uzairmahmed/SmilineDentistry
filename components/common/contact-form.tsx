import { Modal, Button, Input, Textarea, ModalHeader, ModalBody, ModalFooter, ModalContent } from '@nextui-org/react';
import { useFormContext } from '../../hooks/useFormContext';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const { isOpen, close } = useFormContext();
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

            close();
        } else {
            // Handle errors
            toast.error('Failed to send message.');
        }
    };

    return (
        <>
            <Modal backdrop='blur' isOpen={isOpen} onClose={close}>
                <ModalContent className='text-black'>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Contact Us</ModalHeader>
                            <ModalBody>
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

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={handleSubmit}>
                                    Send
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
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
        </>
    );
};

export default ContactForm;
