import React from "react";
import { Header, Sidebar, Highlights, Announcements } from "components";
import "./App.scss";
import "styles/index.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="content-wrapper">
          <Header />
          <div className="content">
            <Highlights />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
