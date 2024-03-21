import { FormControl,TextField } from '@mui/material';

interface InputFieldProps{
      label?:string,
      fieldName:string,
      placeholder?:string,
      params?:any,
      error?:boolean,
      helperText?:string,
}
  
const InputField:React.FC<InputFieldProps>=({label,fieldName,placeholder,error,params,helperText}) =>{
  return (<FormControl variant="outlined"><TextField 
      // html input attribute
      name={fieldName || ""}
      placeholder={placeholder || ""}
      variant="outlined"
      label={label}
      error={error}
      helperText={helperText}
      {...params}
    /></FormControl>);
}

export default InputField;