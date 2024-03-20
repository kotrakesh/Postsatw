import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

interface InputFieldProps{
      label?:string;
      fieldName:string;
      placeholder?:string;
      params?:any;
      error?:boolean;

}
  
const InputField:React.FC<InputFieldProps>=({label,fieldName,placeholder,error,params}) =>{
  return (<FormControl><TextField 
      // html input attribute
      name={fieldName || ""}
      placeholder={placeholder || ""}
      variant="outlined"
      label={label}
      error={error}
      {...params}
    /></FormControl>);
}

export default InputField;