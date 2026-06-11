import React, { useEffect, useRef } from 'react'

const usePrev = (value) => {
    const ref = useRef() ;
    console.log("start");
    


    useEffect(()=>{
        console.log("middle");
        
        ref.current = value ;
    },[value])


    console.log("return ");
    
  return ref.current ;
}

export default usePrev