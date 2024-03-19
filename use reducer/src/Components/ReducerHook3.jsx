import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.key === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.key === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.key === "reset") {
    return {
      ...state,
      counter: (state.counter = 0),
    };
  } else {
    return state;
  }
};

const initialState = {
  counter: 0,
};

export default function ReducerHook3() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>This is a new reducer.</h1>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ key: "increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ key: "decrement", plyload: 2 })}>
        -
      </button>
      <button onClick={() => dispatch({ key: "reset" })}>reset</button>
    </div>
  );
}
