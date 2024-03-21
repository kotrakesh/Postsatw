import React, { createContext, useContext, useState,ReactNode } from 'react';

interface MessageContextType {
  message: string;
  setMessage: (newMessage: string) => void;
  open: boolean;
  setOpen: (openState: boolean) => void;
}

interface MessageProviderProps {
    children:ReactNode;
}
const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessageContext must be used within a MessageProvider');
  }
  return context;
};

export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);


  return (
    <MessageContext.Provider value={{ message, setMessage,open,setOpen }}>
      {children}
    </MessageContext.Provider>
  );
};