import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterState } from "./Hook/Counter";

function Count() {
  const count = useRecoilValue(counterState);
  return <h1>{count}</h1>;
}

function IncreaseButton() {
  const setCount = useSetRecoilState(counterState);

  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Increase
    </button>
  );
}

function DecreaseButton() {
  const setCount = useSetRecoilState(counterState);

  return (
    <button onClick={() => setCount((c) => c - 1)}>
      Decrease
    </button>
  );
}

function MyApp() {
  return (
    <RecoilRoot>
      <Count />
      <IncreaseButton />
      <DecreaseButton />
    </RecoilRoot>
  );
}

export default MyApp;