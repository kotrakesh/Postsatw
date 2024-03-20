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
        <label>Title
        <input type="text"  {...register("title")} />
        </label>
        <label>Content
        <input type="text" {...register("content")}  />
        </label>
        <label>image url
        <input type="text" {...register("image_url")}  />
        </label>
        <label>lat
        <input type="text" {...register("lat")}  />
        </label>
        <label>long
        <input type="text" {...register("long")}/>
        </label>
        <button type="submit">{post?"Update":"Add"}</button>
    </form>
 )
}

export default PostForm;
