import react from "react";
import "./App.css";
import UseState from "./components/Hooks/UseState";

function App() {
  return (
    <>
      <div>
        <Alert
          message={"This is from props message."}
          dataArray={testArray}
          dataObject={testObj}
          dataFun={testFunction}
        ></Alert>
        {/* <Test /> */}

        {/* <Mytask  NewFunc = {MyFunc}/> */}

        <UseState />
      </div>
    </>
  );
}

export default App;
