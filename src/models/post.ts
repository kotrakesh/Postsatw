//Post type
export interface Post {
    id:number,
    title:string,
    content:string,
    lat?:number,
    long?:number,
    image_url?:string,
    created_at?:string,
    updated_at?:string,
}
export const testPost:Post = {
    id:1,
    title:"Test",
    content:"lorem cap"
}