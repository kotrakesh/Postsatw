import { TextField } from '@mui/material'

interface InputFieldProps {
    label?: string
    fieldName: string
    placeholder?: string
    params?: any
    error?: boolean
    helperText?: string
    multiline?: boolean
    rows?: number
    type?: string
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    fieldName,
    placeholder,
    error,
    params,
    helperText,
    multiline = false,
    rows,
    type = 'text',
}) => {
    return (
        <TextField
            // html input attribute
            name={fieldName || ''}
            placeholder={placeholder || ''}
            variant="outlined"
            label={label}
            error={error}
            rows={rows}
            multiline={multiline}
            type={type}
            helperText={helperText}
            {...params}
        />
    )
}

export default InputField
