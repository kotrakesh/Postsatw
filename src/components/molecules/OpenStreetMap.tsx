import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Box } from '@mui/material'
import 'leaflet/dist/leaflet.css'
import { Post } from '../../models/post'
import { isValidLat, isValidLong } from '../../utils/validation'
interface OpenStreetMapProps {
    posts: Post[]
    centerLat: number
    centerLong: number
    zoom?: number
    width?: string
}
const OpenStreetMap: React.FC<OpenStreetMapProps> = ({
    posts,
    centerLat,
    centerLong,
    zoom = 5,
    width = '80%',
}) => {
    return (
        <Box sx={{ width: { width }, height: '90vh' }}>
            <MapContainer
                center={[centerLat, centerLong]}
                zoom={zoom}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {posts
                    .filter(
                        (post) =>
                            post?.lat &&
                            isValidLat(post.lat) &&
                            post?.long &&
                            isValidLong(post.long)
                    )
                    .map((post, index) => {
                        return (
                            <Marker
                                key={index}
                                position={[post?.lat || 0, post?.long || 0]}
                            >
                                <Popup>
                                    {post.title} <br />
                                    <img
                                        alt={post.title}
                                        title={post.title}
                                        width={80}
                                        src={post?.image_url}
                                    />
                                    <br />
                                    <a href={`/details/${post.id}`}>Details</a>
                                </Popup>
                            </Marker>
                        )
                    })}
            </MapContainer>
        </Box>
    )
}

export default OpenStreetMap
