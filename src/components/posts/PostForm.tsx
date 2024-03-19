import React from "react";
import {useForm} from "react-hook-form"
import { Post } from "../../models/post";

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
        <input type="text"  {...register("title")} />
        <input type="text" {...register("content")}  />
        <input type="text" {...register("image_url")}  />
        <input type="text" {...register("lat")}  />
        <input type="text" {...register("long")}/>
        <button type="submit">{post?"Update":"Add"}</button>
    </form>
 )
}

export default PostForm;
