import React from "react";
import { ReactComponent as Home } from "assets/home.svg";
import { ReactComponent as Calendar } from "assets/calendar.svg";
import { ReactComponent as Graduate } from "assets/graduate.svg";
import { ReactComponent as Profits } from "assets/profits.svg";
import { ReactComponent as Speaker } from "assets/speaker.svg";
import { ReactComponent as File } from "assets/file.svg";
import "./sidebar.style.scss";

const Sidebar = () => {
  let navData = [
    { name: "dashboard", icon: Home },
    { name: "schedule", icon: Calendar },
    { name: "course", icon: File },
    { name: "gradebook", icon: Graduate },
    { name: "performance", icon: Profits },
    { name: "announcement", icon: Speaker }
  ];

  return (
    <nav className="main-nav">
      <h1 className="main-nav__header">Coligo</h1>
      <ul>
        {navData.map(item => {
          const Icon = item.icon;
          return (
            <li key={item.name}>
              <a href={`/${item.name}`}>
                <Icon className="main-nav__icon" aril-role="personation" />
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
