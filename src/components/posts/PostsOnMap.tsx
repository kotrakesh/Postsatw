import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import OpenStreetMap from '../molecules/OpenStreetMap';
import { getPosts } from '../../services/postApiService';
import { Post } from '../../models/post';

const PostOnMap: React.FC = () => {
    const [posts, setPosts] = useState<Post[] | null>([]);
    useEffect(() => {
        getPosts().then((data) => setPosts(data));
    }, []);

    return (
        <Box>
            map
            <section>
                {posts && (
                    <OpenStreetMap
                        posts={posts}
                        centerLat={48.7758}
                        centerLong={9.1829}
                    />
                )}
            </section>
        </Box>
    );
};

export default PostOnMap;
