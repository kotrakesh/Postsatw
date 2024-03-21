import React from 'react';
import ConfirmDialog from './ConfirmDialog';
import { deletePost } from '../../services/postApiService';
interface ConfirmDeleteDialogProps{
  id:number,
  openState:boolean,
  onClose:()=>void
}
const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({id,openState,onClose}) => {
    const handleDelete = (idn:number) => {
      const response = idn && deletePost(idn);
      response && response.then(() =>onClose());
    };
    return (
        <ConfirmDialog
          message="Are you sure you want to delete this post?"
          onConfirm={() =>handleDelete(id)}
          open={openState}
          key={`dialog_${id}${openState}`}
          onClose={onClose}
        />
    );
  };
  
  export default ConfirmDeleteDialog;