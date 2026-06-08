import { useEffect, useState } from "react";

function usePost(url) {
  const [post, setPost] = useState({});
  async function getPosts() {
    const response = await fetch(url);
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, [url]);

  return post;
}

export default usePost;
