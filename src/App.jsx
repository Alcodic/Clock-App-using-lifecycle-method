import "./App.css";

import React from "react";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clock App</h1>
        <Clock />
      </header>
    </div>
  );
}

export default App;
