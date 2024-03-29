import { API_URL } from "../constants";
import {Post}  from "../models/post";

export const getPosts= async(cache?:RequestCache):Promise<Post[]|null> =>{
    const url = `${API_URL}/api/v1/posts`;
    const response = await fetch(url,{ cache: !!cache?cache:"default"});
    try{
        if (!response.ok) {
        console.error(`Error fetching data: ${response.status} ${response.statusText}`);
        return null;
      }
  
      const data = await response.json();
      return data;
    }catch (error) {
        console.error('Error:', error);
    return null;
    }

}

export const getPost= async(id:number):Promise<Post|null> =>{
    const url = `${API_URL}/api/v1/posts/${id}`;
    const response = await fetch(url);
    try{
        if (!response.ok) {
        console.error(`Error fetching data: ${response.status} ${response.statusText}`);
        return null;
      }
  
      const data = await response.json();
      return data;
    }catch (error) {
        console.error('Error:', error);
        return null;
    }

}

export const savePost=async(post:Post):Promise<Post|null>=> {
    const url = `${API_URL}/api/v1/posts`;
    try {
        const response = await fetch(url,{
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({post:post}),
          });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error creating post:', error);
        return null;
      }

};
export const updatePost=async(id:number,post:Post):Promise<Post|null>=> {
    const url = `${API_URL}/api/v1/posts/${id}`;
    try {
        const response = await fetch(url,{
            method: "PUT",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(post),
          });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error updating post:', error);
        return null;
      }

};
export const deletePost=async(id:number):Promise<null>=> {
    const url = `${API_URL}/api/v1/posts/${id}`;
    try {
        const response = await fetch(url,{
            method: "DELETE",
          });
          if(response){
            
          }
        return null;
      } catch (error) {
        console.error('Error deleting post:', error);
        return null;
      }

};