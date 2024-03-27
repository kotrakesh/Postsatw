import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    IconButton,
    Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '../atoms'
interface ConfirmDialogProps {
    message: string
    onConfirm: () => void
    open?: boolean
    onClose: () => void
}
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    message,
    onConfirm,
    onClose,
    open = false,
}) => {
    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <DialogTitle>Confirm</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogContent>
                <Typography>{message}</Typography>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined" onClick={onClose}>
                    Cancel
                </Button>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={onConfirm}
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
