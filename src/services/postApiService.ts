import { API_URL } from '../constants';
import { Post } from '../models/post';
import { enqueueSnackbar } from 'notistack';

export const getPosts = async (
    cache?: RequestCache
): Promise<Post[] | null> => {
    const url = `${API_URL}/api/v1/posts`;
    try {
        const response = await fetch(url, {
            cache: !!cache ? cache : 'default',
        });
        if (!response.ok) {
            console.error(
                `Error fetching data: ${response.status} ${response.statusText}`
            );
            enqueueSnackbar(
                `Error fetching data: ${response.status} ${response.statusText}`,
                { variant: 'error' }
            );

            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        enqueueSnackbar(`Error getting posts:${error}`, { variant: 'error' });

        return null;
    }
};

export const getPost = async (id: number): Promise<Post | null> => {
    const url = `${API_URL}/api/v1/posts/${id}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(
                `Error fetching data: ${response.status} ${response.statusText}`
            );
            enqueueSnackbar(
                `Error fetching data: ${response.status} ${response.statusText}`,
                { variant: 'error' }
            );

            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        enqueueSnackbar(`Error getting post:${error}`, { variant: 'error' });

        return null;
    }
};

export const savePost = async (post: Post): Promise<Post | null> => {
    const url = `${API_URL}/api/v1/posts`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ post: post }),
        });
        if (!response.ok) {
            console.error(
                `Error saving data: ${response.status} ${response.statusText}`
            );
            enqueueSnackbar(
                `Error saving data: ${response.status} ${response.statusText}`,
                { variant: 'error' }
            );

            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating post:', error);
        enqueueSnackbar(`Error creating posts:${error}`, { variant: 'error' });
        return null;
    }
};

export const updatePost = async (
    id: number,
    post: Post
): Promise<Post | null> => {
    const url = `${API_URL}/api/v1/posts/${id}`;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),
        });
        if (!response.ok) {
            console.error(
                `Error updating data: ${response.status} ${response.statusText}`
            );
            enqueueSnackbar(
                `Error updating data: ${response.status} ${response.statusText}`,
                { variant: 'error' }
            );

            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating post :', error);
        enqueueSnackbar(`Error updating post:${error}`, { variant: 'error' });
        return null;
    }
};

export const deletePost = async (id: number): Promise<null> => {
    const url = `${API_URL}/api/v1/posts/${id}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        if (!response.ok) {
            console.error(
                `Error deleting data: ${response.status} ${response.statusText}`
            );
            enqueueSnackbar(
                `Error deleting data: ${response.status} ${response.statusText}`,
                { variant: 'error' }
            );

            return null;
        }
        return null;
    } catch (error) {
        console.error('Error deleting post:', error);
        enqueueSnackbar(`Error deleting posts:${error}`, { variant: 'error' });
        return null;
    }
};
