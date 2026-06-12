// import React from "react";
import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import { counterState } from "./Counter";
import { evenSelector } from "./recoilSelector";

function Counter() {
  const count = useRecoilValue(counterState);

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterState);

  return (
    <div>
      <button onClick={() => setCount((v) => v + 1)}>Increase</button>

      <button onClick={() => setCount((v) => v - 1)}>Decrease</button>
    </div>
  );
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      <h3>{isEven ? "Even" : "Odd"}</h3>
    </div>
  );
}

const Atoms = () => {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  );
};

export default Atoms;
