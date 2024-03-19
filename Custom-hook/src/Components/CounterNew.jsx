import React, { useState } from "react";
import useCount from "../Hooks/useCount";

export default function CounterNew() {
  const { count, increment, decrement } = useCount(0);

  return (
    <div>
      <h1>This count is : {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
