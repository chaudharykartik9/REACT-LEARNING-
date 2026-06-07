import React, { useState, createContext, useContext } from "react";

const bulbContext = createContext();

const App = () => {
  const [bulb, setBulb] = useState(true);
  const objContext = {
    bulb: bulb,
    setBulb: setBulb,
  };
  return (
    <div>
      <bulbContext.Provider value={objContext}>
        <LightBulb />
      </bulbContext.Provider>
    </div>
  );
};

function LightBulb() {
  return (
    <div>
      <BulbState />
      <ToggleBulb />
    </div>
  );
}

function BulbState() {
  const { bulb } = useContext(bulbContext);
  return <div>{bulb ? "bulb is on" : "bulb is off"}</div>;
}

function ToggleBulb() {
  const { setBulb } = useContext(bulbContext);
  function toggle() {
    setBulb((currentState) => !currentState);
  }
  return (
    <div>
      <button onClick={toggle}>toggle bulb </button>
    </div>
  );
}

export default App;
