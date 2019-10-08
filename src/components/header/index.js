import React from "react";
import notification from "assets/notification.svg";
import email from "assets/email.svg";
import "./header.style.scss";

const Header = () => {
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
        <img
          src={notification}
          alt="notification"
          className="main-header__icon"
        />
        <img src={email} alt="email" className="main-header__icon" />
        {/* [TODO] Add user img */}
        <img src="" alt="user" className="main-header__user-img" />
        <ul className="main-header__user-dropdown">
          <li>Log out</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
