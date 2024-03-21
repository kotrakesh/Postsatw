import React,{ElementType, ReactNode}  from 'react';
import Button from '@mui/material/Button';
interface ButtonAtomProps{
    isLink?:boolean,
    disabled?:boolean,
    href?:string,
    children:ReactNode,
    variant?:"text" | "contained" | "outlined",
    color?:"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    onClick?:any,
    component?:ElementType,
}

const ButtonAtom:React.FC<ButtonAtomProps>=({disabled=false,href,children,variant="outlined",color="primary",onClick,component}) =>{
  return (<Button 
          href={href} 
          variant={variant}
          color={color}
          disabled={disabled}
          onClick={onClick}
          >
              {children}
          </Button>);
  
}

export default ButtonAtom;