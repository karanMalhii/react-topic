import React from "react";
import "./Alert.css";

export default function Alert({ dataArray, dataObject, dataFun, message }) {
  // console.log(dataFun(),dataArray)
  // console.log(props.dataFun())
  // console.log(dataObject)

  // let {dataArray,dataObject,dataFun,message} = props
  // console.log(dataArray,dataObject,dataFun,message)

  return (
    <div className="Alert">
      <h2>{message}</h2>
      {/* <h3>{dataArray}</h3> */}
    </div>
  );
}
