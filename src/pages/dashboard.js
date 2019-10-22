import React from "react";
import {
  Header,
  Sidebar,
  Highlights,
  Announcements,
  Calender
} from "components";

const Dashboard = () => (
  <>
    <Sidebar />
    <div className="content-wrapper">
      <Header />
      <div className="content">
        <Highlights />
        <Announcements />
        <Calender />
      </div>
    </div>
  </>
);

export default Dashboard;
