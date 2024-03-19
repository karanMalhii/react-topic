import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(() => {
    alert("I am clicked");
    console.log("yes its working");
  },[num]);
  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click me {num}
      </button>
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        click me {nums}
      </button>
    </div>
  );
}
