import React from "react";
import {
  Header,
  Sidebar,
  Highlights,
  Announcements,
  Calender
} from "components";
import "./dashboard.style.scss";

const Dashboard = () => (
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
);

export default Dashboard;
