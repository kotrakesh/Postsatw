import React, {useEffect,useState} from "react";
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getPost } from "../../services/postApiService";
import { Post } from "../../models/post";
import { Button,Loader } from "../atoms";
import { DeletePostButton } from "../molecules";


const PostList:React.FC=() => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post|null>();
    useEffect(() => {
        id && getPost(parseInt(id)).then(data => setPost(data));
      }, [id]);

      return(post ?<Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={post.image_url}
          title={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {post.content}
          </Typography>
        </CardContent>
        <CardActions>
        <Button href={`/edit/${post.id}`}>Edit</Button>
        <DeletePostButton id={post.id} />
        </CardActions>
      </Card>: <Loader loading={false} />)}

export default PostList