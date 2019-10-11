import React from "react";
import {
  Header,
  Sidebar,
  Highlights,
  Announcements,
  Calender
} from "components";
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
            <Calender />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
