import React, { ElementType, ReactNode } from 'react';
import Button from '@mui/material/Button';
interface ButtonAtomProps {
    isLink?: boolean;
    disabled?: boolean;
    children: ReactNode;
    variant?: 'text' | 'contained' | 'outlined';
    color?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning';
    onClick?: any;
    to?: string;
    component?: ElementType<any, any>;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
    disabled = false,
    children,
    variant = 'outlined',
    color = 'primary',
    onClick,
    component,
    to = '',
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onClick}
            component={component}
            to={to}
        >
            {children}
        </Button>
    );
};

export default ButtonAtom;
