import React, { useEffect, useState } from "react";
import { Post } from "../../models/post";
import PostForm from "./PostForm";
import { getPost } from "../../services/postApiService";
import { useParams } from 'react-router-dom';


const PostEdit:React.FC=()=>{
    const { id } = useParams<{ id: string }>();
    const handleEditPost=(data:Post)=>{
        console.log(data);
    }
    const [post, setPost] = useState<Post|null>();
    useEffect(() => {
        id && getPost(parseInt(id)).then(data => setPost(data));
      }, [id]);
    return(post ? <PostForm post={post} onSubmit={handleEditPost}/>:<p>...laoding</p>)
}
export default PostEdit;