import React from "react";
import { Post } from "../../models/post";
import PostForm from "./PostForm";



const PostAdd:React.FC=()=>{
    const handleAddPost=(data:Post)=>{
        console.log(data);
    }
    return(<PostForm onSubmit={handleAddPost}/>)
}
export default PostAdd;