import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [weather, setWeather] = useState(false);
  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setWeather(true);
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setWeather(!weather);
  }

  return (
    <main className={weather ? "sunny" : "rainy"}>
      {weather ? <h1>Sunny Time</h1> : <h1>Rain Time</h1>}
      <h1>TODO</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
