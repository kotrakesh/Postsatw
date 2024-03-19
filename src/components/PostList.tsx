import React, {useEffect,useState} from "react";
import { getPosts } from "../services/Posts";
import { Post } from "../models/post";


const PostList:React.FC=() => {
    const [posts, setPosts] = useState<Post[]|null>([]);
    useEffect(() => {
        getPosts().then(data => setPosts(data));
      }, []);

      return(<div>
        <ul>
          {posts && posts.map(post => (
            <li key={post.id}>
              {post.title}{' '}
             
              <img width={300} src={post.image_url} />
              {post.content}{' '}
              <button >Delete</button>
            </li>
          ))}
        </ul>
      </div>)}

export default PostList