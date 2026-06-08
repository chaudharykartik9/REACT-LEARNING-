import React, { useState } from 'react'


function useCounter(){
    const [count , setCount] = useState(0);
    function increaseCount(){
        setCount(val => val+1 );
    }
   return {
    count : count ,
    increaseCount : increaseCount 
   }
}




const Counter = () => {
    const {count , increaseCount} = useCounter() ;
  return (
    <div>
        <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

export default Counter