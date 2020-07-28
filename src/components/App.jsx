import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // useState hook

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function multiply2() {
    setCount(count * 2);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={multiply2}>x</button>
    </div>
  );
}

export default App;
