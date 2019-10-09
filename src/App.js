import React from "react";
import { Header, Sidebar } from "components";
import "./App.css";
import "styles/index.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="content">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
