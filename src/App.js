import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPercent((percent) => percent + 10);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1> Automatic Progress Bar</h1>
      <div className="progress-bar">
        {new Array(percent).fill(null).map((_, i) => {
          return (
            <div className="progress-bar-fill" key={i}>
              {" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
