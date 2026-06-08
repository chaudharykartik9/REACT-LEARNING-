import { useEffect, useState } from "react";

 function usePost (){
    const [post , setPost] = useState({}) ;
    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
        const json =  await response.json() ;
        setPost(json);
        
    }
    
    useEffect(()=>{
        getPosts() ;
    },[]) ;


    return post ;
}

export default usePost ;