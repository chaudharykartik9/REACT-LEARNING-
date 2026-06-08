import React, { useState } from 'react'
import usePost from './Hook/useFetch'

const App = () => {
  const [postId , setpostId] = useState(1)
  const post = usePost("https://jsonplaceholder.typicode.com/posts/"+ postId ) ;
  return (
    <div>
      <button onClick={()=>{setpostId(1)}}>1</button>
      <button onClick={()=>{setpostId(2)}}>2</button>
      <button onClick={()=>{setpostId(3)}}>3</button>
      {JSON.stringify(post)}
    </div>
  )
}

export default App