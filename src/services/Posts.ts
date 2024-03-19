import { API_URL } from "../constants";
import {Post}  from "../models/post";


export const getPosts= async():Promise<Post[]|null> =>{
    const url = API_URL+"/api/v1/posts";
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

export const savePost:any= {};
export const updatePost:any= {};
export const deletePost:any= {};