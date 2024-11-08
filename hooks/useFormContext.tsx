import { createContext, useContext, ReactNode } from 'react';
import { useDisclosure } from '@nextui-org/modal';

interface FormContextProps {
  isOpen: boolean;
  openContactForm: () => void;
  close: () => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <FormContext.Provider value={{ isOpen, openContactForm: onOpen, close: onClose }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
