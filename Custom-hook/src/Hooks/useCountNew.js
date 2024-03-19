import React,{useState} from "react";

export default function useCountNew() {
  const [count, setCount] = useState();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement
  };
}
