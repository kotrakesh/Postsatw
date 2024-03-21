import { Suspense } from 'react';

import AppRoutes from './routes';
import './App.css';
import '@fontsource/inter';
import MenuDrawer from './components/MenuDrawer';
import { Box, Toolbar } from '@mui/material';
import { SnackbarProvider } from 'notistack'
import { Loader } from './components/atoms';


function App() {
    return (
      <>          
      <Box sx={{ display: 'flex' }}>
            <MenuDrawer/> 
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              
              <Suspense fallback={<Loader loading={true} />} >
                <AppRoutes />
              </Suspense>
            </Box>
        </Box>
      <SnackbarProvider />
      </>

    );
}

export default App;
