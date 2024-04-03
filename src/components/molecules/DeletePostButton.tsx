import React, { useState } from 'react'
import { Button } from '../atoms'
import ConfirmDeleteDialog from './ConfirmDeleteDialog'
interface DeletePostButtonProps {
    id: number
    confirmCallBack?: () => void
}
const DeletePostButton: React.FC<DeletePostButtonProps> = ({
    id,
    confirmCallBack,
}) => {
    const [open, setOpen] = useState<boolean>(false)

    const showDeleteDialog = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
        !!confirmCallBack && confirmCallBack()
    }
    return (
        <>
            <Button
                color="secondary"
                onClick={showDeleteDialog}
                key={`dbutton_${id}`}
            >
                Delete
            </Button>
            <ConfirmDeleteDialog
                id={id}
                openState={open}
                key={`ddian_${id}${open}`}
                onClose={onClose}
            />
        </>
    )
}

export default DeletePostButton
