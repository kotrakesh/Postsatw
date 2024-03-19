import React, {useEffect,useState} from "react";
import { getPost } from "../../services/postApiService";
import { Post } from "../../models/post";
import { useParams } from 'react-router-dom';


const PostList:React.FC=() => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post|null>();
    useEffect(() => {
        id && getPost(parseInt(id)).then(data => setPost(data));
      }, [id]);

      return(post ?<div>
        <ul>
            <li key={post.id}>
              {post.title}{' '}
             
              <img alt={post.title} width={300} src={post.image_url} />
              {post.content}{' '}
              <button >Delete</button>
            </li>
        </ul>
      </div>: <p>...loading</p>)}

export default PostList