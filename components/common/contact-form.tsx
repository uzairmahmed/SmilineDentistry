import { Modal, Button, Input, Textarea, ModalHeader, ModalBody, ModalFooter, ModalContent } from '@nextui-org/react';
import { useFormContext } from '../../hooks/useFormContext';

const ContactForm = () => {
    const { isOpen, close } = useFormContext();

    return (
        <Modal backdrop='blur' isOpen={isOpen} onClose={close}>
            <ModalContent className='text-black'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Contact Us</ModalHeader>
                        <ModalBody>
                            <Input variant='underlined' color='primary' type="name" label="Name" placeholder="Enter your name" />
                            <Input variant='underlined' color='primary' type="email" label="Email" placeholder="Enter your email" />
                            <Input variant='underlined' color='primary' type="tel" label="Phone Number" placeholder="Enter your phone number" />
                            <Textarea
                                variant='underlined'
                                color='primary'
                                label="Your Message"
                                placeholder="Enter your concern/message"
                            />

                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Action
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ContactForm;
