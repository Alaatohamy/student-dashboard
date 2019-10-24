import React, { useState } from "react";
import { connect } from "react-redux";
import { logout } from "redux/user/actions";
import { ReactComponent as Notification } from "assets/notification.svg";
import { ReactComponent as Email } from "assets/email.svg";
import defaultImg from "assets/user.svg";
import "./header.style.scss";

const Header = ({ logout }) => {
  const userData = { name: "Tala", img: "" };
  const [clickedUserImg, setClickedUserImg] = useState(false);
  return (
    <header className="main-header">
      <h2 className="main-header__title"> Welcome {userData.name},</h2>
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
        <img
          src={userData.img ? userData.img : defaultImg}
          alt="user"
          className="main-header__user-img"
          onClick={() => setClickedUserImg(!clickedUserImg)}
        />
        {clickedUserImg ? (
          <ul className="main-header__user-dropdown">
            <li className="logout" onClick={logout}>
              Log out
            </li>
          </ul>
        ) : null}
      </div>
    </header>
  );
};

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatch
)(Header);
