import AppRoutes from './routes';
import './App.css';
import '@fontsource/inter';
import MenuDrawer from './components/MenuDrawer';
import { Box, Toolbar } from '@mui/material';


function App() {
    return (
          <Box  sx={{ display: 'flex' }}>
            <MenuDrawer/> 
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              
                <AppRoutes />
              
            </Box>
        </Box>
    );
}

export default App;
