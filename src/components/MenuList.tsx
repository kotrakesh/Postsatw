import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
interface menuLink {
    id: number;
    menuLabel: string;
    menuUrl: string;
}
const menuLinks: menuLink[] = [
    {
        id: 1,
        menuLabel: 'Home',
        menuUrl: '/',
    },
    {
        id: 2,
        menuLabel: 'Map view',
        menuUrl: '/map',
    },
    {
        id: 3,
        menuLabel: 'Create Post',
        menuUrl: '/create',
    },
];

const MenuList: React.FC = () => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                className="whiteBg"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Posts Wefox
                    </Typography>
                </Toolbar>
            </AppBar>
            <Divider />
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {menuLinks.map((menuLink) => (
                        <ListItem key={menuLink.id} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={menuLink.menuUrl}
                                selected={pathname === menuLink.menuUrl}
                            >
                                <ListItemText primary={menuLink.menuLabel} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Box>
        </>
    );
};

export default MenuList;
