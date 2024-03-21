import React, { useEffect } from "react";
import {useForm} from "react-hook-form"
import { Post } from "../../models/post";
import { Button, InputField } from "../atoms";
import { Box } from "@mui/material";

interface PostFormProps{
    post?: Post |null;//for edit optional
    onSubmit:(data:Post)=> void;
    resetFlag?:boolean
}

const PostForm:React.FC<PostFormProps>=({post,onSubmit,resetFlag=false}) => {
 
 const { register,
    handleSubmit,
    reset,
    formState: { errors }}=useForm<Post>({defaultValues:post || {},});
const handleFormSubmit =(data:Post)=>{
    onSubmit(data);
    
 }
 useEffect(() => {
   resetFlag && reset();
 }, [resetFlag,reset]);
 return(
   <Box
   component="form"
   sx={{
     '& .MuiTextField-root': { m: 1, width: '25ch' },
   }}
   noValidate
   autoComplete="off"
 >
    <form onSubmit={handleSubmit(handleFormSubmit)}>
         <div>
        <InputField error={!!errors?.title} label="Title*" fieldName="title" helperText={errors?.title?.message} params= {register("title", { required:"Titlle is Required"})} />
        </div>
        
        <div>
        <InputField error={!!errors?.content} label="Content*" fieldName="content" helperText={errors?.content?.message}   params={register("content",{ required: "Content  is Required"})} />
        </div>
        <div>
        <InputField label="Image url" fieldName="image_url"  params={register("image_url")} />
        </div>
        <div>
        <InputField label="latitude" fieldName="lat"  params={register("lat")} />
       
        <InputField label="longitude" fieldName="long"  params={register("long")} />
        </div>

        <Button onClick={handleSubmit(handleFormSubmit)} variant="contained">{post?"Update":"Add"}</Button>
    </form>
</Box>
 )
}

export default PostForm;
