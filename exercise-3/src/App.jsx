import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);
  const [isText, setIsText] = useState(false);
  /* You will need some function to handle the key pressed and button events */

    function handleChange(event) {
      const value = parseFloat(event.target.value); 
      if (event.target.name === "a") {
        setA(value);
      } else if (event.target.name === "b") {
        setB(value);
      }
    }
  function onChangeSum(event) {
    const sumValue = typeof(a) === "number" && typeof(b) === "number" ? a + b : NaN;
    setSum(sumValue);
    setIsText(isNaN(sumValue));
  }
  console.log(sum)
  return (
    <main>
      <h1>Calculator</h1>

      <label>A = {a}</label>
      <input onChange={handleChange} id="a" name="a" />

      <label>B = {b}</label>
      <input onChange={handleChange} id="b" name="b"  />

      <label>A + B = {sum}</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      {!isText? <input disabled value={sum} /> : <input disabled value="Error" style={{color:"red"}}/>}
      
      <button onClick={onChangeSum}>Compute</button>
    </main>
  );
}

export default App;
