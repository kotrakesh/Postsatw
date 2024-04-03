import React, { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { Post } from '../../models/post';
import PostForm from './PostForm';
import { savePost } from '../../services/postApiService';

const PostAdd: React.FC = () => {
    const [resetFlag, setResetFlag] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleAddPost = (data: Post) => {
        setLoading(true);
        let response = savePost(data);
        response.then(() => {
            enqueueSnackbar('Post added succefully!');
            setResetFlag(true);
            setLoading(false);
        });
    };
    return (
        <>
            <h6>Create Post</h6>
            <PostForm
                onSubmit={handleAddPost}
                resetFlag={resetFlag}
                setResetFlag={setResetFlag}
                loading={loading}
            />
        </>
    );
};
export default PostAdd;
