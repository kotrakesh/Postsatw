import * as React from 'react';
import Button from '@mui/material/Button';
interface ButtonAtomProps{
    buttonText:string;
    type?:string;
}

const ButtonAtom:React.FC<ButtonAtomProps>=({type,buttonText}) =>{
  return <Button variant="contained" >{buttonText}</Button>;
}

export default ButtonAtom;