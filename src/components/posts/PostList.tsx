import React, {useEffect,useState} from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { getPosts } from "../../services/postApiService";
import { Post } from "../../models/post";

const PostList:React.FC=() => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'content', headerName: 'content', width: 130,sortable: false },
    {
      field: 'image_url',
      headerName: 'image',
      sortable: false,
      width: 100,
      renderCell: (params: GridRenderCellParams) =>( <img width={100} src={params.value} alt= {params.row.title || ''}/>),
    },
    { field: 'lat', headerName: 'Latitude', width: 130 },
    { field: 'long', headerName: 'Longitude', width: 130 },
    { field: 'created_at', headerName: 'Created on',  },
    { field: 'edit', headerName: 'Edit',
     renderCell: (params: GridRenderCellParams)=> (<a href={`/edit/${params.row.id}`}>Edit</a>),
   },



  ];
    const [posts, setPosts] = useState<Post[]|null>([]);
    useEffect(() => {
        getPosts().then(data => setPosts(data));
      }, []);

      return(posts ? (<div style={{ width:"80%"}}>
          <DataGrid
          rows={posts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          autoHeight={true}
          pageSizeOptions={[5, 10]}
          />
        </div>) :<p>loading</p>);
}

export default PostList;