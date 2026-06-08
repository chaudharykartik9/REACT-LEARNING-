import React from 'react'
import usePost from './Hook/useFetch'

const App = () => {
  const post = usePost() ;
  return (
    <div>
      {post.title}
    </div>
  )
}

export default App