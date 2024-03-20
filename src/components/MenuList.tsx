import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
interface menuLink{
    id:number,
    menuLabel:string,
    menuUrl:string,
}
const menuLinks:menuLink[] = [ {
    id:1,
    menuLabel:"Home",
    menuUrl:"/",
},
{
    id:2,
    menuLabel:"Map view",
    menuUrl:"/map",
},
{
    id:3,
    menuLabel:"Create Post",
    menuUrl:"/create",
},
]

const MenuList:React.FC=()=> (
                <>
                    <CssBaseline />
                    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Posts Webfox
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <Divider />
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {menuLinks.map((menuLink) => (
                                <ListItem key={menuLink.id} disablePadding>
                                <ListItemButton component={Link} to={menuLink.menuUrl}>
                                    <ListItemText primary={menuLink.menuLabel} />
                                </ListItemButton>
                                </ListItem> 
                            ))}
                        </List>
                        <Divider />
                    </Box>
                </>
                ); 


export default MenuList;