import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  const addValue = () => {
    counter = counter + 1;
    if (counter > 20) {
      counter = 20;
      setCounter(counter);
    } else setCounter(counter);
  };

  const removeValue = () => {
    counter = counter - 1;
    if (counter < 0) {
      counter = 0;
      setCounter(counter);
    } else setCounter(counter);
  };
  return (
    <>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
