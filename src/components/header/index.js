import React from "react";
import { ReactComponent as Notification } from "assets/notification.svg";
import { ReactComponent as Email } from "assets/email.svg";
import "./header.style.scss";
import defaultImg from "assets/user.svg";

const Header = () => {
  const userData = { img: "" };
  return (
    <header className="main-header">
      {/* [TODO] Add user name */}
      <h2 className="main-header__title"> Welcome Tala,</h2>
      <div className="main-header__action-list">
        <label htmlFor="site-search" className="visually-hidden">
          search
        </label>
        {/* [TODO] add search icon */}
        <input
          type="search"
          id="site-search"
          name="site-search"
          aria-label="Search through site content"
          placeholder="Search"
          className="main-header__search-input"
        />
        {/* [TODO] Add icons Number */}
        <Notification className="main-header__icon" title="notification" />
        <Email className="main-header__icon" title="email" />
        {/* [TODO] Add user img */}
        <img
          src={userData.img ? userData.img : defaultImg}
          alt="user"
          className="main-header__user-img"
        />
        <ul className="main-header__user-dropdown">
          <li>Log out</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
