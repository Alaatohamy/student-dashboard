import React from "react";
import { RequireAuth } from "components";
import "styles/index.scss";

function App() {
  return (
    <div className="App">
      <RequireAuth />
    </div>
  );
}

export default App;
