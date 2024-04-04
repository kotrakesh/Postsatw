import React, { useEffect, useState } from 'react';
import { Post } from '../../models/post';
import PostForm from './PostForm';
import { getPost, updatePost } from '../../services/postApiService';
import { useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { Loader } from '../atoms';

const PostEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>();
    const [loading, setLoading] = useState<boolean>(false);
    const [showError, setShowError] = useState(false);

    const handleEditPost = (data: Post) => {
        setLoading(true);
        const response = id && updatePost(parseInt(id), data);
        response &&
            response.then((data) => {
                if (data) {
                    enqueueSnackbar('Post updated succefully!');
                }
                setLoading(false);
            });
    };

    useEffect(() => {
        id &&
            getPost(parseInt(id)).then((data) => {
                if (data) {
                    setPost(data);
                } else {
                    setShowError(true);
                }
            });
    }, [id]);
    if (showError) {
        return <p>Requested Post doesn`t exist</p>;
    }
    return post ? (
        <>
            <h6>Edit Post</h6>
            <PostForm post={post} onSubmit={handleEditPost} loading={loading} />
        </>
    ) : (
        <Loader loading={true}></Loader>
    );
};
export default PostEdit;
