import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOperation = (operator) => {
    const value = Number(inputValue);
    if (isNaN(value)) return;

    switch (operator) {
      case "add":
        setResult((prev) => prev + value);
        break;
      case "subtract":
        setResult((prev) => prev - value);
        break;
      case "multiply":
        setResult((prev) => prev * value);
        break;
      case "divide":
        if (value !== 0) {
          setResult((prev) => prev / value);
        } else {
          alert("Cannot divide by zero");
        }
        break;
      default:
        break;
    }
    setInputValue("");
  };

  const resetInput = () => setInputValue("");
  const resetResult = () => setResult(0);

  return (
    <>
   <div id="box">
      <h1>Simple Calculator</h1>
      <h2>Result: {result}</h2>
      <input
        type="number"
        id="input"
        placeholder="Enter a number"
        value={inputValue}
        onChange={handleChange}
      />
      <div id="button">
        <button onClick={() => handleOperation("add")}>Add</button>
        <button onClick={() => handleOperation("subtract")}>Subtract</button>
        <button onClick={() => handleOperation("multiply")}>Multiply</button>
        <button onClick={() => handleOperation("divide")}>Divide</button>
      </div>
      <div id="rebutton">
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </div>
    </div>
    </>
  )
}

export default App
