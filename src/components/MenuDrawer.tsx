import React, { useState } from 'react'
import { Drawer } from '@mui/material'
import MenuList from './MenuList'

const MenuDrawer: React.FC = () => {
    const [open, setOpen] = useState(true)
    const drawerWidth = 240
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }
    return (
        <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
        >
            <MenuList />
        </Drawer>
    )
}

export default MenuDrawer
