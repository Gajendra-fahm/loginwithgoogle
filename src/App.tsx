import React from "react";
import "./App.css";

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const appVersion = process.env.REACT_APP_VERSION;
  return (
    <div className="App">
      <h1>React App with TypeScript</h1>
      <p>API URL: {apiUrl}</p>
      <p>App Version: {appVersion}</p>
    </div>
  );
}

export default App;
