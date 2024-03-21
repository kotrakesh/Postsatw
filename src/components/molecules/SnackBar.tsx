import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useMessageContext } from '../../context/ToastMessageContext';

const Alert: React.FC<AlertProps> = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackBar: React.FC = () => {
  const { message,open,setOpen } = useMessageContext();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000} 
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;