import React from 'react';
import { Box } from '@mui/joy';
import Typography from '@mui/joy/Typography';

const NavBar: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                top: 0,
                px: 1.5,
                py: 1,
                zIndex: 10000,
                backgroundColor: 'background.body',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <Typography component="h1" fontWeight="xl">
                    Posts Wefox
                </Typography>
            </Box>
        </Box>
    );
};

export default NavBar;
