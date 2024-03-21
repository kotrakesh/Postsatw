import React, {useEffect,useState} from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import { getPosts } from "../../services/postApiService";
import { Post } from "../../models/post";
import { Loader } from "../atoms";
import { DeletePostButton,EditPostButton } from "../molecules";
import { Grid } from "@mui/material";
interface PostListProps{
  post?:Post[]
}
const PostList:React.FC<PostListProps>=({post=null}) => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', 
    renderCell: (params: GridRenderCellParams)=> (<Link to={`/details/${params.row.id}`}>{params.row.title}</Link>),},
    { field: 'content', headerName: 'Content', sortable: false },
    {
      field: 'image_url',
      headerName: 'image',
      sortable: false,
      renderCell: (params: GridRenderCellParams) =>( <img width={100} src={params.value} alt= {params.row.title || ''} key={params.row.id}/>),
    },
    { field: 'lat', headerName: 'Latitude',  },
    { field: 'long', headerName: 'Longitude', },
    { field: 'created_at', headerName: 'Created on',  },
    { field: 'edit', headerName: 'Edit',
     renderCell: (params: GridRenderCellParams)=> (<EditPostButton id={params.row.id} key={`del_${params.row.id}`}/>),
   },
   { field: 'Delete', headerName: 'Delete',
   renderCell: (params: GridRenderCellParams)=> (<DeletePostButton id={params.row.id} key={`del_${params.row.id}`} confirmCallBack={fetchAllPosts}/>),
 }


  ];
    const [posts, setPosts] = useState<Post[]|null>(post);
    const fetchAllPosts =(cache:RequestCache="no-cache")=>{
      const response=getPosts(cache);
      response.then(data => setPosts(data));
    }
    useEffect(() => {
        fetchAllPosts("default");
      }, []);

      return( posts ? (<Grid container spacing={2}>
                          <Grid item xs={10}>
                            <DataGrid
                            rows={posts}
                            columns={columns}
                            initialState={{
                              pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                              },
                            }}
                            autoHeight={true}
                            pageSizeOptions={[10, 10]}
                            />
                          </Grid>
                          </Grid>) :<Loader loading={false} />);
}

export default PostList;