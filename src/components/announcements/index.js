import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fakeAnnouncementService } from "redux/announcements/actions";
import "./announcements.style.scss";
import defaultImg from "assets/user.svg";

const Announcements = ({ announcementsData, getAnnouncements }) => {
  useEffect(() => {
    getAnnouncements();
  }, [getAnnouncements]);

  return (
    <section className="announcements section">
      <header className="section__header">
        <div className="section__header__content">
          <h2 className="section__title">Announcements</h2>
          <p className="section__note">we educate, keep updated</p>
        </div>
        <a className="section__link" href="/announcements">
          All
        </a>
      </header>
      <ul className="announcements__list">
        {announcementsData.map(item => (
          <li key={item.key} className="announcement">
            <img
              src={item.img ? item.img : defaultImg}
              className="announcement__img"
              alt={item.owner}
            />
            <div className="announcement__owner">
              <p className="announcement__owner__name">{item.owner}</p>
              <p className="announcement__owner__position">{item.position}</p>
            </div>
            <p className="announcement__content">{item.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapState = state => ({
  announcementsData: state.announcements.announcementsData
});

const mapDispatch = dispatch => ({
  getAnnouncements: () => dispatch(fakeAnnouncementService())
});

export default connect(
  mapState,
  mapDispatch
)(Announcements);
