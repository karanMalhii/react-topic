import React from "react";
import Data from "./Data";
import data from "./../../data/users.json"

export default function Userdata() {
  return (
    <div>
      <Data MyData={data.users}/>
    </div>
  );
}
