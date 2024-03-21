import React, {useEffect,useState} from "react";
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getPost } from "../../services/postApiService";
import { Post } from "../../models/post";
import { Button,Loader } from "../atoms";
import { DeletePostButton } from "../molecules";
import { Box } from "@mui/material";
interface PostDetailsProps{
  postDefault?:Post
}

const PostDetails:React.FC<PostDetailsProps>=({postDefault=null}) => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post|null>(postDefault);
    useEffect(() => {
        id && getPost(parseInt(id)).then(data => setPost(data));
      }, [id]);

      return(post ?<Box>
        <h6>{post.title} Details</h6>
        <Card sx={{ maxWidth: 500 }}>
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
        <Button component={Link} to={`/edit/${post.id}`}>Edit</Button>
        <DeletePostButton id={post.id} />
        </CardActions>
      </Card></Box>: <Loader loading={false} />)}

export default PostDetails;