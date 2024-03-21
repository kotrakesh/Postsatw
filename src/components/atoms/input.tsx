import { FormControl,TextField } from '@mui/material';

interface InputFieldProps{
      label?:string,
      fieldName:string,
      placeholder?:string,
      params?:any,
      error?:boolean,
      helperText?:string,
      multiline?:boolean,
      rows?:number
}
  
const InputField:React.FC<InputFieldProps>=({label,fieldName,placeholder,error,params,helperText,multiline=false,rows}) =>{
  return (<FormControl variant="outlined"><TextField 
      // html input attribute
      name={fieldName || ""}
      placeholder={placeholder || ""}
      variant="outlined"
      label={label}
      error={error}
      rows={rows}
      multiline
      helperText={helperText}
      {...params}
    /></FormControl>);
}

export default InputField;