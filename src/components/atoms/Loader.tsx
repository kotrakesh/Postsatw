import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

interface LoaderProps {
  loading: boolean;
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ loading, message = 'Loading...' }) => {
  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
        <CircularProgress color="primary" />
        <Typography variant="body1" color="textSecondary" ml={2}>
          {message}
        </Typography>
      </Box>
    );
  }
  return null;
};

export default Loader;