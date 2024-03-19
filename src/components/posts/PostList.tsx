import React, {useEffect,useState} from "react";
import { getPosts } from "../../services/postApiService";
import { Post } from "../../models/post";


const PostList:React.FC=() => {
    const [posts, setPosts] = useState<Post[]|null>([]);
    useEffect(() => {
        getPosts().then(data => setPosts(data));
      }, []);

      return(<div>
        <ul>
          {posts && posts.map(post => (
            <li key={post.id}>
              <a href={`/details/${post.id}`}>{post.title}{' '}</a>
             
              <img alt={post.title} width={300} src={post.image_url} />
              {post.content}{' '}
              <a href={`/edit/${post.id}`}>edit</a>
              <button >Delete</button>
            </li>
          ))}
        </ul>
      </div>)}

export default PostList