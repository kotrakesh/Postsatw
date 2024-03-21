import AppRoutes from './routes';
import './App.css';
import '@fontsource/inter';
import MenuDrawer from './components/MenuDrawer';
import { Box, Toolbar } from '@mui/material';
import { SnackbarProvider } from 'notistack'


function App() {
    return (
      <>          
      <Box sx={{ display: 'flex' }}>
            <MenuDrawer/> 
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
                <AppRoutes />
            </Box>
        </Box>
      <SnackbarProvider />
      </>

    );
}

export default App;
