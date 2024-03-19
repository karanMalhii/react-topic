import React, { useState } from "react";

export default function Userdata() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setLoading(true);
    let response = await fetch("https://fakestoreapi.com/users");
    console.log(response);
  }

  return (
    <div>
      <input onChange={(event) => setInput(event.target.value)} value={input} />
      <button onClick={() => setCount(count + 1)}>Click : {count}</button>
    </div>
  );
}