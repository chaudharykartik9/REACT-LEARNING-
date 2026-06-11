
function Count() {
  
  return <h2>{count}</h2>;
}

function IncreaseButton() {
 
  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}

function DecreaseButton() {
 
  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}

function MyApp() {
  return (
    <>
      <Count />
      <IncreaseButton />
      <DecreaseButton />
    </>
  );
}
