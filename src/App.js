import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div data-test="test-container">
      <button
        data-test="increment-button"
        onClick={() => setCounter((oldVal) => oldVal + 1)}
      >
        Increment Counter
      </button>
      <p data-test="counter-display">{counter}</p>
    </div>
  );
};

export default App;
