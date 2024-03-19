import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [myData, setMyData] = useState("");

  const count = useRef(10);
  console.log("file: useRef.jsx ~ line 11 ~ UseRef ~ count", count);

  useEffect(() => {
    count.current = count.current + 1;
  });
};

export default function UseRef() {
  return (
    <div>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>The number of times render: {Count.current}</p>
    </div>
  );
}
