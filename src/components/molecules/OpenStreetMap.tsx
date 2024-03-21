import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,useMap  } from 'react-leaflet';
import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import { Post } from '../../models/post';
interface OpenStreetMapProps{
    posts:Post[],
    centerLat:number,
    centerLong:number,
    zoom?:number,
    width?:string,
}
const OpenStreetMap: React.FC<OpenStreetMapProps> = ({posts,centerLat,centerLong,zoom=5,width="80%"}) => {
  return (
    <Box sx={{ width: {width}, height: "100vh" }}>

    <MapContainer center={[centerLat, centerLong]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {posts.map((post)=>
        (<Marker position={[post.lat, post.long]}>
            <Popup>
            {post.title} <br />
            <img alt={post.title} title={post.title} width={80} src={post.image_url}/><br />
            <a href={`/details/${post.id}`}>Details</a>
            </Popup>
        </Marker>))}
    </MapContainer>
    </Box>
  );
};

export default OpenStreetMap;