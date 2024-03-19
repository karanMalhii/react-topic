import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  return state;
};

const initialState = 0;

export default function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>This is a use-reducer hook.</h1>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
