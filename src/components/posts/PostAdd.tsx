import React from "react";
import { Post } from "../../models/post";
import PostForm from "./PostForm";
import { savePost } from "../../services/postApiService";



const PostAdd:React.FC=()=>{
    const handleAddPost=(data:Post)=>{
        savePost(data);
    }
    return(<PostForm onSubmit={handleAddPost}/>)
}
export default PostAdd;