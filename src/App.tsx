import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme
import './App.css';
import '@fontsource/inter';
import MenuDrawer from './components/MenuDrawer';
import { Box, Toolbar } from '@mui/material';
import { Suspense } from 'react';
import Loader from './components/atoms/Loader';

function App() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader loading={false} />}>
          <Box  sx={{ display: 'flex' }}>
            <MenuDrawer/> 
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              
                <AppRoutes />
              
            </Box>
        </Box>
        </Suspense>
        </ThemeProvider>
      </BrowserRouter>
      
    );
}

export default App;
