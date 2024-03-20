import React  from 'react';
import { Button } from '../atoms';
interface EditPostButtonProps{
  id:number,
}
const EditPostButton: React.FC<EditPostButtonProps> = ({id}) => {

    return (
        <Button href={`/edit/${id}`} key={`edit_${id}`}>Edit</Button>

    );
  };
  
  export default EditPostButton;