import React, {useEffect,useState} from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import { getPosts } from "../../services/postApiService";
import { Post } from "../../models/post";
import { Loader } from "../atoms";
import { DeletePostButton,EditPostButton } from "../molecules";

const PostList:React.FC=() => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 ,
    renderCell: (params: GridRenderCellParams)=> (<Link to={`/details/${params.row.id}`}>{params.row.title}</Link>),},
    { field: 'content', headerName: 'content', width: 130,sortable: false },
    {
      field: 'image_url',
      headerName: 'image',
      sortable: false,
      width: 100,
      renderCell: (params: GridRenderCellParams) =>( <img width={100} src={params.value} alt= {params.row.title || ''} key={params.row.id}/>),
    },
    { field: 'lat', headerName: 'Latitude', width: 130 },
    { field: 'long', headerName: 'Longitude', width: 130 },
    { field: 'created_at', headerName: 'Created on',  },
    { field: 'edit', headerName: 'Edit',
     renderCell: (params: GridRenderCellParams)=> (<EditPostButton id={params.row.id} key={`del_${params.row.id}`}/>),
   },
   { field: 'Delete', headerName: 'Edit',
   renderCell: (params: GridRenderCellParams)=> (<DeletePostButton id={params.row.id} key={`del_${params.row.id}`} confirmCallBack={fetchAllPosts}/>),
 }


  ];
    const [posts, setPosts] = useState<Post[]|null>([]);
    const fetchAllPosts =(cache:RequestCache="no-cache")=>{
      const response=getPosts(cache);
      response.then(data => setPosts(data));
    }
    useEffect(() => {
        fetchAllPosts("default");
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
        </div>) :<Loader loading={false} />);
}

export default PostList;