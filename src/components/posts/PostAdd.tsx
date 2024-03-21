import React, { useState } from "react";
import { Post } from "../../models/post";
import PostForm from "./PostForm";
import { savePost } from "../../services/postApiService";



const PostAdd:React.FC=()=>{
    const [resetFlag,setResetFlag]=useState<boolean>(false);
    const handleAddPost=(data:Post)=>{
        let response = savePost(data);
        response.then(() =>
            setResetFlag(true) );
    }
    return(<PostForm onSubmit={handleAddPost} resetFlag={resetFlag}/>)
}
export default PostAdd;