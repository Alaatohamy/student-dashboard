import React from "react";
import { RequireAuth } from "components";
import "./App.scss";
import "styles/index.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <RequireAuth />
      </div>
    </div>
  );
}

export default App;
