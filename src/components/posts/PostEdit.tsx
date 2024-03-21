import React, { useEffect, useState } from "react";
import { Post } from "../../models/post";
import PostForm from "./PostForm";
import { getPost, updatePost } from "../../services/postApiService";
import { useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack'



const PostEdit:React.FC=()=>{
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post|null>();
    const handleEditPost=(data:Post)=>{
       const response = id && updatePost(parseInt(id),data);
       response && response.then(()=>{
        enqueueSnackbar('Post updated succefully!');
      })
    }
    useEffect(() => {
        id && getPost(parseInt(id)).then(data => setPost(data));
      }, [id]);
    return(post ? <PostForm post={post} onSubmit={handleEditPost}/>:<p>...laoding</p>)
}
export default PostEdit;