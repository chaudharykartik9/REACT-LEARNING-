import React, { useState } from 'react'
import usePrev from './Hook/usePrev';

const App = () => {
  const [state , setState] = useState(0) ;
  let prev = usePrev(state) ;
  function increament(){
    setState(v=> v+1);
  }
  return (
    <>
    <button onClick={increament} >increase</button>
    <div> number :{state}</div>
    <div>prev: {prev}</div>
    </>
  )
}

export default App