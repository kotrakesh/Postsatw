import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { Post } from "../../models/post";
import PostForm from "./PostForm";
import { savePost } from "../../services/postApiService";



const PostAdd:React.FC=()=>{
    const [resetFlag,setResetFlag]=useState<boolean>(false);
    const handleAddPost=(data:Post)=>{
        let response = savePost(data);
        response.then(() =>
        {
            enqueueSnackbar('Post added succefully!');
            setResetFlag(true);
        });
    }
    return( <><h6>Create Post</h6><PostForm onSubmit={handleAddPost} resetFlag={resetFlag} setResetFlag={setResetFlag}/></>)
}
export default PostAdd;