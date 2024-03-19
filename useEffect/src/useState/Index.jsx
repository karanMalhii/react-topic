import React, { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  const render = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={render}>click me</button>
    </div>
  );
}
