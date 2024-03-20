import React from "react";
import {useForm} from "react-hook-form"
import { Post } from "../../models/post";
import { InputField } from "../atoms";
import FormControl from "@mui/joy/FormControl";

interface PostFormProps{
    post?: Post |null;//for edit optional
    onSubmit:(data:Post)=> void;
}

const PostForm:React.FC<PostFormProps>=({post,onSubmit}) => {
 const { register,
    handleSubmit,
    watch,
    formState: { errors }}=useForm<Post>({defaultValues:post || {},});
 const handleFormSubmit =(data:Post)=>{
    onSubmit(data);
 }
 return(
    <form onSubmit={handleSubmit(handleFormSubmit)}>
         <div>
        <InputField label="Title" fieldName="title"  params= {register("title")} />
        </div>
        
        <div>
        <InputField label="Content" fieldName="content"   params={register("content")} />
        </div>
        <div>
        <InputField label="Image url" fieldName="image_url"   params={register("image_url")} />
        </div>
        <div>
        <InputField label="latitude" fieldName="lat"  params={register("lat")} />
       
        <InputField label="longitude" fieldName="long"  params={register("long")} />
        </div>

        <button type="submit">{post?"Update":"Add"}</button>
    </form>

 )
}

export default PostForm;
