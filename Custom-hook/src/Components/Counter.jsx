import React, { useState } from "react";
import useCount from "./../Hooks/useCount";

export default function Counter() {
  const { count:counterNum, increment, decrement } = useCount(0);

  return (
    <div>
      <h1> Count value is :  {counterNum} </h1>
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
