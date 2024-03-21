import React  from 'react';
import { Button } from '../atoms';
import { Link } from 'react-router-dom';
interface EditPostButtonProps{
  id:number,
}
const EditPostButton: React.FC<EditPostButtonProps> = ({id}) => {

    return (
        <Button component={Link} to={`/edit/${id}`} key={`edit_${id}`}>Edit</Button>

    );
  };
  
  export default EditPostButton;