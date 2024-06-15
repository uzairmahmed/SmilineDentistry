"use client";

import { Button } from '@nextui-org/react';
import { useFormContext } from '../../hooks/useFormContext';

interface ContactButtonProps {
    navbar?: boolean;
 }
 const defaultProps: ContactButtonProps = {
    navbar: false
}
const ContactFormButton:React.FC<ContactButtonProps> = ({navbar}) => {
  const { openContactForm } = useFormContext();

  return (
    <Button onPress={openContactForm} variant="solid" color="default" fullWidth={false} size={navbar?'md':'lg'} radius='full' className={`${navbar ? "" : "mt-8"}`}>
      Book an Appointment
    </Button>
  );
};

ContactFormButton.defaultProps = defaultProps

export default ContactFormButton;
