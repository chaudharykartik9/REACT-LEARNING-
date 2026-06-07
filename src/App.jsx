import React, { useState } from 'react'

const App = () => {
  return (
    <div>
      <LightBulb/>
    </div>
  )
}


function LightBulb(){
  const [bulb, setBulb] = useState(true);

  return <div>
    <BulbState bulb={bulb} />
    <ToggleBulb setBulb={setBulb} />
  </div>
}

function BulbState({bulb}){
  return <div>
    {bulb ? "bulb is on" :"bulb is off"}
  </div>
}

function ToggleBulb({setBulb}){
  function toggle(){
    setBulb(currentState => !currentState)
  }
  return <div>
    <button onClick={toggle}>toggle bulb </button>
  </div>
}

export default App