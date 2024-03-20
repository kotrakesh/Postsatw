import React, { useEffect, useState } from 'react';
import ConfirmDialog from './ConfirmDialog';
import { deletePost } from '../../services/postApiService';
interface ConfirmDeleteDialogProps{
  id:number,
  openState:boolean,
  onClose:any
}
const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({id,openState,onClose}) => {
    const [open,setOpen]=useState<boolean>(openState);
    const handleDelete = (idn:number) => {
      const response = idn && deletePost(idn);
      response && response.then(data => setOpen(false));
    };
    return (
        <ConfirmDialog
          message="Are you sure you want to delete this post?"
          onConfirm={() =>handleDelete(id)}
          open={open}
          key={`dialog_${id}${open}`}
          onClose={onClose}
        />
    );
  };
  
  export default ConfirmDeleteDialog;