import React, { useState } from "react";

const now = new Date().toLocaleTimeString();

console.log(now);
function App() {
  const [time, setTime] = useState(now);
  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    console.log(time);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
